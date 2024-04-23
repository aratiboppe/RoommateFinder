import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, ScrollView } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {AsyncStorage} from 'react-native';
import axios from "axios";

const NewMessagesPage = () => {
const [message, setMessage] = useState(""); // State to manage message input
const [messages, setMessages] = useState([]); // State to manage sent messages
const navigation = useNavigation();
const route = useRoute(); // Use useRoute to access the route parameters

const selectedMatch = route.params?.selectedMatch; // Default to "Jane Doe" if no match is selected

useEffect(() => {
    // Fetch messages on initial render
    fetchMessages();

    // Cleanup function to prevent memory leaks
    return () => {
    // Cleanup code if needed
    };
}, []);

const saveMessages = async (messagesToSave) => {
    try {
    // Save messages to AsyncStorage whenever messages state changes
    await AsyncStorage.setItem('messages', JSON.stringify(messagesToSave));
    console.log("Messages saved to AsyncStorage:", messagesToSave);
    } catch (error) {
    console.error("Error saving messages to AsyncStorage:", error);
    }
};

const fetchMessages = async () => {
    try {
    const sender = await AsyncStorage.getItem('Username');
    const receiver = selectedMatch; // Get receiver from storage

    // Construct the URL with sender and receiver as query parameters
    const url = `http://localhost:3001/fetch-messages?sender=${sender}&receiver=${receiver}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    console.log("DATA MAP: ", data.results.length);
    const extractedMessages = data.results.map(item => item.message);
    console.log("Extracted Messages: ", extractedMessages);

    if (data && data.results.length > 0) {
        // Extract the message content from the result set
        const extractedMessages = data.results.map(item => item.message);
        console.log("Extracted Messages Again: ", extractedMessages);
        setMessages(extractedMessages);
        // Save the retrieved messages to AsyncStorage
        saveMessages(extractedMessages);
        console.log("Messages fetched from backend:", extractedMessages);
    } else {
        console.log("Response does not contain expected messages.");

    }
    } catch (error) {
    console.error("Error fetching messages:", error);
    }
};

const sendMessage = async () => {
    if (message.trim() !== "") {
    const sender = await AsyncStorage.getItem('Username');
    const receiver = selectedMatch; // Get receiver from storage

    try {
        const response = await axios.post("http://localhost:3001/save-message", {
        sender,
        receiver,
        message
        });

        if (response.data && response.data.message) {
        // Update messages state with the new message
        setMessages(prevMessages => [...prevMessages, response.data.message]);
        setMessage(""); // Clear message input
        }
    } catch (error) {
        console.error("Error sending message:", error);
    }
    }
};

return (
    <View style={styles.container}>
    <Text style={styles.janeDoe}> {selectedMatch}</Text>
    <ScrollView>
        {/* Display sent messages */}
        {messages.map((msg, index) => (
        <View key={index} style={styles.messageContainer}>
            <Text style={styles.sentMessage}>{msg}</Text>
        </View>
        ))}
    </ScrollView>
    {/* Input field for typing messages */}
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
        />
        <Pressable style={styles.sendButton} onPress={sendMessage}>
        <Text style={styles.send}>Send</Text>
        </Pressable>
    </View>
    <Pressable
        style={[styles.vectorIcon, styles.vectorPosition]}
        onPress={() => navigation.goBack()}
    >
        <Image
        style={[styles.linkIcon, styles.iconLayout, {transform: [{rotate:'90deg'}] }] }
        contentFit="cover"
        source={require("../assets/chevrondown.png")}
        />
    </Pressable>
    </View>
);
};

const styles = StyleSheet.create({
vectorIcon: {
    height: "3.98%",
    width: "7.81%",
    right: "46.25%",
    bottom: "1.73%",
    left: "5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
},
vectorPosition: {
    top: "6.5%",
    position: "absolute",
},
linkIcon: {
    height: "80%",
    width: "150%",
},
iconLayout: {
    maxHeight: "93%",
    maxWidth: "100%",
    overflow: "hidden",
},
janeDoe: {
    top: 50,
    fontSize: 40,
    letterSpacing: 0,
    fontWeight: "400",
    color: Color.colorBrown,
    textAlign: "center",
    width: '100%',
    height: 64,
    position: "absolute",
},
send: {
    color: Color.white,
},
container: {
    flex: 1,
    backgroundColor: "#F0DFCE",
},
messageContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    top: 100,
    alignSelf: "flex-end",
},
sentMessage: {
    fontSize: 16,
},
inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    height: 70,
    borderTopColor: "#CCC",
},
input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderColor: "#CCC",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
},
sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.colorBrown,
    borderRadius: 20,
},
});

export default NewMessagesPage;