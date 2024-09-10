import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CtaButton = ({ navigation, to, title }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(`${to}`);
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
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CtaButton;
