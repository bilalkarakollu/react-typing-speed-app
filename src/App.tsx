import { useEffect } from 'react';
import { data } from './api/data';
import { shuffleArray } from './utils/shuffleArray';
import { Container } from './styled/Container.styled'
import { useAppDispatch } from './store/hooks';
import { setList } from './store/slices/gameSlice';
import GameArea from './components/GameArea';

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setList(shuffleArray(data)));
  }, [dispatch]);

  return (
    <Container>
      <GameArea/>
    </Container>
  )
}

export default App
