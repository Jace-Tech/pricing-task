import { Badge, Box, Card, Center, Fade, Link, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BG_LIGHT_BLUE, BLUE } from '../../utils/colors'
import { TbMessage2 } from "react-icons/tb";
import useServiceAtom from '../../atoms/useServiceAtom';
import { IconType } from 'react-icons';


interface ServiceCardProps {
  title: string;
  hasLink?: boolean;
  Icon: IconType;
  data: { name: string, value: string }[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ hasLink, title, Icon, data }) => {
  const { chosenCountry } = useServiceAtom()
  return (
      <Fade in={true}>
        <Card
          overflow={"hidden"}
          borderWidth={1}
          borderColor={BLUE}
          rounded={"xl"}
          h={"100%"}
          maxH={370}
          display={"flex"}
          flexDirection={"column"}

        >
          <Stack p={8} gap={4} flex={1}>
            <Center bgColor={BLUE} h={16} w={16} rounded={"xl"}>
              <Icon
                color={"#fff"}
                fontSize={"2rem"}
              />
            </Center>

            <Text
              fontWeight={"600"}
              fontSize={"1.2rem"}
              textTransform={"uppercase"}
            >
              {title}
            </Text>

            <Stack direction={"row"} gap={4}>
              {data.map((item, index) => (
                <>
                  {item.value == "coming soon" ? (
                    <Stack>
                      <Text fontSize={".9rem"}>{item.name}</Text>
                      <Badge
                        variant={"solid"}
                        fontSize={".7rem"}
                        textTransform={"capitalize"}
                        fontWeight={300}
                        w={"fit-content"}
                        rounded={"xl"}
                        color={BLUE}
                        bgColor={BG_LIGHT_BLUE} // TODO: Change color
                        padding={".2rem .4rem"}
                      >
                        {item.value}
                      </Badge>
                    </Stack>
                  ) : (
                    <Stack>
                      <Text fontSize={".9rem"}>{item.name}</Text>
                      <Text fontSize={".9rem"} fontWeight={500}>
                        <Text fontWeight={600} as={"span"}>{chosenCountry?.currency}</Text> {item.value}
                      </Text>
                    </Stack>
                  )}

                  { !index &&  <Spacer /> }
                </>
              ))}
            </Stack>
          </Stack>
          {hasLink && (
            <Link
              _hover={{
                bgColor: BG_LIGHT_BLUE
              }}
              textDecor={"underline"}
              borderTopWidth={1}
              borderColor={BLUE}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={6}
              color={BLUE}
              // textAlign={"center"}
            >
              More details
            </Link>
          )}
        </Card>
      </Fade>
  )
}

export default ServiceCard