import React, {useEffect} from 'react';
import {StyleSheet, LogBox, useColorScheme, StatusBar} from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
LogBox.ignoreAllLogs();
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Root from "./src/Navigation/Root";
import { checkInternet } from './src/Navigation/NavigationHelper/checkInternet';
import light from "./src/theme/light";
import dark from './src/theme/datk';

const App = () => {
  const scheme = useColorScheme()

  const internetIsConnecter = checkInternet();
  useEffect(() => {
    const unsubscribe = internetIsConnecter();
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider style={styles.cont}>
      <GestureHandlerRootView style={styles.cont}>
            <StatusBar
                backgroundColor={scheme == 'dark' ? '#2C2C2C' : '#2C2C2C'}
                barStyle={scheme == 'dark' ? 'light-content' : 'light-content'}
            />
            <NavigationContainer theme={scheme == 'dark' ? dark : light}>
                <Root />
            </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
