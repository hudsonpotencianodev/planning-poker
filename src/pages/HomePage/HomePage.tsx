import Grid from '@material-ui/core/Grid';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import './HomePage.css';
import Container from '@material-ui/core/Container';
import BuyMeACoffee from '../../components/BuyMeACoffee/BuyMeACoffee';

export const HomePage = () => {
  return (
    <Container className="HomePageContainer">
      <Grid spacing={3} alignItems='flex-start' justify='center' direction='row' container>
        <Grid item>
          <CreateGame />
        </Grid>
        <Grid item>
          <RecentGames />
        </Grid>
      </Grid>
      <BuyMeACoffee />
    </Container >
  );
};

export default HomePage;
