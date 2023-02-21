import { Popover, PopoverBody, PopoverContent, PopoverContentProps, PopoverTrigger, Portal } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface HeaderLinkProps extends PopoverContentProps { 
  label: ReactNode;
  children?: ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ label, children, ...rest }) => {
  return (
    <Popover
      trigger='hover'
      placement='bottom-start'
      strategy='absolute'
    >
      <PopoverTrigger>
        { label }
      </PopoverTrigger>
      <Portal>
        <PopoverContent 
          shadow={"lg"}
          rounded={"xl"} 
          zIndex={1000}
          overflow={"hidden"}
          {...rest}
        >
          <PopoverBody p={0}>
            { children }
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default HeaderLink