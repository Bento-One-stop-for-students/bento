import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './src';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="#7345F6"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Main />
    </SafeAreaProvider>
  );
}
