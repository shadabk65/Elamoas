//styles
import '../styles/feather.css'
import '../styles/style.css'
import '../styles/video-player.css';
import '../styles/themify-icons.css'
import '../styles/globals.css'
//modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

//store
import {Provider} from 'react-redux'
import store from '../src/redux/store';
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp;
