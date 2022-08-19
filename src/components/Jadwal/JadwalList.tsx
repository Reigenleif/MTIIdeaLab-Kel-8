import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import PopupContext from "../../util/context/popupContext";
import { StepPops } from "../../util/entrance-animation";
import { useGetJadwal } from "../../util/jadwal";
import BasicInput from "../Common/BasicInput";

interface JadwalPopupProps {
  day: string;
  makanKe: number;
  handler: (hour: number, min: number) => void;
}

interface JadwalBlankProps {
  day: string;
  makanKe: number;
  handler: (hour: number, min: number) => void;
}

interface JadwalItemProps {
  hour: number;
  min: number;
  removeHandler: () => void;
}

interface JadwalRowProps {
  data: [number, number][];
  day: string;
  handler: (day: string, time: number, hour: number, sec: number) => void;
  removeHandler: (day: string, index: number) => void;
}

const HARI_HARI = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

const JadwalPopup = ({ day, makanKe, handler }: JadwalPopupProps) => {
  const { disablePopup } = useContext(PopupContext);

  const [hourInput, sethourInput] = useState(0);
  const [minInput, setminInput] = useState(0);

  const submitHandler = (e: any) => {
    e.preventDefault();
    handler(hourInput, minInput);
    disablePopup();
  };

  const hourInputChange = (e: any) => {
    if (e.target.value > 12) {
      sethourInput(12);
      return;
    }
    sethourInput(parseInt(e.target.value));
  };
  const minInputChange = (e: any) => {
    if (e.target.value > 59) {
      setminInput(59);
      return;
    }
    setminInput(parseInt(e.target.value));
  };

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
        Jadwal makan <br /> ke-{makanKe} hari {day}
      </Text>
      <form onSubmit={submitHandler}>
        <BasicInput value={hourInput} onChange={hourInputChange} w="40%" />
        {" : "}
        <BasicInput value={minInput} onChange={minInputChange} w="40%" />
        <Flex justifyContent="flex-end" mt="1em">
          <BtnDefault fontSize="1em" type="submit" color="black">
            OK
          </BtnDefault>
        </Flex>
      </form>
    </Box>
  );
};

const BtnDefault = (props: any) => {
  return (
    <Button
      fontSize="1.6em"
      minW="5em"
      maxW="5em"
      h="1.4em"
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

const JadwalItem = ({ hour, min, removeHandler }: JadwalItemProps) => {
  return (
    <BtnDefault bg="tosca.d" color="white" onClick={removeHandler}>
      {`${hour > 10 ? hour : "0" + hour.toString()} : ${
        min > 10 ? min : "0" + min.toString()
      }`}
    </BtnDefault>
  );
};

const JadwalRow = ({ data, day, handler, removeHandler }: JadwalRowProps) => {
  const changeDataHandler = (time: number) => (hour: number, min: number) => {
    handler(day, time, hour, min);
  };

  const removeHandlerGenerator = (time: number) => () => {
    removeHandler(day, time);
  };
  console.log(data);
  const items = data.map((e, i) =>
    !e[0] || !e[1] ? (
      <JadwalBlank
        key={i}
        day={day}
        makanKe={i + 1}
        handler={changeDataHandler(i)}
      />
    ) : (
      <JadwalItem
        hour={e[0]}
        min={e[1]}
        key={i}
        removeHandler={removeHandlerGenerator(i)}
      />
    )
  );
  while (items.length < 3) {
    items.push(
      <JadwalBlank
        key={items.length}
        day={day}
        makanKe={items.length + 1}
        handler={changeDataHandler(items.length)}
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
  const { jadwal, setJadwalHandler, delJadwalHandler } = useGetJadwal();
  const rows = HARI_HARI.map((e) => {
    return e in jadwal ? (
      <JadwalRow
        key={e}
        data={jadwal[e]}
        day={e}
        handler={setJadwalHandler}
        removeHandler={delJadwalHandler}
      />
    ) : (
      <JadwalRow
        key={e}
        data={[
          [0, 0],
          [0, 0],
          [0, 0],
        ]}
        day={e}
        handler={setJadwalHandler}
        removeHandler={delJadwalHandler}
      />
    );
  });
  return <StepPops>{rows}</StepPops>;
}
