import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { BLUE } from '../../utils/colors'

interface CustomButtonProps extends ButtonProps { } 

const CustomButton:React.FC<CustomButtonProps> = ({ children, disabled, ...rest }) => {
  return (
    <Button 
      variant={"solid"}
      flex={1}
      color={"#fff"}
      opacity={disabled ? 0.5 : 1}
      cursor={disabled ? "default" : "pointer"}
      p={"20px 24px"}
      {...rest}>
      {children}
    </Button>
  )
}

export default CustomButton