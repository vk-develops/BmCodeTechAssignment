import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImgComponent from "../Components/ImgComponent";
import CtaButton from "../Components/CtaButton";

const HomeScreen = ({ navigation, route }) => {
    const data = route.params;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
            }}
        >
            <ImgComponent />

            <View>
                <Text
                    style={{
                        fontFamily: "jakartaBold",
                        fontSize: 24,
                        textAlign: "center",
                    }}
                >
                    Welcome, {data.data.name}
                </Text>
                <Text
                    style={{
                        fontFamily: "jakartaMedium",
                        fontSize: 18,
                        textAlign: "center",
                        paddingTop: 4,
                    }}
                >
                    Phone, {data.data.phone}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.replace("OnboardingScreen");
                }}
                style={{
                    width: "100%",
                    backgroundColor: "#A3CFFF",
                    borderRadius: 100,
                    marginBottom: 25,
                    borderColor: "#94C7FF",
                    borderWidth: 2,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: "jakartaSemiBold",
                        textAlign: "center",
                        paddingVertical: 12,
                    }}
                >
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
