'use client'
import { Link } from '@chakra-ui/next-js'
import { HStack } from '@chakra-ui/react'

type Props = {
    icon: React.ReactNode
    href: string
    children: React.ReactNode
}

export default function MenuLink({ icon, children, href }: Props) {
    return (
        <Link
            href={href}
            display='flex'
            p={2}
            borderRadius='xl'
            w='100%'
            h={12}
            _hover={{ bg: 'gray.700' }}
        >
            <HStack spacing={4}>
                {icon}
                <p>
                    {children}
                </p>
            </HStack>
        </Link>
    )
}
