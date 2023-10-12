import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grow,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewGame } from '../../../service/games';
import { NewGame } from '../../../types/game';
import './CreateGame.css';
import { useTranslation } from 'react-i18next';

export const CreateGame = () => {
  const history = useHistory();
  const [gameName, setGameName] = useState('');
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
            className='CreateGameCardHeader'
            title={t('HomePage.heroSection.formNewSession.newSessionHeader')}
            titleTypographyProps={{ variant: 'h4' }}
          />
          <CardContent className='CreateGameCardContent'>
            <TextField
              color='primary'
              className='CreateGameTextField'
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
              className='CreateGameTextField'
              required
              id='filled-required'
              label={t('HomePage.heroSection.formNewSession.yourNameLabel')}
              placeholder='Enter your name'
              value={createdBy || ''}
              onClick={() => emptyCreatorName()}
              variant='outlined'
              onChange={(event: ChangeEvent<HTMLInputElement>) => setCreatedBy(event.target.value)}
            />
          </CardContent>
          <CardActions className='CreateGameCardAction'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='CreateGameButton'
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
