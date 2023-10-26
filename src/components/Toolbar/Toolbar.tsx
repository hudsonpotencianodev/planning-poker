import { Slide, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Toolbar.css';
import { useTranslation } from 'react-i18next';
import { LanguageControl } from '../LanguageControl/LanguageControl';
export const title = 'Planning Poker';

export const Toolbar = () => {
  const history = useHistory();
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const { t } = useTranslation();

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>
          <div className='HeaderContainer'>
            <div className='HeaderLeftContainer' onClick={() => history.push('/')}>
              <img src={'/logo192.png'} className='Logo' alt='logo' />
              <Typography variant={isSmallScreen ? 'subtitle1' : 'h5'} color='primary' noWrap>
                {title}
              </Typography>
            </div>
            <div>{!isSmallScreen && <LanguageControl />}</div>
          </div>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};
