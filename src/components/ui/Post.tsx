import { Avatar, VStack, HStack, Text } from '@chakra-ui/react'

export default function Post() {
    return (
        <VStack
            w='100%'
            color='gray.300'
            px={6}
            py={2}
            borderBottom='1px'
            borderColor='gray.600'
        >
            <HStack align='flex-start'>
                <Avatar size='md' mt={1} />
                <VStack spacing={0} align='flex-start'>
                    <Text
                        as='b'
                    >
                        Alexandre
                    </Text>
                    <Text
                        fontSize='sm'
                        color='gray.500'
                    >
                        @Alexandre
                    </Text>
                    <Text mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nullam nec nisi nec urna consectetur tincidunt. Nulla facilisi. Nullam nec nisi nec urna consectetur tincidunt. Nulla facilisi.
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    )
}
