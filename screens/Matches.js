import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Matches = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const matches = route.params?.matches ?? [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Matches!</Text>
      <ScrollView style={styles.scrollView}>
        {matches.map((match, index) => (
          <View key={index} style={styles.matchContainer}>
            <View style={styles.matchChild}>
              <Image
                style={styles.avatarIcon}
                source={require("../assets/avatar1.png")}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{match.Name}</Text>
                <Text style={styles.details}>{match.Grade}, {match.University}</Text>
                <Text style={styles.messageLater}>Message them later</Text>
              </View>
              <Pressable
                style={styles.messageButton}
                onPress={() => navigation.navigate("IndividualMessages")}
              >
                <Text style={styles.messageButtonText}>Message</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  
  scrollView: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    paddingTop: 20,// Change this to your preferred background color
  },
  container: {
    flex: 1,
    backgroundColor: '#F0DFCE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: Color.colorBrown,
  },
  matchContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  avatarIcon: {
    width: 60, // Adjust width as needed
    height: 60, // Adjust height as needed
    borderRadius: 30, // Adjust for roundness
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
  },
  messageLater: {
    fontSize: 12,
    color: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  messageButtonText: {
    color: 'white',
  },
  likeButton: {
    marginRight: 10,
  },
  dislikeButton: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  // Additional styles...
});

export default Matches;