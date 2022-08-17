import { Box,Text } from "@chakra-ui/react";
import JadwalList from "../components/Jadwal/JadwalList";
import { StepPops } from "../util/entrance-animation";

export default function Jadwal() {


  return (
    <Box>
      <StepPops>
        <Text mt="1em" fontSize={['1.5em','2em']}>
          Jadwal makan kamu
        </Text>
        <JadwalList/>
      </StepPops>
    </Box>
  );
}
