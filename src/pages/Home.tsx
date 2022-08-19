import { Box } from "@chakra-ui/react";
import Explore from "../components/Home/Explore";
import HomeProfile from "../components/Home/HomeProfile";
import LastEaten from "../components/Home/LastEaten";
import { Pops, StepPops } from "../util/entrance-animation";

export default function Home() {
  return (
    <Box>
      <StepPops>
        <HomeProfile />
        <LastEaten />
        <Explore />
      </StepPops>
    </Box>
  );
}
