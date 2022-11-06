import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import useConfigAxios from './Common/useConfigAxios';
import RootNavigator from './Navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './Redux/Store';

const queryClient = new QueryClient();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{flex: 1, alignSelf: 'stretch'}}>
            <RootNavigator />
          </SafeAreaView>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
