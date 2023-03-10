/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode
} from '@chakra-ui/react'
import { FC } from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                <>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header
