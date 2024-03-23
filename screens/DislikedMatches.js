import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Matches = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.matches}>
      <View style={styles.matchesChild} />
      <Text style={[styles.universityOfTexas, styles.messageThemLaterTypo]}>
        20, University of Texas at Dallas
      </Text>
      <Text style={[styles.janeDoe, styles.textTypo1]}>Jane Doe</Text>
      
      <Image
          style={[styles.avatarIcon1, styles.avatarIconLayout]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
      />




      <Pressable
        onPress={() => navigation.navigate("IndividualMessages")}
      >
       
     
        <View style={styles.button}>
        
        <Text style={[styles.message, styles.textTypo]}>Message</Text>
      </View>
      </Pressable>


      <Text style={[styles.yourMatch, styles.textTypo1]}>Liked Matches</Text>
      <View style={[styles.buttonWrapper, styles.buttonPosition1]}>
        <View style={[styles.button1, styles.buttonPosition]} />
      </View>
      <View style={[styles.buttonContainer, styles.buttonPosition1]}>
        <View style={[styles.button2, styles.buttonPosition]} />
      </View>
      
      



      <View style={styles.matchesItem} />
      <Pressable
        style={[styles.vector, styles.groupPosition]}
        onPress={() => navigation.navigate("DisikedMatches")}
      >
        <Image
          style={[styles.iconLike, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>

      <Pressable
        style={[styles.vectorPreferences, styles.groupPosition]}
        onPress={() => navigation.navigate("Preferences")}
      >
        <Image
          style={[styles.preferences, styles.preferencesLayout]}
          contentFit="cover"
          source={require("../assets/icons8-preferences-32.png")}
        />
      </Pressable>
      
      <Pressable
        style={[styles.likeIcon, styles.likeIconPosition]}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-33.png")}
        />
      </Pressable>


      <Pressable
        style={[styles.group, styles.groupPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>

      
      <Pressable
        style={[styles.vectorIcon, styles.vectorPosition]}
        onPress={() => navigation.navigate("Matches")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      
      {/* <Image
        style={[styles.vectorIcon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />  */}


      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />

      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIconLayout: {
    height: 45,
    position: "absolute",
  },
  avatarIcon1: {
    top: '16%',
    left: 15,
    width: 47,
  },

 
  textTypo: {
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.size_mini,
  },
  textTypo1: {
    textAlign: "center",
    position: "absolute",
  },
  buttonPosition1: {
    bottom: "29.06%",
    top: "64.17%",
    width: "12.5%",
    height: "6.77%",
    position: "absolute",
  },

  preferences: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",

  },

vectorPreferences: {
    left: "24%",
    right: "20%",
    bottom: "2.58%",
    width: "7%",
    height: "3%",
},
  buttonPosition: {
    left: "491%",
    bottom: "0%",
    right: "0%",
    top: "-725%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    vector: {
      left: "24.47%",
      right: "70.06%",
      bottom: "2.58%",
      width: "5.47%",
      height: "2.67%",
    },
    shadowColor: "rgba(136, 144, 194, 0.25)",
    borderRadius: Border.br_980xl,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
 
  likeIconPosition: {
    height: 20,
    top: '17.5%',
    left: '84%',
    position: "absolute",
  },
  matchesChild: {
    top: 102,
    left: 39,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLinen,
    width: 242,
    height: 312,
    position: "absolute",
  },
  universityOfTexas: {
    top: '20%',
    left: '18%',
    fontSize: 13,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  text: {
    top: 105,
    left: 121,
    width: 74,
    height: 16,
    textAlign: "center",
    position: "absolute",
    color: Color.colorBlack,
    letterSpacing: 1,
  },
  janeDoe: {
    top: '16%',
    left: '17%',
    fontSize: 20,
    fontWeight: "700",
    width: 107,
    height: 23,
    color: Color.colorBlack,
    letterSpacing: 1,
    textAlign: "center",
  },

  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "94.49%",
    right: "8.47%",
    bottom: "2.17%",
    left: "84.91%",
    position: "absolute",
  },
  
  avatarIcon: {
    top: 95,
    left: 1,
    width: 100,
    height: 95,
    position: "absolute",
  },
  message: {
    lineHeight: 12,
    height: 12,
    textAlign: "center",
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    top: 210,
    right: "25.5%",
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
  },
  yourMatch: {
    top: '7%',
    left: '25%',
    fontSize: 35,
    letterSpacing: 0,
    color: Color.colorBrown,
    width: 231,
    fontWeight: "500",
  },
  button1: {
    backgroundColor: "#2FD658",
    opacity: 0.3,
  },
  buttonWrapper: {
    right: "68.44%",
    left: "19.06%",
  },
  button2: {
    backgroundColor: Color.colorLimegreen,
  },

  icon: {
    height: "80%",
    width: "100%",
    maxHeight: "90%",
    maxWidth: "70%",
  },

  iconLike: {
    height: "100%",
    width: "100%",
    right: '30%',
    maxHeight: "90%",
    maxWidth: "70%",
  },

  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },

  buttonContainer: {
    right: "19.69%",
    left: "67.81%",
  },
  dislikeIcon: {
    left: 71,
    width: 21,
  },
  likeIcon: {
    left: 71,
    width: 21,
  },
  matchesItem: {
    left: 228,
    width: 19,
  },
  matchesInner: {
    top: 620,
    width: 390,
    height: 50,
    position: "absolute",
  },
  vectorPosition: {
    top: "94.3%",
    position: "absolute",
  },
  groupPosition: {
    top: "94.74%",
    position: "absolute",
  },

  group: {
    left: "4.22%",
    right: "91.09%",
    bottom: "2.44%",
    width: "7%",
    height: "4%",
  },
  vectorIcon: {
    height: "3.98%",
    width: "9.81%",
    right: "46.25%",
    bottom: "0.73%",
    left: "45.94%",
    maxHeight: "100%",
    maxWidth: "79%",
    overflow: "hidden",
  },
  iconCog: {
    top: 632,
    left: 330,
    width: 30,
    height: 25,
    position: "absolute",
  },
  vector: {
    left: "69.38%",
    top: "94.3%",
    right: "24.38%",
    bottom: "2.14%",
    maxHeight: "90%",
    maxWidth: "100%",
    position: "absolute",
  },
  matches: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default Matches;
