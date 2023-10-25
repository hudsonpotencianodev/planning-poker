import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grow,
  Radio,
  RadioGroup,
  TextField,
  Divider,
} from '@material-ui/core';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewGame } from '../../../service/games';
import { GameType, NewGame } from '../../../types/game';
import './CreateGame.css';
import { useTranslation } from 'react-i18next';

export const CreateGame = () => {
  const history = useHistory();
  const [gameName, setGameName] = useState('');
  const [canModeratorVote, setCanModeratorVote] = useState(false);
  const [gameType, setGameType] = useState(GameType.ShortFibonacci);
  const [createdBy, setCreatedBy] = useState('');
  const [hasDefaults, setHasDefaults] = useState({ game: true, name: true });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const game: NewGame = {
      name: gameName,
      createdBy: createdBy,
      createdAt: new Date(),
      gameType: gameType,
      canModeratorVote: canModeratorVote,
    };
    const newGameId = await addNewGame(game);
    if (newGameId) {
      setLoading(false);
    }
    history.push(`/game/${newGameId}`);
  };

  const emptyGameName = () => {
    if (hasDefaults.game) {
      setGameName('');
      hasDefaults.game = false;
      setHasDefaults(hasDefaults);
    }
  };
  const emptyCreatorName = () => {
    if (hasDefaults.name) {
      setCreatedBy('');
      hasDefaults.name = false;
      setHasDefaults(hasDefaults);
    }
  };

  return (
    <Grow in={true} enter timeout={2000}>
      <form onSubmit={handleSubmit}>
        <Card variant='outlined' className='CreateGameCard'>
          <CardHeader
            title={t('HomePage.heroSection.formNewSession.newSessionHeader')}
            titleTypographyProps={{ variant: 'h4' }}
          />
          <CardContent>
            <TextField
              color='primary'
              fullWidth
              required
              id='filled-required'
              label={t('HomePage.heroSection.formNewSession.sessionNameLabel')}
              placeholder='Enter a session name'
              value={gameName || ''}
              onClick={() => emptyGameName()}
              variant='outlined'
              onChange={(event: ChangeEvent<HTMLInputElement>) => setGameName(event.target.value)}
            />
            <TextField
              color='primary'
              margin='normal'
              fullWidth
              required
              id='filled-required'
              label={t('HomePage.heroSection.formNewSession.yourNameLabel')}
              placeholder='Enter your name'
              value={createdBy || ''}
              onClick={() => emptyCreatorName()}
              variant='outlined'
              onChange={(event: ChangeEvent<HTMLInputElement>) => setCreatedBy(event.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={canModeratorVote}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setCanModeratorVote(event.target.checked)
                  }
                />
              }
              label='Allow Moderator Voting'
            />
            <Divider />
            <RadioGroup
              value={gameType}
              onChange={(
                event: ChangeEvent<{
                  name?: string | undefined;
                  value: any;
                }>,
              ) => setGameType(event.target.value)}
            >
              <FormControlLabel
                value={GameType.ShortFibonacci}
                control={<Radio color='primary' size='small' />}
                label='Short Fibonacci (1, 2, 3, 5, 8, 13)'
              />
              <FormControlLabel
                value={GameType.Fibonacci}
                control={<Radio color='primary' size='small' />}
                label='Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)'
              />
            </RadioGroup>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              color='primary'
              data-testid='loading'
              disabled={loading}
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grow>
  );
};
