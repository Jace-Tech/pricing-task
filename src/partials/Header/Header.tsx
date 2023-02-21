import { Badge, Box, Container, Flex, IconButton, Image, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.svg"
import useCountryFlag from '../../atoms/useCountryAtom'
import { companyContents, developerContents, productContents, useContents } from '../../contents/header'
import { BG_LIGHT_BLUE, BLUE, OFF_BLUE } from '../../utils/colors'
import CustomButton from '../../components/CustomButton/CustomButton'
import HeaderLink from '../../components/HeaderLink/HeaderLink'
import HeaderNavSide from '../../components/HeaderNavSide/HeaderNavSide'
import NavSideContent from '../../components/NavSideContent/NavSideContent'
import { CountryFlagBtn, HeaderLinkStyles } from "./style"
import CountryModal from '../../components/CountryModal/CountryModal'
import { HiBars2 } from "react-icons/hi2"
import MobileNav from '../../components/MobileNav/MobileNav'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const { countryFlag } = useCountryFlag()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isOpen: isNavOpen, onClose: onNavClose, onOpen: onNavOpen } = useDisclosure()

  return (
    <>
      <Box
        as={"header"}
        py={[6, 6, 3]}
        overflow={"hidden"}
        bgColor={BG_LIGHT_BLUE}
        pos={"sticky"}
        top={0}
        left={0}
        zIndex={100}
      >
        <Container maxW={"container.lg"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} overflowX={"auto"}>
              <Link href='/' as={Flex} alignItems={"center"}>
                <Image src={Logo} minW={150} />
              </Link>

              <Stack
                flex={1}
                overflowX={"auto"}
                scrollMargin={"14"}
                scrollBehavior={"smooth"}
                className="scroll-bar"
                ml={16}
                h={16}
                direction={"row"}
                gap={6}
                alignItems={"center"}
                display={["none", "none", "flex"]}>

                {/* Products */}
                <HeaderLink
                  maxW={500}
                  w={"auto"}
                  label={<Link href='/' {...HeaderLinkStyles}> Products</Link>}
                >
                  <Flex w={"100%"}>
                    <HeaderNavSide title={"channels"}>
                      {productContents.Channels.map(({ link, Icon, title, text }) => (
                        <NavSideContent
                          icon={<Icon fontSize={"1.5rem"} color={OFF_BLUE} />}
                          title={title}
                          key={title}
                          link={link}
                          text={text}
                        />
                      ))}
                    </HeaderNavSide>

                    <HeaderNavSide title={"Services"} bgColor={BG_LIGHT_BLUE}>
                      {productContents.Services.map(({ link, Icon, title, text }) => (
                        <NavSideContent
                          key={title}
                          isBelow
                          icon={<Icon fontSize={"1.2rem"} color={OFF_BLUE} />}
                          title={title}
                          link={link}
                          text={text}
                        />
                      ))}

                      <Text
                        textTransform={"uppercase"}
                        color={"gray.400"}
                        letterSpacing={"wide"}
                        fontSize={".8rem"}
                        fontWeight={"thin"}
                      >
                        No-code tools
                      </Text>

                      <NavSideContent noIcon link={"/"} title={'VERIFICATION POP-UP'} />
                      <NavSideContent noIcon link={"/"} title={'SIMULATORS'} />
                      <NavSideContent noIcon link={"/"} title={
                        <Stack direction={"row"} alignItems={"center"}>
                          <Text>FORMS</Text>
                          <Badge colorScheme={"blue"} fontSize={".7rem"} rounded={"xl"}>Coming Soon</Badge>
                        </Stack>
                      } />
                    </HeaderNavSide>
                  </Flex>
                </HeaderLink>

                {/* Developers */}
                <HeaderLink
                  maxW={264}
                  label={<Link href='/' {...HeaderLinkStyles}> Developers</Link>}
                >
                  <HeaderNavSide title={"DEVELOPERS"}>
                    {developerContents.map(({ link, Icon, title, text }) => (
                      <NavSideContent
                        key={title}
                        icon={<Icon fontSize={"1.5rem"} color={OFF_BLUE} />}
                        title={title}
                        link={link}
                      />
                    ))}
                  </HeaderNavSide>
                </HeaderLink>

                {/* Company */}
                <HeaderLink
                  maxW={264}
                  label={<Link href='/' {...HeaderLinkStyles}> Company</Link>}
                >
                  <HeaderNavSide gap={2} title={"COMPANY"}>
                    {companyContents.map(({ link, title }) => (
                      <NavSideContent
                        key={title}
                        title={title}
                        link={link}
                        noIcon
                      />
                    ))}
                  </HeaderNavSide>
                </HeaderLink>

                {/* Use Cases */}
                <HeaderLink
                  maxW={264}
                  label={<Link href='/' {...HeaderLinkStyles}> Use cases</Link>}
                >
                  <HeaderNavSide gap={2} title={"USE CASES"}>
                    {useContents.map(({ link, title }) => (
                      <NavSideContent
                        title={title}
                        key={title}
                        link={link}
                        noIcon
                      />
                    ))}
                  </HeaderNavSide>
                </HeaderLink>

                {/* Pricing */}
                <Link href='/' {...HeaderLinkStyles}> Pricing</Link>
              </Stack>
            </Flex>

            <Flex alignItems={"center"}>
              <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                ml={10}
                display={["none", "none", "flex"]}
              >
                <Link href='/' {...HeaderLinkStyles}>Login</Link>

                <CustomButton
                  fontSize={".9rem"}
                  fontWeight={500}
                  bgColor={BLUE}
                  _hover={{
                    bgColor: OFF_BLUE
                  }}
                >
                  Get Started
                </CustomButton>

                <button onClick={onOpen} style={CountryFlagBtn}>
                  {countryFlag?.flag}
                </button>
              </Stack>

              <IconButton
                onClick={onNavOpen}
                display={["flex", "flex", "none"]}
                aria-label="menu"
              >
                <HiBars2 fontSize={"2rem"} />
              </IconButton>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* COUNTRY SELECT MODAL */}
      <CountryModal
        isOpen={isOpen}
        handleClose={onClose}
      />

      {/* MOBILE NAV DRAWER */}
      <MobileNav
        isOpen={isNavOpen}
        onClose={onNavClose}
      />
    </>
  )
}

export default Header