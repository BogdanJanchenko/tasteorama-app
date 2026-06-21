// 'use client';
// import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
// import { useState } from 'react';

// export default function TanStackProvider({ children }: { children: React.ReactNode }) {
//   const [client] = useState(() => new QueryClient());
//   return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
// }

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
