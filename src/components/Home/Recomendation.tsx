import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRandomFood } from "../../storage/foods";

export default function Recomendation() {
    const [foodName, setFoodName] = useState("")
    const [foodImg, setFoodImg] = useState("")

    useEffect(()=> {
        const randomFood = getRandomFood()
        setFoodName(randomFood.name)
        setFoodImg(randomFood.image)
    })

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
      <Text textAlign="start" color="tosca.b">Makanan Hari ini</Text>
      <Flex alignItems="center" justifyContent="space-evenly" fontSize={{base:'0.6em',sm:'1em'}}>
        <Text fontSize="3em" color="tosca.b" lineHeight="1em">{foodName}</Text>
        <Image w="10em" borderRadius="10px" display="inline-block" src={foodImg} />
      </Flex>
    </Box>
  );
}
