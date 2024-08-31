import { Text, VStack } from '@chakra-ui/react'
import { HeartCrack } from 'lucide-react'

export default function Trands() {
    return (
        <VStack
            w={72}
            minW={72}
            h='100vh'
            borderLeft='1px'
            borderColor='gray.600'
            color='gray.300'
            p={4}
            justifyContent={'space-between'}
        >
            <VStack align='flex-start' spacing={4}>
                <Text
                    as='b'
                    fontSize='lg'
                >
                    Tendências
                </Text>
                <VStack spacing={4} align='center' w='100%' border='1px' borderColor='gray.600' borderRadius='xl' p={4}>
                    <HeartCrack size={64} />
                    <Text textAlign='center'>
                        Não há tendências no momento.
                    </Text>
                </VStack>
            </VStack>
            <VStack spacing={1}>
                <Text>
                    © 2024 Xanditter
                </Text>
                <Text fontSize='sm' color='gray.500'>
                    Rede social fictícia feita por parodia.
                </Text>
            </VStack>
        </VStack>
    )
}
