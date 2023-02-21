import { Box, Center, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { BG_LIGHT_BLUE, BLUE, OFF_BLUE } from '../../utils/colors'
interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <Box py={28}>
      <Container maxW={"container.sm"}>
        <Stack gap={6}>
          <Text
            as={"h2"}
            fontWeight={"semibold"}
            fontSize={"2rem"}
            textAlign={"center"}
            fontFamily={"heading"}
            letterSpacing={1}
          >
           Start building better communication experience with Sendchamp
          </Text>

          <Text textAlign={"center"} fontSize={"1.1rem"}>
          Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family.
          </Text>
        </Stack>

        <Stack gap={2} mt={10} direction="row" justifyContent={"center"}>
          <CustomButton
            maxW={"fit-content"}
            py={6}
            fontSize={".9rem"}
            bgColor={BLUE}
            _hover={{
              bgColor: OFF_BLUE
            }}
          >
            Apply Now
          </CustomButton>

          <CustomButton
            maxW={"fit-content"}
            py={6}
            fontSize={".9rem"}
            bgColor={"transparent"}
            borderWidth={1}
            borderColor={"gray.600"}
            color={"gray.600"}
            opacity={.75}
            _hover={{
              bgColor: "transparent",
              opacity: 1
            }}
          >
            Talk To Sales
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Experience