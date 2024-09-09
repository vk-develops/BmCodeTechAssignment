import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appstack from "./src/Navigation/Appstack";

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
                <Appstack />
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
