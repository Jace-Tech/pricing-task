import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { items } from '../../contents/cards'

interface ServiceProps {
  
} 

const Service:React.FC<ServiceProps> = () => {
  return (
   <Box bgColor={"#fff"} py={20}>
    <Container maxW={"container.lg"} mt={-36}>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={8}>
        {items.map(card => (
          <ServiceCard  
            key={card.title} 
            {...card} 
          />
        ))}
      </SimpleGrid>
    </Container>
   </Box>
  )
}

export default Service