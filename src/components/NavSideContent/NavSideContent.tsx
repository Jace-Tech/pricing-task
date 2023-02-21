import { Stack, StackProps, Icon, Text, Link, TextProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface NavSideContentProps extends StackProps {
  icon?: ReactNode;
  title: ReactNode | any;
  noIcon?: boolean;
  isBelow?: boolean;
  link: string;
  text?: string;
}

const NavSideContent: React.FC<NavSideContentProps> = ({ icon, noIcon, link, isBelow, title, textStyle, text, ...rest }) => {
  if (noIcon) return (
    <Link
      href={link}
      textDecor={"none !important"}
      _hover={{
        opacity: .75
      }}
    >
      <Stack {...rest}>
        <Text letterSpacing={.5} fontSize={".85rem"} as={"h4"}>{title}</Text>
      </Stack>
    </Link>
  )

  if (isBelow) return (
    <Link
      href={link}
      textDecor={"none !important"}
      _hover={{
        opacity: .75
      }}
    >
      <Stack {...rest}>
        <Stack direction={"row"} flex={1} alignItems={"center"}>
          {icon}
          <Text fontSize={".85rem"} as={"h4"}>{title}</Text>
        </Stack>
        <Text fontSize={".75rem"} color={"gray.400"}>{text}</Text>
      </Stack>
    </Link>
  )

  return (
    <Link
      href={link}
      textDecor={"none !important"}
      _hover={{
        opacity: .75
      }}
    >
      <Stack {...rest} direction={"row"}>
        {icon}
        <Stack flex={1}>
          <Text fontSize={".85rem"} as={"h4"}>{title}</Text>
          <Text fontSize={".75rem"} color={"gray.400"}>{text}</Text>
        </Stack>
      </Stack>
    </Link>
  )
}

export default NavSideContent