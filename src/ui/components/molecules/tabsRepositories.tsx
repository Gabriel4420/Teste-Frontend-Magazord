/* eslint-disable no-console */
import {
  Badge,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

export const TabsRepositories = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isClicked, setIsClicked] = useState(true)
  const [isClickedTab2, setIsClickedTab2] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    setIsClickedTab2(!isClickedTab2)
  }

  const handleDoubleClick = () => {
    setIsClicked(true)
    setIsClickedTab2(false)
  }

  return isLargerThan800 ? (
    <>
      <Heading>My future component</Heading>
    </>
  ) : (
    <>
      <Tabs isLazy w="full" mt="-12">
        <TabList>
          {isClickedTab2 ? (
            <Tab
              _selected={{ borderColor: 'orange' }}
              color="#989898"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              isSelected={isClicked}
              w="full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 2.01001H6C4.794 2.01001 3 2.80901 3 5.01001V19.01C3 21.211 4.794 22.01 6 22.01H21V20.01H6.012C5.55 19.998 5 19.815 5 19.01C5 18.909 5.009 18.819 5.024 18.737C5.136 18.162 5.607 18.02 6.011 18.01H20C20.018 18.01 20.031 18.001 20.049 18H21V4.01001C21 2.90701 20.103 2.01001 19 2.01001ZM19 16.01H5V5.01001C5 4.20401 5.55 4.02201 6 4.01001H13V11.01L15 10.01L17 11.01V4.01001H19V16.01Z"
                  fill="#989898"
                />
              </svg>
              <Text mx="0.625rem">Repositories</Text>
              <Badge
                border="1px solid #989898"
                color="#989898"
                p="5px"
                borderRadius="50px"
                ml="5px"
                w="25%"
              >
                81
              </Badge>
            </Tab>
          ) : (
            <Tab
              _selected={{ borderColor: 'orange' }}
              color="black"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              isSelected={isClicked}
              w="full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 2.01001H6C4.794 2.01001 3 2.80901 3 5.01001V19.01C3 21.211 4.794 22.01 6 22.01H21V20.01H6.012C5.55 19.998 5 19.815 5 19.01C5 18.909 5.009 18.819 5.024 18.737C5.136 18.162 5.607 18.02 6.011 18.01H20C20.018 18.01 20.031 18.001 20.049 18H21V4.01001C21 2.90701 20.103 2.01001 19 2.01001ZM19 16.01H5V5.01001C5 4.20401 5.55 4.02201 6 4.01001H13V11.01L15 10.01L17 11.01V4.01001H19V16.01Z"
                  fill="black"
                />
              </svg>
              <Text mx="0.625rem">Repositories</Text>
              <Badge
                border="1px solid #989898"
                color="#989898"
                p="5px"
                borderRadius="50px"
                ml="5px"
                w="25%"
              >
                81
              </Badge>
            </Tab>
          )}

          {isClicked ? (
            <Tab
              _selected={{ borderColor: 'orange' }}
              color="#989898"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              isSelected={isClickedTab2}
              w="full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0741 2.633C11.3941 1.789 12.6051 1.789 12.9261 2.633L14.9961 8.367C15.1411 8.747 15.5101 9 15.9221 9H21.0091C21.9491 9 22.3591 10.17 21.6201 10.743L18.0001 14C17.8379 14.1247 17.7194 14.2975 17.6616 14.4937C17.6037 14.6898 17.6095 14.8993 17.6781 15.092L19.0001 20.695C19.3221 21.595 18.2801 22.368 17.4921 21.814L12.5751 18.694C12.4067 18.5757 12.2059 18.5122 12.0001 18.5122C11.7943 18.5122 11.5935 18.5757 11.4251 18.694L6.50808 21.814C5.72108 22.368 4.67808 21.594 5.00008 20.695L6.32208 15.092C6.39066 14.8993 6.39643 14.6898 6.33859 14.4937C6.28074 14.2975 6.16223 14.1247 6.00008 14L2.38008 10.743C1.64008 10.17 2.05208 9 2.99008 9H8.07708C8.27737 9.00067 8.47314 8.9405 8.63849 8.82747C8.80385 8.71444 8.93098 8.55387 9.00308 8.367L11.0731 2.633H11.0741Z"
                  stroke="#989898"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text mx="0.625rem">Starred</Text>
              <Badge
                border="1px solid #989898"
                color="#989898"
                p="5px"
                borderRadius="50px"
                ml="5px"
                w="25%"
              >
                12
              </Badge>
            </Tab>
          ) : (
            <Tab
              _selected={{ borderColor: 'orange' }}
              color="black"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              isSelected={isClickedTab2}
              w="full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0741 2.633C11.3941 1.789 12.6051 1.789 12.9261 2.633L14.9961 8.367C15.1411 8.747 15.5101 9 15.9221 9H21.0091C21.9491 9 22.3591 10.17 21.6201 10.743L18.0001 14C17.8379 14.1247 17.7194 14.2975 17.6616 14.4937C17.6037 14.6898 17.6095 14.8993 17.6781 15.092L19.0001 20.695C19.3221 21.595 18.2801 22.368 17.4921 21.814L12.5751 18.694C12.4067 18.5757 12.2059 18.5122 12.0001 18.5122C11.7943 18.5122 11.5935 18.5757 11.4251 18.694L6.50808 21.814C5.72108 22.368 4.67808 21.594 5.00008 20.695L6.32208 15.092C6.39066 14.8993 6.39643 14.6898 6.33859 14.4937C6.28074 14.2975 6.16223 14.1247 6.00008 14L2.38008 10.743C1.64008 10.17 2.05208 9 2.99008 9H8.07708C8.27737 9.00067 8.47314 8.9405 8.63849 8.82747C8.80385 8.71444 8.93098 8.55387 9.00308 8.367L11.0731 2.633H11.0741Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text mx="0.625rem">Starred</Text>
              <Badge
                border="1px solid #989898"
                color="#989898"
                p="5px"
                borderRadius="50px"
                ml="5px"
                w="25%"
              >
                12
              </Badge>
            </Tab>
          )}
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
