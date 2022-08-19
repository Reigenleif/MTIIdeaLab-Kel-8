import { Box, useMediaQuery } from "@chakra-ui/react";
import { MdReorder } from "react-icons/md";
import { Text } from "@chakra-ui/react";
import { colors } from "../../theme";
import { Link, useLocation } from "react-router-dom";

const reversedColorLocations = ["food","pengaturan"]

export default function Navbar({
  hamburgerHandler,
}: {
  hamburgerHandler: () => void;
}) {
  const [isMobile] = useMediaQuery('(max-width: 640px)')
  const location = useLocation()
  const isreverseColor = reversedColorLocations.includes(location.pathname.split("/")[1])

  if (isreverseColor) {
    document.body.style.background = colors.tosca.a
  } else {
    document.body.style.background = "none"
  }

  return (
    <Box
      h="1em"
      fontSize="1.7rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg={isreverseColor ? "tosca.a" : ""}
    >
      {!isMobile && <Box
        width="3.2em"
        display="inline-block"
        onClick={hamburgerHandler}
        cursor="pointer"
      >
        <MdReorder color={colors.tosca.a} width="90%" />
      </Box>}
      <Link to="/">
        <Text
          fontFamily="title"
          display="inline-block"
          textAlign={isMobile ? "left" : "right"}
          color={isreverseColor ? "white" : "tosca.a"}
        >
          foodynex
        </Text>
      </Link>
    </Box>
  );
}
