import { countryFlags } from './../utils/country';
import { getCountry } from './../apis/country';
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil"


const loadDefaultCountry = (): CountryFlagProps => {
  const data = localStorage.getItem("user_country")
  if(!data) return {
    name: "Nigeria",
    flag: "🇳🇬"
  }

  return JSON.parse(data)
}

const countryFlagState = atom<CountryFlagProps>({
  key: "countryFlag",
  default: loadDefaultCountry()
})

const useCountryFlag = () => {
  const [countryFlag, setCountryFlag] = useRecoilState(countryFlagState)

  const handleSetCountryFlag = (data: CountryFlagProps) => {
    localStorage.setItem("user_country", JSON.stringify(data))
    setCountryFlag(data)
  }

  const handleGetUserLocation = async () => {
    const countryName = await getCountry()
    if(!countryName) return

    const data: CountryFlagProps = {
      name: countryName,
      flag: countryFlags[countryName]
    }
    localStorage.setItem("user_country", JSON.stringify(data))
    setCountryFlag(data)
  }

  useEffect(() => {
    if(localStorage.getItem("user_country")) return
    handleGetUserLocation()
  }, [])
  return { countryFlag, handleSetCountryFlag }
}


export default useCountryFlag