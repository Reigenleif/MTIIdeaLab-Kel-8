import { Box, Flex, Text } from "@chakra-ui/react";
import { MdContactless, MdDateRange, MdStore } from "react-icons/md";
import { Link } from "react-router-dom";
import { colors } from "../../theme";

interface ExploreItemProps {
  link: string;
  title: string;
  icon: any;
}
const ExploreItem = ({ link, title, icon: Icon }: ExploreItemProps) => {
  return (
    <Link to={link}>
      <Flex
        w="7em"
        h="7em"
        p="1em"
        flexDirection="column"
        bg="tosca.c"
        borderRadius="10px"
        mx="1em"
      >
        <Text textAlign="start" fontSize="1rem" color="tosca.b">
          {title}
        </Text>
        <Box fontSize="3em" m="auto">
          <Icon color={colors.tosca.b} />
        </Box>
      </Flex>
    </Link>
  );
};

const EXPLORES: ExploreItemProps[] = [
  {
    link: "/foodlist",
    title: "Foodlist",
    icon: MdContactless,
  },
  {
    link: "/kantin",
    title: "Kantin",
    icon: MdStore,
  },
  {
    link: "/jadwal",
    title: "Jadwal",
    icon: MdDateRange,
  },
];
export default function Explore() {
  return (
    <Box w="min(32em,80vw)" m="auto" mt="2em" overflow="hidden">
      <Text color="black" textAlign="start" ml="1em">
        Explore
      </Text>
      <Box overflow="scroll" w="min(32em,80vw)">
        <Flex justifyContent="space-between" w="100%" mt="1em">
          {EXPLORES.map((e,i) => (
            <ExploreItem {...e} key={i}/>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
