import { Box, Flex, Text } from "@chakra-ui/react";
import { DUMMY_KANTIN, Kantin } from "../../storage/kantin";

export default function KantinList() {
  const KantinItem = (p: Kantin) => {
    return (
      <Flex
        bg="tosca.a"
        w="min(70%,30em)"
        h="4.5em"
        borderRadius="6px"
        m="auto"
        mt="1em"
        p="0.5em"
        color="tosca.b"
        
      >
        <Box w="70%" h="100%" display="inline-block"><Text textAlign='left'>{p.name}</Text><Text textAlign='left' fontSize="0.8em">{p.location}</Text></Box>
        <Box w="20%" h="100%" display="inline-block"><Text textAlign='right' fontSize="1.4em">10 m</Text></Box>
      </Flex>
    );
  };

  return (
    <>
      {DUMMY_KANTIN.map((e) => (
        <KantinItem {...e}/>
      ))}
    </>
  );
}
