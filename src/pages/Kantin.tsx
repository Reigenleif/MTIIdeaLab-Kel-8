import { Text, Box, Flex } from "@chakra-ui/react";
import { MdStore } from "react-icons/md";
import KantinList from "../components/Kantin/KantinList";
import Map from "../components/Kantin/Map";
import { StepPops } from "../util/entrance-animation";

export default function Kantin() {
  return (
    <Box>
      <StepPops>
        <Text mt="1em" fontSize="2em">
          Peta Kantin
        </Text>
        <Flex mt="2em" height="25em" justifyContent="center">
          <Map />
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="0.3em" fontSize="5em">
            <MdStore color="black"/>
        </Flex>
        <Text mt="0.5em" fontSize="2em">
          Daftar Kantin
        </Text>
        <KantinList/>
      </StepPops>
    </Box>
  );
}
