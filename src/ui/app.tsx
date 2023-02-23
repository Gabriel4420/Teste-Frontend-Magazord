import { BrowserRouter } from 'react-router-dom'
import { MainProviders } from 'ui/providers'
import { ChakraProvider } from '@chakra-ui/react'
import 'ui/styles/global.module.css'
import Routes from 'main/routes'

const App = () => (
  <ChakraProvider>
    <MainProviders>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MainProviders>
  </ChakraProvider>
)

export default App
