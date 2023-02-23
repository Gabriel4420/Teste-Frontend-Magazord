import { Heading, useMediaQuery } from '@chakra-ui/react'

export const TabsRepositories = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return isLargerThan800 ? (
    <>
      <Heading>My future component</Heading>
    </>
  ) : (
    <>
      <Heading>My future component</Heading>
    </>
  )
}
