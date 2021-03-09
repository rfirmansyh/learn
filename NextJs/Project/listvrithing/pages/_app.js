import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { useStore } from '../app/store';

import AppLayout from '../app/layouts/AppLayout';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
  )
}

export default MyApp;
