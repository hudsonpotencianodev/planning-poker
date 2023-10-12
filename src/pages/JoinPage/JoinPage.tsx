import { Grid } from '@material-ui/core';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import './JoinPage.css';

export const JoinPage = () => {
  return (
    <div className="container mx-auto JoinPageContainer align-middle">
      <JoinGame />
    </div>
  );
};

export default JoinPage;
