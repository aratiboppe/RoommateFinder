const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import CreateAccount from "./screens/CreateAccount";
import Start from "./screens/Start";
import Start1 from "./screens/Start1";
import Start2 from "./screens/Start2";
import SignInPage from "./screens/SignInPage";
import NeedToSign from "./components/NeedToSign";
import LineVector from "./components/LineVector";
import ForgotPasswordText from "./components/ForgotPasswordText";
import LivingLinkText from "./components/LivingLinkText";
import HaveAnAccount from "./components/HaveAnAccount";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start1"
              component={Start1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start2"
              component={Start2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInPage"
              component={SignInPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
