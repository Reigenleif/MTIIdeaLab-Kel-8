import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { food } from "../../storage/foods";
import AuthContext from "../../util/context/authContext";
import PopupContext from "../../util/context/popupContext";



export default function FoodUI(food: food) {
  const navigate = useNavigate();
  const { addAte } = useContext(AuthContext);
  const { triggerPopup,disablePopup } = useContext(PopupContext);

  const FoodUIPopup = () => {
    return (
      <Box
        w="min(28em,70%)"
        bg="tosca.d"
        padding="2em"
        margin="auto"
        borderRadius="5px"
        color="white"
      >
        <Text textAlign="start" color="white" fontSize="1.2em" >
          Makanan berhasil ditambahkan!
        </Text>
        <Button fontSize="1em" onClick={disablePopup} color="black" mt="1em">
          OK
        </Button>
      </Box>
    );
  };

  const buyHandler = () => {
    addAte(food.id);
    triggerPopup(<FoodUIPopup/>)
    navigate('/')
  };
  return (
    <Box w="min(32em,80vw)" m="auto" mt="2em" overflow="hidden" color="tosca.b">
      <Image
        src={food.image}
        height="13em"
        width="13em"
        borderRadius="10px"
        m="auto"
        objectFit="cover"
      />
      <Text fontSize="2.9em">{food.name}</Text>
      <Flex justifyContent="space-evenly" w="100%" mt="1em">
        <Text>{"Rp. " + food.price }</Text>
        <Text>{food.cal + " kkal"}</Text>
        <Text>{food.time + " menit"}</Text>
      </Flex>
      <Flex justifyContent="space-around" w="100%" mt="1em">
        <Button w="8em" color="tosca.a" onClick={() => navigate("/")}>
          Batal
        </Button>
        <Button w="8em" color="tosca.a" onClick={buyHandler}>
          Beli
        </Button>
      </Flex>
    </Box>
  );
}
