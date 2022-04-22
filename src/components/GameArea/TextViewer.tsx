import React, { useEffect } from "react";
import { TextArea, Text } from "../../styled/TextArea.styled";
import { useAppSelector } from "../../store/hooks";

const TextViewer = () => {
  const { list, focusNumber } = useAppSelector((state) => state.game);

  const fieldRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusNumber && fieldRef.current) {
        fieldRef.current.scrollIntoView();
    }
  }, [focusNumber]);

  return (
    <TextArea>
      {list.map((item, index) => (
        <Text
          key={index}
          id={`${index}`}
          background={index === focusNumber ? "lightgrey" : "white"}
          color={
            item.completed
              ? item.status === "ok"
                ? "green"
                : "red"
              : index === focusNumber
              ? "black"
              : "black"
          }
          textShadow={
            item.completed
              ? item.status === "ok"
                ? "0 0 3px greenyellow"
                : "0 0 3px red"
              : index === focusNumber
              ? "black"
              : "black"
          }
          ref={index === focusNumber ? fieldRef : null}
        >
          {item.text}
        </Text>
      ))}
    </TextArea>
  );
};

export default TextViewer;
