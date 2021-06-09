// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import "react-native-gesture-handler";

import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabOneScreen from "./screens/TabOneScreen";
import TabTwoScreen from "./screens/TabTwoScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function InternetStack() {
  return (
    <Stack.Navigator
      initialRouteName="Internet"
      screenOptions={{
        headerStyle: { backgroundColor: "#2B7DF1" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Internet"
        component={TabOneScreen}
        options={{ title: "Internet Data" }}
      />
    </Stack.Navigator>
  );
}

function LocalStack() {
  return (
    <Stack.Navigator
      initialRouteName="Local Data"
      screenOptions={{
        headerStyle: { backgroundColor: "#2B7DF1" },
        headerTintColor: "#fff",
        // headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Local"
        component={TabTwoScreen}
        options={{ title: "Local Data" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Internet"
        tabBarOptions={{
          activeTintColor: "#2B7DF1",
        }}
      >
        <Tab.Screen
          name="InternetStack"
          component={InternetStack}
          options={{
            tabBarLabel: "Internet Data",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="LocalStack"
          component={LocalStack}
          options={{
            tabBarLabel: "Local Data",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
