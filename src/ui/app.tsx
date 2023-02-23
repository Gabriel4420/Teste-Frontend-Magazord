import { BrowserRouter } from 'react-router-dom'
import { MainProviders } from 'ui/providers'
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import 'ui/styles/global.module.css'
import Routes from 'main/routes'
import Header from './components/templates/Header'

const App = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <ChakraProvider>
      <MainProviders>
        <BrowserRouter>
          {isLargerThan800 && <Header />}
          <Routes />
        </BrowserRouter>
      </MainProviders>
    </ChakraProvider>
  )
}

export default App
