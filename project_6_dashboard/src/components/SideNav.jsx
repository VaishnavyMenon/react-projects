import {Stack, Icon, HStack, Text, Heading, Box, Link} from '@chakra-ui/react'
import {RxDashboard} from 'react-icons/rx'
import {GoArrowSwitch} from 'react-icons/go'
import {BiSupport} from 'react-icons/bi'

const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: GoArrowSwitch,
      text: "Transactions",
      link: "/transaction"
    }
  ]
  return (
    <Stack h="full" position="fixed" pt="54px" justify="space-between" fontWeight="bold" zIndex={1} bg="#ffffff" minW={{
      base:"full",
      lg: "256px"
    }}>
      <Box>
        <Heading as="h1" fontSize="24px" fontWeight="bold" color="#5F00D9" pb="24px" pl="28px">Dashboard.</Heading>
        {navLinks.map((el) => 
          <a href={el.link} key={el.text}>
          <HStack gap="3" py="14px" mx="12px" pl="4" color="black.25"  _hover={{
            bg: "black.5",
            color: "#171717",
            borderRadius: "10px",
            cursor: "pointer"
          }}>
            <Icon as={el.icon} fontSize="18px" color/>
            <Text fontSize="16px" >{el.text}</Text>
            </HStack>
            </a>
            )}
      </Box>
      <Box>
      <a href={`/support`}>
      <HStack gap="3" mb="20px" py="14px" mx="12px" pl="4" color="black.25" _hover={{
        bg: "black.5",
          color: "#171717",
          borderRadius: "10px",
          cursor: "pointer"
        }} _selected={{color:"red"}}>
        <Icon as={BiSupport} fontSize="18px" color/>
        <Text fontSize="16px" >Support</Text>
        </HStack>
        </a>
      </Box>
    </Stack>

    
  )
}

export default SideNav