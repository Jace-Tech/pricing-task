import { Box, Center, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { BG_LIGHT_BLUE, BLUE, OFF_BLUE } from '../../utils/colors'

interface StartupSectionProps {} 

const StartupSection:React.FC<StartupSectionProps> = () => {
  return (
   <Box bgColor={BG_LIGHT_BLUE} py={28}>
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
          Sendchamp for Startups
        </Text>

        <Text textAlign={"center"} fontSize={"1.1rem"}>
        Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding.
        </Text>
      </Stack>

      <Stack mt={10} direction="row" justifyContent={"center"}>
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
      </Stack>
    </Container>
   </Box>
  )
}

export default StartupSection