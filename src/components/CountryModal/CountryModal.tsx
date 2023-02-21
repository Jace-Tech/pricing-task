import { Button, Circle, Flex, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Select from 'react-select'
import useCountryFlag from '../../atoms/useCountryAtom';
import { BLUE, OFF_BLUE } from '../../utils/colors';
import { countryFlags } from '../../utils/country';
import CustomButton from '../CustomButton/CustomButton';
import {styles} from './styles';

const options: OptionTypes[] = Object.keys(countryFlags).map(key => ({ label: key, value: key, key: key }))

interface CountryModalProps { 
  handleClose: () => void;
  isOpen: boolean;
}

const CountryModal: React.FC<CountryModalProps> = ({ handleClose, isOpen }) => {
  const [country, setCountry] = useState<OptionTypes | null>(null)
  const { handleSetCountryFlag } = useCountryFlag()

  const handleSelectFlag = () => {
    const data: CountryFlagProps = {
      name: country?.label!,
      flag: countryFlags[country?.value!]
    }
    handleSetCountryFlag(data)
    handleClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay bgColor={"rgb(190, 227, 248, .2)"} />
      <ModalContent px={5}>
        <ModalHeader display={"flex"} pt={10} justifyContent={"flex-end"}>
          <Button variant={"link"} colorScheme={"blue"} fontWeight={300} fontSize={".8rem"} textDecor={"underline"}>Cancel</Button>
        </ModalHeader>
        <ModalBody display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Circle mb={5}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="#197EEF" fillOpacity="0.04"></circle><path d="M62.58 59.52L61.14 58.08C61.88 56.96 62.32 55.6 62.32 54.16C62.32 50.2 59.12 47 55.16 47C51.2 47 48 50.2 48 54.16C48 58.12 51.2 61.32 55.16 61.32C56.62 61.32 57.96 60.88 59.08 60.14L60.52 61.58C60.8 61.86 61.18 62 61.54 62C61.92 62 62.28 61.86 62.56 61.58C63.14 61 63.14 60.08 62.58 59.52Z" fill="#197EEF"></path><path opacity="0.4" d="M23.06 47.2598C23.06 47.3198 23.02 47.3998 23.02 47.4598C24.86 51.1398 27.86 54.1597 31.54 55.9797C31.6 55.9797 31.68 55.9398 31.74 55.9398C31.06 53.6198 30.54 51.2397 30.16 48.8597C27.76 48.4597 25.38 47.9398 23.06 47.2598Z" fill="#197EEF"></path><path opacity="0.4" d="M57.1402 30.8599C55.2602 26.9199 52.0802 23.7399 48.1602 21.8799C48.8802 24.2599 49.4802 26.6999 49.8802 29.1399C52.3202 29.5399 54.7602 30.1199 57.1402 30.8599Z" fill="#197EEF"></path><path opacity="0.4" d="M22.8599 30.86C25.2599 30.14 27.6999 29.5401 30.1399 29.1401C30.5399 26.7601 31.0399 24.4001 31.7199 22.0801C31.6599 22.0801 31.5799 22.04 31.5199 22.04C27.7599 23.9 24.6999 27.04 22.8599 30.86Z" fill="#197EEF"></path><path opacity="0.4" d="M46.6399 28.7205C46.1599 26.1205 45.5599 23.5205 44.6999 21.0005C44.6599 20.8605 44.6599 20.7405 44.6399 20.5805C43.1599 20.2205 41.5999 19.9805 39.9999 19.9805C38.3799 19.9805 36.8399 20.2005 35.3399 20.5805C35.3199 20.7205 35.3399 20.8405 35.2999 21.0005C34.4599 23.5205 33.8399 26.1205 33.3599 28.7205C37.7799 28.2405 42.2199 28.2405 46.6399 28.7205Z" fill="#197EEF"></path><path opacity="0.4" d="M29.72 32.3604C27.1 32.8404 24.52 33.4404 22 34.3004C21.86 34.3404 21.74 34.3404 21.58 34.3604C21.22 35.8404 20.98 37.4004 20.98 39.0004C20.98 40.6204 21.2 42.1603 21.58 43.6603C21.72 43.6803 21.84 43.6604 22 43.7004C24.52 44.5404 27.1 45.1604 29.72 45.6404C29.24 41.2204 29.24 36.7804 29.72 32.3604Z" fill="#197EEF"></path><path opacity="0.4" d="M58.3997 34.3604C58.2597 34.3604 58.1398 34.3404 57.9798 34.3004C55.4598 33.4604 52.8598 32.8404 50.2598 32.3604C50.7598 36.7804 50.7598 41.2204 50.2598 45.6204C52.8598 45.1404 55.4598 44.5404 57.9798 43.6804C58.1198 43.6404 58.2397 43.6604 58.3997 43.6404C58.7597 42.1404 58.9998 40.6003 58.9998 38.9803C58.9998 37.4003 58.7797 35.8604 58.3997 34.3604Z" fill="#197EEF"></path><path opacity="0.4" d="M33.3599 49.2803C33.8399 51.9003 34.4399 54.4802 35.2999 57.0002C35.3399 57.1402 35.3199 57.2602 35.3399 57.4202C36.8399 57.7802 38.3799 58.0203 39.9999 58.0203C41.5999 58.0203 43.1599 57.8002 44.6399 57.4202C44.6599 57.2802 44.6599 57.1602 44.6999 57.0002C45.5399 54.4802 46.1599 51.9003 46.6399 49.2803C44.4399 49.5203 42.2199 49.7003 39.9999 49.7003C37.7799 49.6803 35.5599 49.5203 33.3599 49.2803Z" fill="#197EEF"></path><path opacity="0.4" d="M32.9002 31.9002C32.3002 36.6202 32.3002 41.3802 32.9002 46.1202C37.6202 46.7202 42.3802 46.7202 47.1202 46.1202C47.7202 41.4002 47.7202 36.6402 47.1202 31.9002C42.3802 31.3002 37.6202 31.3002 32.9002 31.9002Z" fill="#197EEF"></path></svg>
          </Circle>

          <Stack>
            <Text as={"h2"} textAlign={"center"}  fontSize={"1.2rem"}>Country Preference</Text>
            <Text color={"gray.500"} textAlign={"center"} fontSize={".95rem"}>Kindly choose your preferred country from the options below</Text>
          </Stack>

          <FormControl mt={6}>
            <FormLabel fontSize={".8rem"} color={"gray.500"} fontWeight={400} textTransform={"uppercase"}>country</FormLabel>
            <Select 
              value={country}
              onChange={(e) => setCountry(e)}
              options={options} 
              styles={styles as any}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter mb={10} mt={6}>
          <CustomButton 
            onClick={handleSelectFlag}
            disabled={!Boolean(country)}
            bgColor={BLUE}
            h={12}
            fontWeight={600}

            fontSize={".9rem"}
            w={"100%"}
            _hover={{
              bgColor: OFF_BLUE
            }}
          >
            Update preference
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CountryModal