import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import EventDetailScreen from "./src/Screens/EventDetailScreen";
import BookingScreen from "./src/Screens/BookingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        jakartaRegular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
        jakartaMedium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
        jakartaSemiBold: require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
        jakartaBold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Events"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="EventDetail"
                        component={EventDetailScreen}
                    />
                    <Stack.Screen
                        name="Booking"
                        component={BookingScreen}
                    />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
