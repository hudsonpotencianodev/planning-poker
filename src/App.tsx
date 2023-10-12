import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GamePage } from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import { theme } from './service/theme';
import JoinPage from './pages/JoinPage/JoinPage';

import { Toolbar } from './components/Toolbar/Toolbar';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Router>
          <Toolbar></Toolbar> 
          <Switch>
              <Route path='/game/:id' component={GamePage} />
              <Route path='/join/:id' component={JoinPage} />
              <Route exact path='/*' component={HomePage} />
            </Switch>
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
