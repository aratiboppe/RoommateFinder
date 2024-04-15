import * as React from "react";
import { StyleSheet, View, Text, Pressable, Alert, FlatList, ScrollView, Dimensions, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Matches = () => {
  const navigation = useNavigation();
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState([]);
  const [showSignOutAlert, setShowSignOutAlert] = useState(false);

  const handleSignOut = () => {
    setShowSignOutAlert(true);
  };

  const handleConfirmSignOut = () => {
    // Perform sign-out logic here
    // For demonstration, navigate to the start page
    navigation.navigate("Start");
  };

  const handleOpenModal = (match) => {
    setSelectedMatch(match);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setSelectedMatch(null);
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await fetch("http://localhost:3305/matches", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };
  
  const likeMatch = (id) => {
    setMatches(matches.map(match => {
      if (match.id === id) {
        return { ...match, liked: true, disliked: false };
      }
      return match;
    }));
  };
  
  const dislikeMatch = (id) => {
    setMatches(matches.map(match => {
      if (match.id === id) {
        return { ...match, disliked: true, liked: false };
      }
      return match;
    }));
  };

  

  const renderItem = ({ item }) => (
    <View style={[styles.matchContainer, item.liked && styles.likedMatch, item.disliked && styles.dislikedMatch]}>
    <Text style={styles.user2Name}>{item.User2Name}</Text>
    <Text style={styles.universityOfTexas}>University: {item.User2University}</Text>
    <Text style={styles.similarityScore}>Score: {item.SimilarityScore}</Text>
  
    <Pressable onPress={() => handleOpenModal(item)}>
              <Text style={styles.preferenceLink}>Preferences</Text>
    </Pressable>
    <Modal visible={selectedMatch !== null} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          {selectedMatch && (
            <View style={styles.preferencesContainer}>
              <Text style={styles.preferenceLabel}>{selectedMatch.User2Name}</Text>
              <Text style={styles.preferenceLabel}>Grade: {selectedMatch.User2Grade}</Text>
              <Text style={styles.preferenceLabel}>Gender: {selectedMatch.User2Gender}</Text>
              <Text style={styles.preferenceLabel}>Move Date: {selectedMatch.User2MoveDate}</Text>
              <Text style={styles.preferenceLabel}>Lease Duration: {selectedMatch.User2LeaseDuration}</Text>
              <Text style={styles.preferenceLabel}>Housing Type: {selectedMatch.User2HousingType}</Text>
              <Text style={styles.preferenceLabel}>Locality: {selectedMatch.User2Locality}</Text>
              <Text style={styles.preferenceLabel}>Room Type: {selectedMatch.User2RoomType}</Text>
              <Text style={styles.preferenceLabel}>Budget: {selectedMatch.User2Budge}</Text>
              <Text style={styles.preferenceLabel}>Smoking: {selectedMatch.User2Smoking}</Text>
              <Text style={styles.preferenceLabel}>Drinking: {selectedMatch.User2Drinking}</Text>
              <Text style={styles.preferenceLabel}>Pets: {selectedMatch.User2Pets}</Text>

            </View>
          )}
          <Pressable onPress={handleCloseModal}>
            <Text style={styles.closeButton}>Close</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>

      <Pressable
        onPress={() => navigation.navigate("IndividualMessages")}
      >
          <Text style={styles.messageThemLater}>Message them later</Text>
      </Pressable>
      
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/avatar1.png")}
      />
      <Pressable
        style={styles.likeButton}
        onPress={() => likeMatch(item.id)}
      >
        <Image
          style={styles.likeIcon}
          source={require("../assets/like.png")}
        />
      </Pressable>
      <Pressable
        style={styles.dislikeButton}
        onPress={() => dislikeMatch(item.id)}
      >
        <Image
          style={styles.dislikeIcon}
          source={require("../assets/group-33.png")}
        />
      </Pressable>
      <Pressable
          onPress={() => navigation.navigate("NewMessagesPage", { selectedMatch: item.User2Name })}

      >
        <View style={styles.button}>
          <Text style={[styles.message, styles.textTypo]}>Message</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.yourMatch, styles.textTypo1]}>Your Match!</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {matches.map((item, index) => (
          <View key={index}>
            {renderItem({ item })}
          </View>
        ))}
      </ScrollView>
      <View style={styles.iconsContainer}>
        <Pressable
          style={[styles.vectorPreferences, styles.groupPosition]}
          onPress={() => navigation.navigate("Preferences")}
        >
          <Image
            style={[styles.icon, styles.iconImage]}
            contentFit="cover"
            source={require("../assets/icons8-preferences-32.png")}
          />
        </Pressable>
      
        <Pressable
          style={[styles.group, styles.groupPosition]}
          onPress={() => navigation.navigate("ExistingUserProfile")}
        >
          <Image
            style={[styles.icon, styles.iconImage]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
        
        <Pressable
          style={[styles.vectorIcon, styles.vectorPosition]}
          onPress={() => navigation.navigate("Matches")}
        >
          <Image
            style={[styles.linkIcon, styles.iconImage]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>

        <Pressable
          
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          onPress={() => navigation.navigate("IndividualMessages")}
        >
          <Image
            style={[styles.icon, styles.iconImage]}
            contentFit="cover"
            source={require("../assets/chaticon.png")}
          />
        </Pressable>

        <Pressable
          style={[styles.vector, styles.groupPosition]}
          //onPress={() => navigation.navigate("Start")}  //change this to actual page later
          onPress={handleSignOut}
        >
          <Image
            style={[styles.icon, styles.iconImage]}
            contentFit="cover"
            source={require("../assets/exit.png")}
          />
        </Pressable>
   
      {/* Sign out confirmation dialog */}
      {showSignOutAlert && (
        Alert.alert(
          "Sign Out",
          "Are you sure you want to sign out?",
          [
            {
              text: "No",
              onPress: () => setShowSignOutAlert(false),
              style: "cancel",
            },
            { text: "Yes", onPress: handleConfirmSignOut },
          ],
          { cancelable: false }
        )
      )}





      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preferenceLink: {
    textDecorationLine: 'underline',
    color: Color.colorBlack,
    top: 3, // Adjust this value as needed for spacing
    left: 90,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: '15%',
  },
  modalContent: {
    backgroundColor: '#F0DFCE',
    padding: 50,
    borderRadius: 10,
    width: '80%',
  },
  preferencesContainer: {
    marginTop: 50,
  },
  preferenceLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  closeButton: {
    textAlign: 'center',
    color: '#008080',
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  
  similarityScore: {
    fontSize: 15,
    bottom: 35,
    left: 320,
  },
  message: {
    lineHeight: 12,
    height: 12,
    textAlign: "center",
  },
  textTypo: {
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.size_mini,
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    right: "25%",
    backgroundColor: Color.colorBrown,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xl,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(136, 144, 194, 0.25)",
    borderRadius: Border.br_980xl,
    position: "absolute",
    overflow: "hidden",
    bottom: 20,
  },
  vectorPreferences: {
    left: "24%",
    right: "20%",
    bottom: "2.58%",
    width: "7%",
    height: "3%",
  },
  groupPosition: {
    top: "94.74%",
    position: "absolute",
  },
  preferences: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "89%",
    top: "94.3%",
    right: "24.38%",
    bottom: "2.14%",
    width: "6.25%",
    height: "3.57%",
    position: "absolute",
  },
  icon: {
    height: "80%",
    width: "110%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconLayout: {
    maxHeight: "93%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  group: {
    left: "4.22%",
    right: "91.09%",
    bottom: "2.44%",
    width: "7%",
    height: "4%",
  },
  linkIcon: {
    height: "80%",
    width: "150%",
  },
  vectorIcon: {
    height: "3.98%",
    width: "7.81%",
    right: "46.25%",
    bottom: "1.73%",
    left: "45.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorPosition: {
    top: "94.3%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "5%",
    width: "6.75%",
    top: "94.49%",
    right: "5.47%",
    bottom: "2.17%",
    left: "69.38%",
    position: "absolute",
  },
  vectorIcon1Position: {
    top: "94.25%",
    position: "absolute",
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
    marginBottom: 10,
  },
  scrollContainer: {
    marginTop: 120,
    alignItems: 'center',
  },
  matchContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: windowWidth - 20,
    marginHorizontal: 10,
  },
  likedMatch: {
    backgroundColor: 'lightcoral',
  },
  dislikedMatch: {
    backgroundColor: 'lightgreen',
  },
  user2Name: {
    top: 10,
    left: 90,
    fontSize: 20,
    fontWeight: '600',
  },
  universityOfTexas: {
    fontSize: 15,
    top: 15, 
    left: 90,
    color: Color.colorBlack,
    fontWeight: "500",
    paddingBottom: 5,
  },
  messageThemLater: {
    fontSize: 12,
    top: 90, 
    left: 140,
    color: "#992b13",
    paddingBottom: 5,
  },
  avatarIcon: {
    bottom: 90,
    width: 80,
    height: 75,
    marginTop: 10,
  },
  likeButton: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    padding: 10,
  },
  dislikeButton: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    padding: 10,
  },
  likeIcon: {
    width: 30,
    height: 30,
  },
  dislikeIcon: {
    width: 30,
    height: 30,
  },
  yourMatch: {
    top: '7%',
    left: 100,
    fontSize: 40,
    letterSpacing: 0,
    color: Color.colorBrown,
    width: 231,
    fontWeight: "500",
  },
  textTypo1: {
    textAlign: "center",
    position: "absolute",
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F0DFCE',
  },
  icon: {
    width: 50,
    height: 50,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
    top: 10,
  },
});

export default Matches;



