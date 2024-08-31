import { Button, Heading, VStack, HStack, Box } from '@chakra-ui/react'
import { House, Bell, UserRound, Bolt, Feather } from 'lucide-react'
import MenuLink from './MenuLink'

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const menuLinks = [
    { href: '/', text: 'Home', icon: <House /> },
    { href: '/notifications', text: 'Notifications', icon: <Bell /> },
    { href: '/profile', text: 'Profile', icon: <UserRound /> },
    { href: '/settings', text: 'Settings', icon: <Bolt /> },
]

export default async function Sidebar() {
    return (
        <VStack
            align='flex-start'
            justify={'space-between'}
            w={64}
            minW={64}
            h='100vh'
            borderRight='1px'
            borderColor='gray.600'
            color='gray.300'
            p={4}
        >
            <VStack spacing={4} align='flex-start' w='100%'>
                <Heading size='lg'>𝕏anditter</Heading>

                {menuLinks.map((link) => (
                    <MenuLink key={link.href} href={link.href} icon={link.icon}>
                        {link.text}
                    </MenuLink>
                ))}

                <Button
                    colorScheme='blue'
                    w='100%'
                    h={12}
                    borderRadius='xl'
                    _hover={{ bg: 'blue.300' }}
                >
                    <SignedOut>
                        <SignInButton>
                            Entrar
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <HStack spacing={2}>
                            <Feather />
                            <p>Xandar</p>
                        </HStack>
                    </SignedIn>
                </Button>
            </VStack>

            <SignedIn>
                <Box alignSelf='flex-end'>
                    <UserButton />
                </Box>
            </SignedIn>
        </VStack>
    )
}
