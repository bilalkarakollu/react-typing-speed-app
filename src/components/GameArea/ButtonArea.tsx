import { Button } from "../../styled/Global";
import { IoReloadOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const ButtonArea = () => {

    const dispatch = useAppDispatch();

    const { time } = useAppSelector((state) => state.game);

  return (
    <>
      <Button mx={10} px={20}>
        {time}
      </Button>
      <Button mx={5} px={20} onClick={() => window.location.reload()}>
        <IoReloadOutline />
      </Button>
    </>
  );
};

export default ButtonArea;
