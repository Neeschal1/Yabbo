import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Texting from "../screens/texting";
import UserSetup from "../screens/usersetup";

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: "Login",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="UserSetup"
        component={UserSetup}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Texting"
        component={Texting}
        options={{
          animation: "slide_from_right",
          headerShown: true,
          animation: "slide_from_right",
          title: "Baby",
          headerBackVisible: false,
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#000000",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
