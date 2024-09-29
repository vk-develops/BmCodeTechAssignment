import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
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
            onPress={() => navigation.navigate("EventDetail", { event: item })}
            style={styles.card}
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.details}>
                    <Text style={styles.date}>Date: 2024-10-15</Text>
                    <Text style={styles.location}>Location: Virtual</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#1E90FF"
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        padding: 15,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 15,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: "100%",
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginBottom: 5,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    date: {
        fontSize: 14,
        color: "#6B7280",
    },
    location: {
        fontSize: 14,
        color: "#6B7280",
    },
});

export default HomeScreen;
