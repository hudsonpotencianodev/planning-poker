import React from 'react';
import { Game } from '../../../types/game';
import { Player } from '../../../types/player';
import { CardPicker } from '../../Players/CardPicker/CardPicker';
import { Players } from '../../Players/Players';
import { GameController } from '../GameController/GameController';
import './GameArea.css';
import { isModerator } from '../../../utils/isModerator';
import Grid from '@material-ui/core/Grid';

interface GameAreaProps {
  game: Game;
  players: Player[];
  currentPlayerId: string;
}
export const GameArea: React.FC<GameAreaProps> = ({ game, players, currentPlayerId }) => {
  return (
    <Grid container justify='center' alignItems='center' alignContent='center' direction='column'>
      <Grid item>
        <Players game={game} players={players} currentPlayerId={currentPlayerId} />
        <GameController game={game} currentPlayerId={currentPlayerId} />
      </Grid>
      <Grid item>
        {!isModerator(game.createdById, currentPlayerId) &&
          <CardPicker game={game} players={players} currentPlayerId={currentPlayerId} />
        }
      </Grid>
    </Grid>
  );
};

export default GameArea;
