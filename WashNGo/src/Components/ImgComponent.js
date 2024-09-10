import { View, Image, Dimensions } from "react-native";
import React from "react";
import Logo from "../../assets/Images/Logo.png";

const width = Dimensions.get("window").width;

const ImgComponent = () => {
    return (
        <View
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Image
                source={Logo}
                style={{
                    height: width - 100,
                    width: width - 100,
                    resizeMode: "contain",
                }}
            />
        </View>
    );
};

export default ImgComponent;
