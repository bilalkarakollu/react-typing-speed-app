import { Dialog, DialogContent } from "../../styled/Dialog.styled"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Flex } from "../../styled/Global";
import { gameReset } from "../../store/slices/gameSlice";

const DialogArea = () => {

  const dispatch = useAppDispatch();
  const { isFinish, completedNumber, wrongNumber } = useAppSelector((state) => state.game);

  return (
    <Dialog open={isFinish}>
      <DialogContent>
        <Flex fontSize="xx-large" fontWeight="medium">Score</Flex>
        <Flex flexWrap="wrap" flexDirection="column">
          <Flex alignItems="center">Completed: <Flex margin="10px" color="green" fontSize="x-large" fontWeight="medium">{completedNumber}</Flex></Flex>
          <Flex alignItems="center">Wrong: <Flex margin="10px" color="red" fontSize="x-large" fontWeight="medium">{wrongNumber}</Flex></Flex>
        </Flex>
        <Flex justifyContent="end">
          <Button mx={5} px={20} py={10} onClick={() => window.location.reload()}>
            Replay
          </Button>
        </Flex>
      </DialogContent>
    </Dialog>
  )
}

export default DialogArea
