import { Box, Container } from "@chakra-ui/react"
import Footer from "./partials/Footer/Footer"
import Header from "./partials/Header/Header"

import Hero from "./partials/Hero/Hero"
import StartupSection from "./partials/StartupSection/StartupSection"
import Service from "./partials/Service/Service"
import Experience from "./partials/Experience/Experience"

const App = () => {
  return (
    <Box minH={"100vh"} position={"relative"}>
      <Header />
      <Hero />
      <Service />
      <StartupSection />
      <Experience />
      <Footer />
    </Box>
  )
}

export default App
