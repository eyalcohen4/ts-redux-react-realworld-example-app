import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import LogRocket from 'logrocket';

import * as desertlion from '@desertlion/sdk';

LogRocket.init('fuqjol/eyal-cohen');
desertlion.init({
  appId: '123',
});

ReactDOM.render(<App />, document.getElementById('root'));
