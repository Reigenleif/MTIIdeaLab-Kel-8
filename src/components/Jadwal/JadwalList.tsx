import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import PopupContext from "../../util/context/popupContext";
import { StepPops } from "../../util/entrance-animation";
import { useGetJadwal } from "../../util/jadwal";

interface JadwalPopupProps {
  day: string;
  makanKe: number;
  handler: (text: string) => void;
}

interface JadwalBlankProps {
  day: string;
  makanKe: number;
  handler: (text: string) => void;
}

interface JadwalItemProps {
  time: string;
  removeHandler: () => void;
}

interface JadwalRowProps {
  data: string[];
  day: string;
  handler: (day: string, time: string) => void;
  removeHandler: (day: string, index: number) => void;
}

const HARI_HARI = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

const JadwalPopup = ({ day, makanKe, handler }: JadwalPopupProps) => {
  const { disablePopup } = useContext(PopupContext);
  const [input, setInput] = useState("");
  const inputHandler = () => {
    handler(input);
    disablePopup();
  };

  const inputChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <Box
      w="min(28em,70%)"
      bg="tosca.d"
      padding="2em"
      margin="auto"
      borderRadius="5px"
    >
      <Text textAlign="start" color="white" fontSize="1.2em">
        Jadwal makan <br /> ke-{makanKe} hari {day}
      </Text>
      <Input
        border="2px solid white"
        bg="tosca.a"
        color="white"
        h="1.4em"
        pl="1em"
        mt="1em"
        borderRadius="none"
        value={input}
        onChange={inputChange}
      />
      <Flex justifyContent="flex-end" mt="1em">
        <BtnDefault fontSize="1em" onClick={inputHandler}>
          OK
        </BtnDefault>
      </Flex>
    </Box>
  );
};

const BtnDefault = (props: any) => {
  return (
    <Button
      fontSize="2em"
      minW="4em"
      maxW="4em"
      h="1.2em"
      borderRadius="3px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mr="1em"
      {...props}
    >
      {props.children}
    </Button>
  );
};

const JadwalBlank = (props: JadwalBlankProps) => {
  const { triggerPopup } = useContext(PopupContext);

  const toggleEditHandler = () => {
    triggerPopup(<JadwalPopup {...props} />);
  };

  return (
    <BtnDefault bg="#D9D9D9" onClick={toggleEditHandler}>
      <MdEdit />
    </BtnDefault>
  );
};

const JadwalItem = ({ time, removeHandler }: JadwalItemProps) => {
  return (
    <BtnDefault bg="tosca.d" color="white" onClick={removeHandler}>
      {time}
    </BtnDefault>
  );
};

const JadwalRow = ({ data, day, handler, removeHandler }: JadwalRowProps) => {
  const newDataHandler = (text: string) => {
    handler(day, text);
  };

  const removeHandlerGenerator = (index: number) => () => {
    removeHandler(day, index)
  }

  const items = data.map((e,i) => <JadwalItem time={e} key={e} removeHandler={removeHandlerGenerator(i)}/>);
  if (items.length < 3) {
    items.push(
      <JadwalBlank
        key={"b"}
        day={day}
        makanKe={items.length + 1}
        handler={newDataHandler}
      />
    );
  }
  return (
    <>
      <Text
        textAlign="start"
        fontSize="2em"
        w="min(30rem,80vw)"
        m="auto"
        mt="0.9em"
      >
        {day}
      </Text>
      <Flex
        justifyContent="flex-start"
        w="min(30rem,80vw)"
        m="auto"
        mt="0.8em"
        overflow="scroll"
      >
        {items}
      </Flex>
    </>
  );
};

export default function JadwalList() {
  const { jadwal, setJadwalHandler,delJadwalHandler } = useGetJadwal();
  const rows = HARI_HARI.map((e) => {
    return e in jadwal ? (
      <JadwalRow key={e} data={jadwal[e]} day={e} handler={setJadwalHandler} removeHandler={delJadwalHandler}/>
    ) : (
      <JadwalRow key={e} data={[]} day={e} handler={setJadwalHandler} removeHandler={delJadwalHandler}/>
    );
  });
  return <StepPops>{rows}</StepPops>;
}
