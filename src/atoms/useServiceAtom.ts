import { useEffect } from 'react';
import { atom, useRecoilState } from "recoil"
import { countriesData } from '../utils/country';
import useCountryFlag from './useCountryAtom';


const ServiceAtom = atom<CountryDataType>({
  key: "serviceAtomState",
  default: {
    id: 172,
    name: "Nigeria",
    currency: "NGN",
    phone: 234,
    capital: "Abuja",
    code: "NG",
    code3: "NGA",
  },
})

const useServiceAtom = () => {
  const [chosenCountry, setChosenCountry] = useRecoilState<CountryDataType>(ServiceAtom)
  const { countryFlag } = useCountryFlag()

  useEffect(() => {
    if(!countryFlag.name) return
    setChosenCountry(countriesData.find(data => data.name == countryFlag.name)!)
  }, [countryFlag])

  return { chosenCountry, setChosenCountry }
}


export default useServiceAtom