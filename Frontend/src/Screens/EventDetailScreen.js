import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";

const EventDetailScreen = ({ route, navigation }) => {
    const { event } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: event.imageUrl }}
                style={styles.heroImage}
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.eventTitle}>{event.title}</Text>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.value}>2024-10-15</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>Virtual</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Duration:</Text>
                    <Text style={styles.value}>2 hours</Text>
                </View>

                <Text style={styles.sectionTitle}>About this Event</Text>
                <Text style={styles.description}>
                    {event.body} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut tristique orci in mauris bibendum, nec
                    pharetra lacus porta. Morbi ac lectus nec sapien viverra
                    tincidunt.
                </Text>

                <TouchableOpacity
                    style={styles.bookButton}
                    onPress={() => navigation.navigate("Booking", { event })}
                >
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },
    heroImage: {
        width: "100%",
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333",
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#6B7280",
    },
    value: {
        fontSize: 16,
        fontWeight: "400",
        color: "#333",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#4B5563",
        lineHeight: 22,
        marginBottom: 20,
    },
    bookButton: {
        backgroundColor: "#1E90FF",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#1E90FF",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    bookButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default EventDetailScreen;
