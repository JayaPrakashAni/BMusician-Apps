import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './File/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from './File/Login/AuthContext'; // ✅ Import AuthProvider
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider> {/* ✅ Wrap Entire App with AuthProvider First */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
