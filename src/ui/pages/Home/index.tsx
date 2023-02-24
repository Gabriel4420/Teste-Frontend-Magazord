/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Container, Box } from '@chakra-ui/react'
import { PerfilArea, TabsRepositories } from 'ui/components'

const Home = () => {
  return (
    <Container maxW={{ base: 'xl', lg: '3xl' }}>
      <Box p="10" display="flex" justifyContent="center" alignItems="center">
        <PerfilArea />
      </Box>
      <Box p="10" display="flex" justifyContent="center" alignItems="center">
        <TabsRepositories />
      </Box>
    </Container>
  )
}

export default Home
