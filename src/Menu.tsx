import './Menu.css';
import tournaments from './tournaments';

type MenuProps = {
  setGameId: (id: number) => void;
  startGame: () => void;
};

function Menu(props: MenuProps) {
  function chooseGame(gameId: number) {
    props.setGameId(gameId);
    props.startGame();
  }

  return (
    <main className="menu">
      <h1>Bracket Game</h1>
      <div className="tournament-list">
        {tournaments.map((value, index) => {
          return (
            <div key={index} role="button" className="button tournament-button" onClick={() => chooseGame(index)}>
              {value.title}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Menu;
