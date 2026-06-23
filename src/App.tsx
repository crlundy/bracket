import { useState } from 'react';
import Menu from './Menu.tsx';
import Game from './Game.tsx';

function App() {
  const [page, setPage] = useState<string>('menu');
  const [gameId, setGameId] = useState<number>(-1);

  return (
    <>
      {page === 'menu' && <Menu startGame={() => setPage('game')} setGameId={setGameId} />}
      {page === 'game' && <Game exit={() => setPage('menu')} gameId={gameId} />}
    </>
  );
}

export default App;
