import Grid from '@material-ui/core/Grid';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import './HomePage.css';
import Container from '@material-ui/core/Container';

export const HomePage = () => {
  return (
    <Container className="HomePageContainer">
      <Grid alignItems='center' justify='center' container>
        <Grid item>
          <CreateGame />
        </Grid>
        <Grid item>
          <RecentGames />
        </Grid>
      </Grid>
    </Container >
  );
};

export default HomePage;
