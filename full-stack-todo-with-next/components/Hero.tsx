import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Hero:React.FC = () => {
    return (
        <Flex py={"30px"} background={"linear-gradient(94deg, #11244f, #8913b0 )"} w="100%" >
            <Container>

                <Heading color={"whiteAlpha.800"}>
                   Increase Your Productivity 
                   <br/>
                   Build App in Minutes 
                </Heading>

                <Text fontSize={"20px"} color={"gray.500"} lineHeight={"40px"} >
                    Your FullStack React App
                </Text>

            </Container>

        </Flex>
    )
}

export default Hero
