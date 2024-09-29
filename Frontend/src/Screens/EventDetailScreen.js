import React from "react";
import { View, Text, Image, Button } from "react-native";

const EventDetailScreen = ({ route, navigation }) => {
    const { event } = route.params;

    return (
        <View style={{ margin: 16 }}>
            <Image
                source={{ uri: event.imageUrl }}
                style={{ width: "100%", height: 200 }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {event.title}
            </Text>
            <Text style={{ marginVertical: 10 }}>Date: 2024-10-15</Text>
            <Text style={{ marginBottom: 10 }}>Location: Virtual</Text>
            <Text style={{ marginBottom: 20 }}>{event.body}</Text>
            <Button
                title="Book Now"
                onPress={() => navigation.navigate("Booking", { event })}
            />
        </View>
    );
};

export default EventDetailScreen;
