import { Box } from "@chakra-ui/react";
import { MdReorder } from "react-icons/md";
import { Text } from "@chakra-ui/react";
import { colors } from "../../theme";
import { Link } from "react-router-dom";

export default function Navbar({hamburgerHandler} : {hamburgerHandler: () => void}) {
  return (
    <Box h="1em" fontSize="1.7rem" display="flex" alignItems="center" justifyContent="space-between">
      <Box width="3.2em" display="inline-block" onClick={hamburgerHandler} cursor="pointer">
        <MdReorder color={colors.tosca.a} width="90%" />
      </Box>
      <Link to="/">
      <Text fontFamily="title" display="inline-block" textAlign="right" color="tosca.a" >foodonex</Text></Link>
    </Box>
  );
}
