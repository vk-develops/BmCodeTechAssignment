import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Logo from "../../assets/Images/Logo.png";
import MediumBlob from "../../assets/Images/Mediumblob.png";

const width = Dimensions.get("window").width;

const OnboardingScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                position: "relative",
            }}
        >
            <View style={{ position: "absolute", top: 0, right: -10 }}>
                <Image
                    source={MediumBlob}
                    style={{
                        width: 150,
                        resizeMode: "contain",
                        height: 150,
                        zIndex: 1,
                    }}
                />
            </View>
            <View
                style={{
                    flex: 0.6,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 16,
                }}
            >
                <Image
                    source={Logo}
                    style={{
                        height: "85%",
                        width,
                        resizeMode: "contain",
                        marginTop: 75,
                    }}
                />
            </View>
            <View
                style={{
                    flex: 0.4,
                    paddingHorizontal: 16,
                    paddingTop: 35,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,

                        textAlign: "center",
                        marginBottom: 50,
                        fontFamily: "jakartaSemiBold",
                        color: "#1e1e1e",
                    }}
                >
                    Sparkle & Shine Transform Your Drive with Every Wash!
                </Text>
                <TouchableOpacity
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
                        Let's Start
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: 3,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "black",
                            textAlign: "center",
                            fontFamily: "jakartaMedium",
                            color: "#555",
                        }}
                    >
                        Already have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "black",
                                textAlign: "center",
                                fontFamily: "jakartaSemiBold",
                                color: "#222",
                                paddingBottom: -2,
                            }}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
