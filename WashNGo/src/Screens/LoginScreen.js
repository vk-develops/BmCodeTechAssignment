import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import AdditionalText from "../Components/AdditionalText";
import ImgComponent from "../Components/ImgComponent";
import Mediumblob from "../../assets/Images/Mediumblob.png";

const LoginScreen = ({ navigation }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async () => {
        try {
            const userReq = { phone, password };

            const response = await fetch(
                "https://tor.appdevelopers.mobi/api/login",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userReq),
                }
            );

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigation.replace("HomeScreen", data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
        >
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <Image
                    source={Mediumblob}
                    style={{
                        height: 150,
                        width: 150,
                        transform: [{ rotate: "180deg" }],
                    }}
                />
            </View>
            <ImgComponent />
            <View style={{ paddingHorizontal: 20 }}>
                <Text
                    style={{
                        fontFamily: "jakartaBold",
                        fontSize: 24,
                        color: "#1e1e1e",
                    }}
                >
                    Sign Up
                </Text>
                <Text
                    style={{
                        fontFamily: "jakartaMedium",
                        fontSize: 16,
                        color: "#808080",
                        paddingTop: 8,
                        paddingBottom: 10,
                        width: "60%",
                    }}
                >
                    Hi ! Welcome back, you have been missed
                </Text>

                <View style={{ marginTop: 15 }}>
                    <Text
                        style={{
                            fontFamily: "jakartaMedium",
                            color: "#000000",
                            fontSize: 16,
                        }}
                    >
                        Phone
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
                            name="phone"
                            size={24}
                            color="#808080"
                        />
                        <TextInput
                            style={{
                                paddingLeft: 12,
                                fontSize: 16,
                                width: "90%",
                            }}
                            placeholder="9654871230"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            keyboardType="name-phone-pad"
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
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleLoginSubmit}
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
                        Sign In
                    </Text>
                </TouchableOpacity>

                <View style={{ paddingHorizontal: 20 }}>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: "45%",
                                height: 1,
                                backgroundColor: "#A3CFFF",
                            }}
                        ></View>
                        <Text
                            style={{
                                fontFamily: "jakartaMedium",
                                fontSize: 15,
                            }}
                        >
                            Or
                        </Text>
                        <View
                            style={{
                                width: "45%",
                                height: 1,
                                backgroundColor: "#A3CFFF",
                            }}
                        ></View>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 12,
                            marginBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#a3cfff",
                                borderRadius: 100,
                            }}
                        >
                            <FontAwesome
                                name="google"
                                size={24}
                                color="black"
                                style={{ padding: 15 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#a3cfff",
                                borderRadius: 100,
                            }}
                        >
                            <Ionicons
                                name="logo-apple"
                                size={24}
                                color="black"
                                style={{ padding: 15 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <AdditionalText
                    navigation={navigation}
                    to={"RegisterScreen"}
                    title={"Don’t have an account?"}
                    toTitle={"Sign Up"}
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

export default LoginScreen;
