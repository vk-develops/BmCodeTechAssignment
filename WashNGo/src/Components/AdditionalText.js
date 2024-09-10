import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const AdditionalText = ({ navigation, to, title, toTitle }) => {
    return (
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
                {title}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(`${to}`);
                }}
            >
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
                    {toTitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AdditionalText;
