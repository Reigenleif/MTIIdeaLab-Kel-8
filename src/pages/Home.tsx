import { Box } from "@chakra-ui/react";
import Explore from "../components/Home/Explore";
import HomeProfile from "../components/Home/HomeProfile";
import Recomendation from "../components/Home/Recomendation";
import { Pops, StepPops } from "../util/entrance-animation";

export default function Home() {
  return (
    <Box>
      <StepPops>
        <HomeProfile />
        <Recomendation />
        <Explore />
      </StepPops>
    </Box>
  );
}
