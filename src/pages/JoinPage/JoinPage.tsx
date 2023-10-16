import Container from '@material-ui/core/Container';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import './JoinPage.css';
import BuyMeACoffee from '../../components/BuyMeACoffee/BuyMeACoffee';

export const JoinPage = () => {
  return (
    <Container className="container mx-auto JoinPageContainer align-middle">
      <JoinGame />
      <BuyMeACoffee />
    </Container>
  );
};

export default JoinPage;
