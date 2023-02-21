import { Box, Container, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BG_LIGHT_BLUE } from '../../utils/colors'
import Select from 'react-select'
import { countriesData, countryFlags } from '../../utils/country'
import "./style.css"
import useServiceAtom from '../../atoms/useServiceAtom'
import useCountryFlag from '../../atoms/useCountryAtom'


type formattedDataType = {
  label: string;
  value: string;
  key: string | number;
}

const formattedData: formattedDataType[] = countriesData.map(country => ({ 
  label: `${country.name} - ${country.currency}`,
  value: country.currency,
  key: country.id
}))

const options: OptionTypes[] = Object.keys(countryFlags).map(key => ({ label: key, value: key, key: key }))

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  const { chosenCountry, setChosenCountry } = useServiceAtom()
  const { countryFlag } = useCountryFlag()
  const [selectedCountry, setSelectedCountry] = useState<any>(() => options?.find(option => option.value == countryFlag?.name))
  const [selectedCurrency, setSelectedCurrency] = useState<any>(() => formattedData?.find(data => data.key == chosenCountry?.id))

  const handleSetAtomValue = () => {
    setChosenCountry(countriesData.find(data => data.id === selectedCurrency?.key) as CountryDataType)
  }

  useEffect(() => {
    handleSetAtomValue()
  }, [selectedCurrency])

  return (
    <Box py={16} bgColor={BG_LIGHT_BLUE}>
      <Container maxW={"container.sm"}>
        <Stack gap={6} mx={"auto"} w={["100%", "100%", "85%"]}>
          <Text
            as={"h2"}
            fontSize={"5xl"}
            fontFamily={"heading"}
            fontWeight={600}
            textAlign={"center"}
            lineHeight={1.2}
          >
            Pricing for every  business in Andorra
          </Text>

          <Text as={"p"} fontSize={"1.1rem"} textAlign={"center"}>
            No hidden fees or charges - simple & flexible pricing that fits with your business at any stage.
          </Text>
        </Stack>

        <Stack direction={["column", "column", "row", "row"]} gap={3} my={14} justifyContent={"center"}>
          <Select
            value={selectedCountry}
            onChange={(e: any) => setSelectedCountry(e)}
            options={options as any}
            classNamePrefix={"service_select"}
          />

          <Select 
            value={selectedCurrency}
            onChange={(e: any) => setSelectedCurrency(e)}  
            options={formattedData as any}
            classNamePrefix={"service_select"}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero