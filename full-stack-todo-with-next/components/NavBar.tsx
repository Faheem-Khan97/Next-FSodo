import React from 'react'
import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import Link from 'next/link'

const NavBar:React.FC = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} px={"3.5"} py={"2"} >
        <Text fontSize={"24px"} color={"blue.500"} flexGrow={1} >
          SuperApp
        </Text>
        <HStack spacing={"20px"} >
          <MenuItem text='Blog' path='/blog' /> 
          <MenuItem text='Product' path='/product' /> 
          <MenuItem text='Pricing' path='/pricing' /> 


        </HStack>
        <Flex marginLeft={"30px"} >
          <Button colorScheme={"blue"} size={"sm"} >Login</Button>
        </Flex>
      </Flex>
    )
}

export default NavBar
