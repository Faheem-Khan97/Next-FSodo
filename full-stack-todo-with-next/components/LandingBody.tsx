import { Box, Container, Flex, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const LandingBody:React.FC = () : JSX.Element => {
    return (
        <Container my={"10"} >
            <SimpleGrid columns={2} spacing={10} p="24px" > 
                <Box backgroundColor={"gray.300"}  h={"180px"} borderRadius={"16px"} >

                </Box>

                <Flex justifyContent={"center"} direction={"column"} pl={"20px"} >
                    <Text color = "blue.800" >Including the Latest Technologies</Text>
                    <UnorderedList>
                        <ListItem>Next.JS</ListItem>
                        <ListItem>PostGres</ListItem>
                        <ListItem>Prisma</ListItem>
                        <ListItem>NextAuth</ListItem>
                        
                    </UnorderedList>
                </Flex>

            </SimpleGrid>
        </Container>
    )
}

export default LandingBody
