const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import CreateAccount from "./screens/CreateAccount";
import Start from "./screens/Start";
import Start1 from "./screens/Start1";
import Start2 from "./screens/Start2";
import SignInPage from "./screens/SignInPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Matches from "./screens/Matches";
import LikedMatches from "./screens/LikedMatches";
import DislikedMatches from "./screens/DislikedMatches";
import Profile from "./screens/Profile";
import Preferences from "./screens/Preferences";
import ForgotPassword from "./screens/ForgotPassword";
import IndividualMessages from "./screens/IndividualMessages";
import LineVector from "./components/LineVector";

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
            <Stack.Screen
              name="Matches"
              component={Matches}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LikedMatches"
              component={LikedMatches}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DislikedMatches"
              component={DislikedMatches}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Preferences"
              component={Preferences}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IndividualMessages"
              component={IndividualMessages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
