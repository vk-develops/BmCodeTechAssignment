import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import OnboardingScreen from "../Screens/OnboardingScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const Appstack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default Appstack;
