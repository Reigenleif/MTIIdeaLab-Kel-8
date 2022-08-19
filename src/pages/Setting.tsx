import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import BasicInput from "../components/Common/BasicInput";
import AuthContext from "../util/context/authContext";
import PopupContext from "../util/context/popupContext";
import { OpacityAnim } from "../util/entrance-animation";

export default function Setting() {
  const { setName, resetAte } = useContext(AuthContext);
  const { triggerPopup, disablePopup } = useContext(PopupContext);

  const GantiNamaPopup = () => {
    const [nameInput, setNameInput] = useState("");
    const submitHandler = () => {
      setName(nameInput);
      disablePopup();
    };

    const changeHandler = (e: any) => {
        setNameInput(e.target.value)
    }

    return (
      <Box
        w="min(28em,70%)"
        bg="tosca.d"
        padding="2em"
        margin="auto"
        borderRadius="5px"
        color="white"
      >
        <Text textAlign="start" color="white" fontSize="1.2em">
          Masukkan nama barumu :
        </Text>
        <BasicInput
          value={nameInput}
          w="70%"
          onChange={changeHandler}
        />
        <Flex justifyContent="center" mt="1em" w="100%">
          <Button fontSize="1em" onClick={submitHandler} color="black">
            OK
          </Button>
        </Flex>
      </Box>
    );
  };

  const ResetAtePopup = () => {
    return (
      <Box
        w="min(28em,70%)"
        bg="tosca.d"
        padding="2em"
        margin="auto"
        borderRadius="5px"
        color="white"
      >
        <Text textAlign="start" color="white" fontSize="1.2em">
          Kalori berhasil direset !
        </Text>
        <Button
          fontSize="1em"
          onClick={() => {
            disablePopup;
          }}
          color="black"
        >
          OK
        </Button>
      </Box>
    );
  };

  const gantiNamaHandler = () => {
    triggerPopup(<GantiNamaPopup />);
  };

  const resetAteHandler = () => {
    triggerPopup(<ResetAtePopup />);
    resetAte();
  };

  const logoutHandler = () => {
    setName('')

  }

  return (
    <OpacityAnim time={1}>
      <Flex
        bg="tosca.a"
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="min(30em,80%)" color="white">
          <Text mt="1em" fontSize="2em" color="white">
            Pengaturan
          </Text>
          <Button
            p="0.5em"
            color="tosca.a"
            bg="white"
            borderRadius="10px"
            w="max(40%,10em)"
            m="2em"
            onClick={gantiNamaHandler}
          >
            Ganti Nama
          </Button>
          <Button
            p="0.5em"
            color="tosca.a"
            bg="white"
            borderRadius="10px"
            w="max(40%,10em)"
            m="2em"
            onClick={resetAteHandler}
          >
            Reset Kalori
          </Button>
          <Button
            p="0.5em"
            color="white"
            bg="salmon"
            borderRadius="10px"
            w="max(40%,10em)"
            m="2em"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </Box>
      </Flex>
    </OpacityAnim>
  );
}
