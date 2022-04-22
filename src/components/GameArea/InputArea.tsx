import { Input } from "../../styled/Input.styled";
import { Flex } from "../../styled/Global";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeInput, gameControl, gameStart, changeTime, gameFinish } from "../../store/slices/gameSlice";
import React, { useEffect } from "react";
import ButtonArea from "./ButtonArea";

let interval: any = null;

const InputArea = () => {

  const dispatch = useAppDispatch();
  const { input, isGame, time } = useAppSelector((state) => state.game);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.charCode === 32) {
      dispatch(gameControl());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value.trim()));
    if (!isGame) {
      dispatch(gameStart());
      timer();
    }
  };

  const timer = () => {
    interval = setInterval(function () {
      dispatch(changeTime());
    }, 1000);
  };

  useEffect(() => {
    if (time <= 0) {
        clearInterval(interval);
        dispatch(gameFinish());
      }
  }, [time]);

  return (
    <Flex justifyContent="center">
      <Flex mt={50} width={"80%"}>
        <Input
          autoFocus
          value={input}
          onKeyPress={onKeyPress}
          onChange={handleChange}
        />
        <ButtonArea/>
      </Flex>
    </Flex>
  );
};

export default InputArea;
