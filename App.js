import { SafeAreaProvider ***REMOVED*** from 'react-native-safe-area-context';
import Main from './src';
import { StatusBar ***REMOVED*** from 'react-native';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true***REMOVED***
        backgroundColor="#7345F6"
        barStyle={'light-content'***REMOVED***
        showHideTransition={'fade'***REMOVED***
        hidden={false***REMOVED***
      />
      <Main />
    </SafeAreaProvider>
  );
***REMOVED***
