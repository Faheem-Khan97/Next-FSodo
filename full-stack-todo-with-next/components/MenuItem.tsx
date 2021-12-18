import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps{
    text:string,
    path:string
}

const MenuItem:React.FC<MenuItemProps> = ({text, path}) : JSX.Element => {
    return (
        <Text color={"teal"} fontSize={'14px'} >
            <Link href={path} >
              <a>{text}</a>
            </Link>
        </Text>

    )
}

export default MenuItem
