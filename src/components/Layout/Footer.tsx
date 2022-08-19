import { Box, Text } from "@chakra-ui/react";
import { MdHome, MdSettings } from "react-icons/md";
import { useNavigate } from "react-router";
import { getRandomFoodLink } from "../../storage/foods";
import { colors } from "../../theme";

export default function Footer() {
  const navigate = useNavigate();
    const generateRandomFood = () => {
        navigate(getRandomFoodLink())
    }

  return (
    <Box
      bg="tosca.b"
      h="1.5em"
      w="100%"
      pos="fixed"
      bottom="0px"
      left="0px"
      zIndex="50"
      fontSize="3em"
      display="flex"
      justifyContent="space-around"
      pt="0.2em"
    >
      <Box p="0.1em" onClick={() => navigate("/")}>
        <MdHome color={colors.tosca.a} />
      </Box>

      <Box pos="relative" top="-1.2em">
        <Box
          h="2em"
          w="2em"
          borderRadius="1em"
          bg="tosca.b"
          pos="relative"
          left="calc(50% - 1em)"
        >
          <Box
            fontSize="0.8em"
            h="2em"
            w="2em"
            borderRadius="1em"
            bg="tosca.a"
            pos="relative"
            left="calc(50% - 1em)"
            top="0.3em"
          >
            <Box
              fontSize="0.7em"
              h="2em"
              w="2em"
              borderRadius="1em"
              bg="tosca.b"
              pos="relative"
              left="calc(50% - 1em)"
              top="0.4em"
              onClick={generateRandomFood}
            ></Box>
          </Box>
        </Box>
        <Text color="tosca.e" fontSize="0.3em">
          Generate Your Food
        </Text>
      </Box>
      <Box p="0.1em" onClick={() => navigate("/pengaturan")}>
        <MdSettings color={colors.tosca.a} />
      </Box>
    </Box>
  );
}
