import { Container, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const LandingFooter:React.FC = () => {
    return (
        <Flex as="footer" justifyContent = "center" py = "6" backgroundColor={"#11244f"} color={"teal"} >
            <SimpleGrid columns={2} spacing={"4"} >
                <Text colorScheme={"teal"} >
                    SuperApp 2021
                  <br/>  All rights reserved
                </Text>
                <Flex direction={"column"} justifyContent={"center"} >
                    <Text>Follow us on</Text>
                    <HStack>
                        <Text >Twitter</Text>
                        <Text>LinkedIn</Text>
                        <Text>Instagram</Text>

                    </HStack>
                </Flex>

            </SimpleGrid>
        </Flex>
            
      
    )
}

export default LandingFooter
