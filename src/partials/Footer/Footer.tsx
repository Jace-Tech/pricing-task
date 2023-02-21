import { Avatar, Box, Container, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { footerAddresses, footerCopyright, footerMenus } from '../../contents/footer';
import { DARK_BLUE } from '../../utils/colors';
import FooterLogo from "../../assets/white-logo.svg"

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      as={"footer"}
      pt={14}
      bgColor={DARK_BLUE}
    >
      <Container maxW={"container.lg"}>

        {/* MENU */}
        <SimpleGrid columns={[2, 3, 4, 6]} spacingY={10} py={10}>
          {footerMenus.map(menu => (
            <FooterItem
              key={menu.title}
              mentItems={menu.menuItems}
              menuTitle={menu.title}
            />
          ))}
        </SimpleGrid>

        {/* ADDRESS */}
        <Box
          as={"section"}
          py={14}
          borderBottomWidth={1}
          borderTopWidth={1}
          borderColor={"gray.600"}
        >
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            alignItems={"center"}
          >
            <Link href="/">
              <Image src={FooterLogo} maxW={200} />
            </Link>

            {footerAddresses.map(item => (
              <Stack direction={"row"} gap={2} key={item.text.slice(0, 10)}>
                <Avatar w={10} h={10} src={item.image} display={["none", "flex", "flex"]} />
                <Text color={"gray.100"}>{item.text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>

        {/* COPYRIGHT */}
        <Text as={"p"} textAlign={"center"} py={6} color={"gray.400"}>{footerCopyright}</Text>
      </Container>
    </Box>
  )
}


interface FooterItemProps {
  menuTitle: string;
  mentItems: MenuType[];
}
const FooterItem: React.FC<FooterItemProps> = ({ menuTitle, mentItems }) => {
  return (
    <Box>
      <Text color={"gray.400"} fontWeight={400} mb={4} as={"h3"}>{menuTitle}</Text>
      <Stack gap={1}>
        {mentItems.map((item) => (
          <Link
            key={item.name}
            color={"white"}
            fontSize={".9rem"}
            opacity={.85}
            _hover={{
              opacity: 1,
            }}
            textTransform={"capitalize"}
            href={item.link}
            target="_blank"
            textOverflow={"ellipsis"}
          >
            {item.name}
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

export default Footer