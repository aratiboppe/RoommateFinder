import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, ScrollView } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";


const NewMessagesPage = () => {
  const [message, setMessage] = useState(""); // State to manage message input
  const [messages, setMessages] = useState([]); // State to manage sent messages
  const navigation = useNavigation();
  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]); // Add message to messages state
      setMessage(""); // Clear message input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.janeDoe}>Jane Doe</Text>
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
    left: 95,
    fontSize: 40,
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
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
