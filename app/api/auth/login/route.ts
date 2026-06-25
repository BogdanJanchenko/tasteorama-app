import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../api';
import { cookies } from 'next/headers';
import { isAxiosError } from 'axios';
import { logErrorResponse, normalizeSessionId } from '../../_utils/utils';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const apiRes = await api.post('/auth/login', body);

    const cookieStore = await cookies();
    const setCookie = apiRes.headers['set-cookie'];

    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      const skipKeys = new Set([
        'expires',
        'max-age',
        'path',
        'httponly',
        'secure',
        'samesite',
        'domain',
      ]);

      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        const maxAge = parsed['Max-Age'] ? parseInt(parsed['Max-Age'], 10) : undefined;
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path || '/',
          ...(maxAge !== undefined && { maxAge }),
        };

        // Зберігаємо ВСІ куки від бекенду (PHPSESSID, accessToken, refreshToken тощо)
        for (const [key, value] of Object.entries(parsed)) {
          if (!skipKeys.has(key.toLowerCase()) && value) {
            cookieStore.set(key, String(value), options);
          }
        }
      }

      const maxAgeAttr = attributes.find((attr) =>
        attr.trim().toLowerCase().startsWith('max-age=')
      );

      const expiresAttr = attributes.find((attr) =>
        attr.trim().toLowerCase().startsWith('expires=')
      );

      cookieStore.set(name, name === 'sessionId' ? normalizeSessionId(value) : value, {
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        ...(maxAgeAttr && {
          maxAge: Number(maxAgeAttr.split('=')[1]),
        }),
        ...(expiresAttr && {
          expires: new Date(expiresAttr.split('=').slice(1).join('=')),
        }),
      });
    }

    console.log('Cookies after login:', cookieStore.getAll());

    return NextResponse.json(apiRes.data, {
      status: apiRes.status,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);

      return NextResponse.json(
        {
          error: error.message,
          response: error.response?.data,
        },
        {
          status: error.response?.status || 500,
        }
      );
    }

    logErrorResponse({
      message: (error as Error).message,
    });

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
