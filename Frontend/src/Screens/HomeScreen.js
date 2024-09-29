import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventResponse = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const imageResponse = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos"
                );

                const eventsWithImages = eventResponse.data
                    .slice(0, 10)
                    .map((event, index) => ({
                        ...event,
                        imageUrl: imageResponse.data[index]?.thumbnailUrl,
                    }));

                setEvents(eventsWithImages);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginVertical: 10 }}
            onPress={() => navigation.navigate("EventDetail", { event: item })}
        >
            <View style={{ margin: 10 }}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: "100%", height: 150 }}
                />
                <Text>{item.title}</Text>
                <Text>Date: 2024-10-15</Text>
                <Text>Location: Virtual</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <ActivityIndicator
                size="large"
                color="#0000ff"
            />
        );
    }

    return (
        <FlatList
            data={events}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{ margin: 16 }}
        />
    );
};

export default HomeScreen;
