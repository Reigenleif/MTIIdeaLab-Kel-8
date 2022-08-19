import { Input } from "@chakra-ui/react"

export default function (props: any) {
    return <Input
    type="number"
    border="2px solid white"
    bg="tosca.a"
    color="white"
    h="1.4em"
    pl="1em"
    mt="1em"
    w="20%"
    borderRadius="none"
    {...props}
  />
}