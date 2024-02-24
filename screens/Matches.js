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
      <Text style={[styles.messageThemLater, styles.messageThemLaterTypo]}>
        Message them later
      </Text>
      <Image
          style={[styles.avatarIcon1, styles.avatarIconLayout]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
      />




      <View style={styles.button}>
        <Text style={[styles.message, styles.textTypo]}>Message</Text>
      </View>
      <Text style={[styles.yourMatch, styles.textTypo1]}>Your Match!</Text>
      <View style={[styles.buttonWrapper, styles.buttonPosition1]}>
        <View style={[styles.button1, styles.buttonPosition]} />
      </View>
      <View style={[styles.buttonContainer, styles.buttonPosition1]}>
        <View style={[styles.button2, styles.buttonPosition]} />
      </View>
      <Image
        style={[styles.likeIcon, styles.likeIconPosition]}
        contentFit="cover"
        source={require("../assets/like.png")}
      />
      
      <Image
        style={[styles.matchesItem, styles.dislikeIconPosition]}
        contentFit="cover"
        source={require("../assets/group-32.png")}
      />
      <Image
        style={styles.matchesInner}
        contentFit="cover"
        source={require("../assets/group-10.png")}

        
      />
      <Image
        style={styles.iconCog}
        contentFit="cover"
        source={require("../assets/-icon-cog.png")}

      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
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
    top: 95,
    left: 15,
    width: 47,
  },
  messageThemLaterTypo: {
    height: 24,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    letterSpacing: 1,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.size_mini,
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  buttonPosition1: {
    bottom: "29.06%",
    top: "64.17%",
    width: "12.5%",
    height: "6.77%",
    position: "absolute",
  },
  buttonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
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
    shadowColor: "rgba(136, 144, 194, 0.25)",
    borderRadius: Border.br_980xl,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  likeIconPosition: {
    height: 20,
    top: 170,
    left: 40,
    position: "absolute",
  },
  dislikeIconPosition: {
    height: 20,
    top: 170,
    left: 310,
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
    top: 125,
    left: 75,
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
    fontFamily: FontFamily.sFPro,
    position: "absolute",
    color: Color.colorBlack,
    letterSpacing: 1,
  },
  janeDoe: {
    top: 95,
    left: 70,
    fontSize: 20,
    fontWeight: "700",
    width: 107,
    height: 23,
    color: Color.colorBlack,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
  },
  messageThemLater: {
    top: 210,
    left: 110,
    fontSize: 12,
    color: "#992b13",
    width: 150,
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
    height: 10,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    top: "23%",
    right: "25.5%",
    bottom: "16.61%",
    left: "24.38%",
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
    top: 24,
    left: 70,
    fontSize: 40,
    letterSpacing: 0,
    color: Color.colorBrown,
    width: 231,
    fontWeight: "500",
  },
  button1: {
    backgroundColor: Color.colorLightcoral,
  },
  buttonWrapper: {
    right: "68.44%",
    left: "19.06%",
  },
  button2: {
    backgroundColor: Color.colorLimegreen,
  },
  buttonContainer: {
    right: "19.69%",
    left: "67.81%",
  },
  likeIcon: {
    left: 71,
    width: 21,
  },
  dislikeIcon: {
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
  iconCog: {
    top: 632,
    left: 330,
    width: 30,
    height: 25,
    position: "absolute",
  },
  icon: {
    maxWidth: "95%",
    maxHeight: "95%",
    height: "100s%",
    overflow: "hidden",
    width: "100%",
    top: 5,
    left: 3,
  },
  vector: {
    left: "69.38%",
    top: "94.3%",
    right: "24.38%",
    bottom: "2.14%",
    width: "6.25%",
    height: "3.57%",
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
