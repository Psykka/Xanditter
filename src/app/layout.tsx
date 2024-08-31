import { Box, Container } from '@chakra-ui/react'

import Sidebar from '~/components/layout/Sidebar'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <ClerkProvider>
      <html>
        <body>
          <Providers>
            <Box bg='gray.900'>
              <Container maxW='container.xl'>
                <Box display='flex' h='100vh'>
                  <Sidebar />
                  {children}
                </Box>
              </Container>
            </Box>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}