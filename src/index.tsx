import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import LogRocket from 'logrocket';

import * as desertlionSdk from '@desertlion/sdk';

LogRocket.init('fuqjol/eyal-cohen');
desertlionSdk.init({
  appId: '123',
});

ReactDOM.render(<App />, document.getElementById('root'));
