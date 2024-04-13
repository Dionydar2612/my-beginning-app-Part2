const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import welcome from "./Screens/welcomepage";
import login from "./Screens/loginpage";
import createacc from '../GeoseryServer/Screens/createacc';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="welcome"
              component={welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="createacc"
              component={createacc}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
  );
};

export default App;
