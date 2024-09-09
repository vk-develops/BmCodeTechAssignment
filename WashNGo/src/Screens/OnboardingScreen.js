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

const width = Dimensions.get("window").width;

const OnboardingScreen = () => {
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <View
                style={{
                    flex: 0.6,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={Logo}
                    style={{ height: "85%", width, resizeMode: "contain" }}
                />
            </View>
            <View style={{ flex: 0.4 }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "black",
                        textAlign: "center",
                        marginBottom: 50,
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
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "black",
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
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "black",
                            textAlign: "center",
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
