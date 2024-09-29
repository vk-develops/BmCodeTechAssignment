import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const BookingScreen = ({ route }) => {
    const { event } = route.params;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tickets, setTickets] = useState("1");

    const handleBooking = () => {
        Alert.alert(
            "Booking Confirmed!",
            `You have successfully booked ${tickets} ticket(s) for ${event.title}`
        );
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>
                Book Your Tickets for {event.title}
            </Text>
            <TextInput
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Number of Tickets"
                value={tickets}
                onChangeText={setTickets}
                keyboardType="numeric"
                style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
            />
            <Button
                title="Book Now"
                onPress={handleBooking}
            />
        </View>
    );
};

export default BookingScreen;
