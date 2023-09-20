import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div>
      <CreateGame />
      <RecentGames />
    </div>
  );
};

export default HomePage;
