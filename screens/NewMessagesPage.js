import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, ScrollView } from "react-native";

const NewMessagesPage = () => {
  const [message, setMessage] = useState(""); // State to manage message input
  const [messages, setMessages] = useState([]); // State to manage sent messages

  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]); // Add message to messages state
      setMessage(""); // Clear message input
    }
  };

  return (
    <View style={styles.container}>
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
          <Text>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0DFCE",
  },
  messageContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
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
    borderTopColor: "#CCC",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
});

export default NewMessagesPage;
