import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

const BookingScreen = ({ route, navigation }) => {
    const { event } = route.params;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tickets, setTickets] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");

    const handleBooking = () => {
        if (!name || !email) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        alert(`Booking confirmed for ${tickets} tickets!`);
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Book Your Tickets</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <View style={styles.ticketSelector}>
                    <Text style={styles.label}>Number of Tickets</Text>
                    <View style={styles.stepper}>
                        <TouchableOpacity
                            style={[
                                styles.stepperButton,
                                tickets === 1 && styles.disabledButton,
                            ]}
                            disabled={tickets === 1}
                            onPress={() => setTickets(tickets - 1)}
                        >
                            <Text style={styles.stepperText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.ticketCount}>{tickets}</Text>
                        <TouchableOpacity
                            style={styles.stepperButton}
                            onPress={() => setTickets(tickets + 1)}
                        >
                            <Text style={styles.stepperText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {errorMessage ? (
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                ) : null}

                <TouchableOpacity
                    style={styles.bookButton}
                    onPress={handleBooking}
                >
                    <Text style={styles.bookButtonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#F3F4F6",
    },
    header: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333",
        textAlign: "center",
        marginBottom: 30,
    },
    formContainer: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#D1D5DB",
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
        marginBottom: 20,
        color: "#333",
    },
    ticketSelector: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#4B5563",
    },
    stepper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 10,
        padding: 10,
        width: "100%",
    },
    stepperButton: {
        backgroundColor: "#1E90FF",
        padding: 10,
        borderRadius: 5,
    },
    stepperText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "600",
    },
    disabledButton: {
        backgroundColor: "#9CA3AF",
    },
    ticketCount: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
    errorMessage: {
        color: "#DC2626",
        marginBottom: 10,
        textAlign: "center",
    },
    bookButton: {
        backgroundColor: "#1E90FF",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
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

export default BookingScreen;
