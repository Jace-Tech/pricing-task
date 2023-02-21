import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, AccordionPanelProps, Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import Logo from "../../assets/logo.svg"
import { companyContents, developerContents, productContents, useContents } from '../../contents/header';
import { BG_LIGHT_BLUE, BLUE, OFF_BLUE } from '../../utils/colors';
import CustomButton from '../CustomButton/CustomButton';
import NavSideContent from '../NavSideContent/NavSideContent';
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={6}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <Image
              src={Logo}
              minW={150}
            />
          </Link>

          <IconButton
            aria-label='close'
            onClick={onClose}
            variant={"ghost"}
          >
            <IoCloseOutline fontSize={"2rem"} />
          </IconButton>
        </DrawerHeader>

        <DrawerBody p={0}>
          <Accordion allowMultiple>
            <NavMenuItem title={"Products"}>
              <Flex direction={"column"}>
                <SimpleGrid columns={[1, 2, 2]} p={6} bgColor={BG_LIGHT_BLUE}>
                  { productContents.Channels.map(({ Icon, title, link }) => (
                    <NavSideContent
                      py={3}
                      icon={<Icon fontSize={"1.5rem"} color={OFF_BLUE} />}
                      title={title}
                      key={title}
                      link={link}
                    />
                  )) }
                </SimpleGrid>

                <SimpleGrid columns={[1, 2, 2]} p={6}>
                  { productContents.Services.map(({ Icon, title, link }) => (
                    <NavSideContent
                      py={3}
                      icon={<Icon fontSize={"1.5rem"} color={OFF_BLUE} />}
                      title={title}
                      key={title}
                      link={link}
                    />
                  )) }
                  <NavSideContent noIcon py={3} link={"/"} title={'VERIFICATION POP-UP'} />
                  <NavSideContent noIcon py={3} link={"/"} title={'SIMULATORS'} />
                  <NavSideContent noIcon py={3} link={"/"} title={
                    <Stack direction={"row"} alignItems={"center"}>
                      <Text>FORMS</Text>
                      <Badge colorScheme={"blue"} fontSize={".7rem"} rounded={"xl"}>Coming Soon</Badge>
                    </Stack>
                  } />
                </SimpleGrid>
              </Flex>
            </NavMenuItem>

            <NavMenuItem title={"Developers"} p={6} bgColor={BG_LIGHT_BLUE}>
              <SimpleGrid columns={[1, 2, 2]}>
                {developerContents.map(({ link, Icon, title }) => (
                  <NavSideContent
                    p={3}
                    key={title}
                    icon={<Icon fontSize={"1.5rem"} color={OFF_BLUE} />}
                    title={title}
                    link={link}
                  />
                ))}
              </SimpleGrid>
            </NavMenuItem>

            <NavMenuItem title={"Company"} p={6} bgColor={BG_LIGHT_BLUE}>
              <SimpleGrid columns={[1, 2, 2]}>
                {companyContents.map(({ link, title }) => (
                  <NavSideContent
                    p={3}
                    noIcon
                    key={title}
                    title={title}
                    link={link}
                  />
                ))}
              </SimpleGrid>
            </NavMenuItem>

            <NavMenuItem title={"Use Cases"} p={6} bgColor={BG_LIGHT_BLUE}>
              <SimpleGrid columns={[1, 2, 2]}>
                {useContents.map(({ link, title }) => (
                  <NavSideContent
                    p={3}
                    noIcon
                    key={title}
                    title={title}
                    link={link}
                  />
                ))}
              </SimpleGrid>
            </NavMenuItem>

            <NavMenuItem 
              title={"Pricing"} 
              isButton 
              onClick={() => {}} // For navigation
            />
          </Accordion>
        </DrawerBody>
        <DrawerFooter>
          <Stack w={"100%"} gap={2}>
            <CustomButton 
              minW={"auto"}
              color={"gray.600"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "transparent",
                opacity: .8
              }}
              borderWidth={1.5}
              borderColor={"gray.500"}
            >
              Login
            </CustomButton>

            <CustomButton
              fontWeight={500}
              bgColor={BLUE}
              _hover={{
                bgColor: OFF_BLUE
              }}
            >
              Get Started
            </CustomButton>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface NavMenuItemProps extends AccordionPanelProps {
  children?: ReactNode;
  isButton?: boolean;
  handleClick?: () => void;
  title: string;
}
const NavMenuItem: React.FC<NavMenuItemProps> = ({ title, children, handleClick, isButton, ...rest }) => {
  return (
    <AccordionItem>
      <AccordionButton 
        onClick={() => isButton ? handleClick?.() : null } 
        p={6} 
        textTransform={"uppercase"} 
        color={"gray.600"} 
        fontSize={".75rem"} 
        fontWeight={"medium"}
        letterSpacing={"wider"}
      >
        <Box as="span" flex='1' textAlign='left'>
          {title}
        </Box>
        {!isButton && <AccordionIcon fontSize={"2rem"} />}
      </AccordionButton>
      {!isButton && (
        <AccordionPanel p={0} {...rest}>
          {children}
        </AccordionPanel>
      )}
    </AccordionItem>
  )
}

export default MobileNav