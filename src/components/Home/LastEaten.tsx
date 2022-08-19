import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getFoodById, getRandomFood } from "../../storage/foods";
import AuthContext from "../../util/context/authContext";

const NoFood = () => {
  return (
    <Box
      bg="tosca.c"
      border="0.1px solid black"
      borderRadius="20px"
      w="min(30em,80vw)"
      m="auto"
      mt="2em"
      p="1em"
    >
      <Text textAlign="start" color="tosca.b">
        Makanan Terakhir
      </Text>
      <Text fontSize="1.4em" color="tosca.b" lineHeight="1em" my="1em">
        Belum ada makanan <br /> yang dimakan hari ini.
      </Text>
    </Box>
  );
};

export default function LastEaten() {
  const { ate } = useContext(AuthContext);
  const navigate = useNavigate()
  if (ate.length == 0) {
    return <NoFood />;
  }

  const food = getFoodById(ate[ate.length - 1]);
  if (!food) {
    return <NoFood />;
  }

  const navigateFood = () => {
    navigate(`/food/${food.id}`)
  }

  const foodName = food.name;
  const foodImg = food.image;
  const foodCal = food.cal;

  return (
    <Box
      bg="tosca.c"
      border="0.1px solid black"
      borderRadius="20px"
      w="min(30em,80vw)"
      m="auto"
      mt="2em"
      p="1em"
    >
      <Text textAlign="start" color="tosca.b">
        Makanan Terakhir
      </Text>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        fontSize={{ base: "0.6em", sm: "1em" }}
      >
        <Box w="50%">
          <Text fontSize="1.5em" color="tosca.b" lineHeight="1em">
            {foodName}
          </Text>
          <Flex mt="1em">
            <Box m="auto" color="tosca.b">
              <Text fontSize="1.1em">{foodCal}</Text>
              <Text fontSize="0.9em" m="auto">kkal</Text>
            </Box>
            <Box h="3em" w="0.5px" bg="tosca.b"></Box>
            <Button color="tosca.a" w="8em" m="0.5em" borderRadius="10px" onClick={navigateFood}>Order Now !</Button>
          </Flex>
        </Box>
        <Image
          w="10em"
          borderRadius="10px"
          display="inline-block"
          src={foodImg}
        />
      </Flex>
    </Box>
  );
}
