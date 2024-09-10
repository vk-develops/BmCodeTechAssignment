import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import CtaButton from "../Components/CtaButton";
import AdditionalText from "../Components/AdditionalText";
import ImgComponent from "../Components/ImgComponent";

const RegisterScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ImgComponent />
            <View style={{ paddingHorizontal: 20 }}>
                <Text
                    style={{
                        fontFamily: "jakartaBold",
                        fontSize: 24,
                        color: "#1e1e1e",
                    }}
                >
                    Sign In
                </Text>
                <Text
                    style={{
                        fontFamily: "jakartaMedium",
                        fontSize: 16,
                        color: "#808080",
                        paddingTop: 8,
                        paddingBottom: 10,
                    }}
                >
                    Fill in the below form and add life to your car!
                </Text>

                <View style={{ marginTop: 15 }}>
                    <Text
                        style={{
                            fontFamily: "jakartaMedium",
                            color: "#000000",
                            fontSize: 16,
                        }}
                    >
                        Name
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: "#808080",
                            borderRadius: 15,
                            padding: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            flexDirection: "row",
                            marginTop: 10,
                        }}
                    >
                        <Feather
                            name="user"
                            size={24}
                            color="#808080"
                        />
                        <TextInput
                            style={{
                                paddingLeft: 12,
                                fontSize: 16,
                                width: "90%",
                            }}
                            placeholder="Enter your name"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text
                        style={{
                            fontFamily: "jakartaMedium",
                            color: "#000000",
                            fontSize: 16,
                        }}
                    >
                        Email
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: "#808080",
                            borderRadius: 15,
                            padding: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            flexDirection: "row",
                            marginTop: 10,
                        }}
                    >
                        <Feather
                            name="mail"
                            size={24}
                            color="#808080"
                        />
                        <TextInput
                            style={{
                                paddingLeft: 12,
                                fontSize: 16,
                                width: "90%",
                            }}
                            placeholder="xyz@gmail.com"
                        />
                    </View>
                </View>

                <View style={{ marginTop: 15, marginBottom: 35 }}>
                    <Text
                        style={{
                            fontFamily: "jakartaMedium",
                            color: "#000000",
                            fontSize: 16,
                        }}
                    >
                        Password
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: "#808080",
                            borderRadius: 15,
                            padding: 14,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            flexDirection: "row",
                            marginTop: 10,
                        }}
                    >
                        <Feather
                            name="lock"
                            size={24}
                            color="#808080"
                        />
                        <TextInput
                            style={{
                                paddingLeft: 12,
                                fontSize: 16,
                                width: "90%",
                            }}
                            placeholder="Password"
                        />
                    </View>
                </View>
                <CtaButton
                    navigation={navigation}
                    to={"OnboardingScreen"}
                    title="Sign Up"
                />
                <AdditionalText
                    navigation={navigation}
                    to={"LoginScreen"}
                    title={"Already have an account?"}
                    toTitle={"Sign In"}
                />
                <Text
                    style={{
                        fontFamily: "jakartaMedium",
                        fontSize: 15,
                        color: "#808080",
                        paddingVertical: 12,
                        textAlign: "center",
                    }}
                >
                    By login or sign up, you agree to our terms of use and
                    privacy policy
                </Text>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
