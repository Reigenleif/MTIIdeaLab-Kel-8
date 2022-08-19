import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../util/context/authContext";
import { OpacityAnim } from "../util/entrance-animation";
import { useLoginState } from "../util/login";

export default function Login() {
  const [nama, setNama] = useState("");
  const { setName } = useContext(AuthContext)
  const navigate = useNavigate()

  const inputChangeHandler = (e: any) => {
    setNama(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault()
    setName(nama)
    navigate('/')
  }

  return (
    <OpacityAnim time={1}>
      <Flex
        bg="tosca.a"
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        top="0"
        left="0"
      >
        <Box maxW="min(30em,80%)" color="white">
          <Text fontFamily="title" fontSize={['2em','3em','5em']}>
            Foodynex
          </Text>
          <Text mt="1em" fontSize={['0.8em','1em','1.5em']}>Selamat datang di prototype UI Foodynex</Text>
          <Box mt="1em" fontSize={['0.8em','1em','1.5em']}>
            <Text m="0">Silakan masukkan nama kamu</Text>
            <form onSubmit={submitHandler}>
              <Input value={nama} onChange={inputChangeHandler} w="80%" mt="1em" fontSize={['0.8em','1em']} />
              <Button type="submit" color="tosca.a" mx="10%" mt="0.5em">Masuk</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </OpacityAnim>
  );
}
