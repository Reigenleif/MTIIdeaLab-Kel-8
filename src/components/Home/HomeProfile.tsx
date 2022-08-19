import { Box, Flex, Text } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { useLoginState } from "../../util/login";
import AuthContext from "../../util/context/authContext";
import { getFoodById } from "../../storage/foods";

export default function HomeProfile() {
    const [schedule, setSchedule] = useState("")
    const {name,ate} = useContext(AuthContext)

    useEffect(() => {
        setSchedule("13:00 \n Sistem Basis Data")
    })

    let calorie = 0
    ate.forEach(e => {
      const food = getFoodById(e)
      if (!food) {
        return
      }
      calorie += food.cal
    })

  return (
    <Box
      bg="#F6F6F6"
      border="0.1px solid black"
      borderRadius="20px"
      w="min(30em,80vw)"
      m="auto"
      mt="2em"
      p="1em"
    >
      <Box display="flex" justifyContent="flex-start" alignItems="center" fontSize="3rem">
        <MdAccountCircle/>
        <Text width="80%" m="0 0 0 0.5em" textAlign="start" fontFamily="m" fontSize="0.5em">{name?.toString()}</Text>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mt="2.3em">
        <Box w="40%" bg="#5D737E" borderRadius="20px" p="1em">
            <Text fontSize="0.6em" color="tosca.b">Kalori Hari ini</Text>
            <Text fontSize="1.2em" color="tosca.b">{calorie}</Text>
            <Text fontSize="0.5em" color="tosca.b">kkal</Text>
        </Box>
        <Box w="1px" height="7em" bg="black"/>
        <Box w="50%" h="7em">
            <Text textAlign="start">Next Schedule</Text>
            <Text textAlign="start" mt="1em">{schedule}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
