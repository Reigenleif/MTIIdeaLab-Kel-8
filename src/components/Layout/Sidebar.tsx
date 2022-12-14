import { Box, Button, Flex } from "@chakra-ui/react";
import { MdNavigateBefore } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getRandomFoodLink } from "../../storage/foods";

interface NavLinks {
  title: string;
  link: string;
}

const BUTTON_LINKS: NavLinks[] = [
  {
    title: "Foodlist",
    link: "/foodlist",
  },
  {
    title: "Kantin",
    link: "/kantin",
  },
  {
    title: "Jadwal",
    link: "/jadwal",
  },
  {
    title: "Pengaturan",
    link: "/pengaturan",
  },
];

const SidebarBtn = ({
  title,
  link,
  currentAt,
}: {
  title: string;
  link: string;
  currentAt: string;
}) => {
  const isActivated = currentAt == link;
  return (
    <Link to={link}>
      <Button
        fontSize="2em"
        w="100%"
        h="1.8em"
        mb="0.8em"
        color={isActivated ? "tosca.c" : "#0A4F57"}
        transition="0.2s"
        bg="none"
        _hover={{ bg: "#CCCCCC" }}
      >
        {title}
      </Button>
    </Link>
  );
};

export default function Sidebar({
  isActive,
  backHandler,
}: {
  isActive: Boolean;
  backHandler: () => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const generateRandomFood = () => {
    navigate(getRandomFoodLink());
    backHandler()
  };
  const currentAt = location.pathname == "/" ? "/home" : location.pathname;

  return (
    <Box
      fontSize={["0.8em", "1em"]}
      h="100%"
      w="20em"
      bg="#fafafafa"
      boxShadow="0px 0 6px 0"
      position="absolute"
      top="0px"
      transition="0.4s"
      zIndex="10"
      left={isActive ? "0" : "-21em"}
    >
      <Flex
        fontSize="4rem"
        justifyContent="flex-end"
        alignItems="center"
        pr="0"
        cursor="pointer"
      >
        <MdNavigateBefore onClick={backHandler} />
      </Flex>
      <Button
        w="80%"
        m="auto"
        fontSize="1.5em"
        bg="tosca.a"
        color={{ base: "white" }}
        p="1em"
        _hover={{ color: "tosca.a", bg: "#dddddd" }}
        onClick={generateRandomFood}
      >
        {" "}
        Generate your food!{" "}
      </Button>
      <Box w="100%" mt="1em">
        {BUTTON_LINKS.map((e, i) => (
          <SidebarBtn {...e} currentAt={currentAt} key={i} />
        ))}
      </Box>
    </Box>
  );
}
