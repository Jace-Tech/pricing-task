export const getCountry = async () => {
  try {
    const req = await fetch("https://ipapi.co/8.8.8.8/json")
    const res = await req.json()
    if(!res.country_name) return
    return res.country_name
  }
  catch(err) {
    console.log(err)
    return false
  }
}