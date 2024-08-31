import { VStack } from "@chakra-ui/react";
import Post from "~/components/ui/Post";

export default function Feed() {
    return (
        <VStack w='100%' h='100vh' color='gray.300' overflowY='auto' css={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
        }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </VStack>
    )
}
