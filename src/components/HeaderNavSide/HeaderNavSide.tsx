import { Stack, StackProps, Text } from '@chakra-ui/react'
import React from 'react'

interface HeaderNavSideProps extends StackProps {
  title: string;
} 

const HeaderNavSide:React.FC<HeaderNavSideProps> = ({ title, children, ...rest }) => {
  return (
   <Stack gap={3} padding={5} pb={12} flex={1} {...rest}>
      <Text 
        textTransform={"uppercase"}
        color={"gray.400"}
        letterSpacing={"wide"}
        fontSize={".8rem"}
        fontWeight={"thin"}
      >
        {title}
      </Text>
      { children }
   </Stack>
  )
}

export default HeaderNavSide