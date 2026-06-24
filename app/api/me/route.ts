export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { api } from '../api';
import { cookies } from 'next/headers';
import { logErrorResponse } from '../_utils/utils';
import { isAxiosError } from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const headers = {
      Cookie: cookieStore.toString(),
    };

    let res;
    try {
      res = await api.get('/api/auth/me', { headers });
    } catch (primaryError) {
      if (!isAxiosError(primaryError)) {
        throw primaryError;
      }

      // Backward compatibility for backend branches where the endpoint is mounted as /me.
      res = await api.get('/me', { headers });
    }

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status }
      );
    }
    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
