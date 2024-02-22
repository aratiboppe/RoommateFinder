import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Matches = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.matches}>
      <View style={styles.matchesChild} />
      <Text style={[styles.universityOfTexas, styles.messageThemLaterTypo]}>
        University of Texas at Dallas
      </Text>
      <Text style={[styles.text, styles.textTypo]}>20</Text>
      <Text style={[styles.janeDoe, styles.textTypo1]}>Jane Doe</Text>
      <Text style={[styles.messageThemLater, styles.messageThemLaterTypo]}>
        Message them later
      </Text>
     <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("IndividualMessages")}  //change this to actual page later
      >
        <Text style={[styles.message, styles.textTypo]}>Message</Text>
      </Pressable>
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
        //source={require("../assets/like.png")}
      />
      <Image
        style={[styles.matchesItem, styles.likeIconPosition]}
        contentFit="cover"
        //source={require("../assets/group-32.png")}
      />
      <Image
        style={styles.matchesInner}
        contentFit="cover"
        //source={require("../assets/group-10.png")}
      />
      <Image
        style={styles.iconCog}
        contentFit="cover"
        //source={require("../assets/-icon-cog.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          //source={require("../assets/vector3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  messageThemLaterTypo: {
    height: 24,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    letterSpacing: 1,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
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
    height: 18,
    top: 370,
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
    top: 299,
    left: 68,
    fontSize: 13,
    width: 179,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  text: {
    top: 273,
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
    top: 239,
    left: 107,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    width: 107,
    height: 23,
    color: Color.colorBlack,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
  },
  messageThemLater: {
    top: 478,
    left: 88,
    fontSize: FontSize.dropMenuMenu_size,
    textDecoration: "underline",
    color: "#992b13",
    width: 139,
  },
  avatarIcon: {
    top: 132,
    left: 110,
    width: 100,
    height: 92,
    position: "absolute",
  },
  message: {
    lineHeight: 15,
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "left",
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    top: "76.11%",
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
    left: 42,
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    color: Color.colorBrown,
    width: 231,
    height: 64,
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
  matchesItem: {
    left: 228,
    width: 19,
  },
  matchesInner: {
    top: 516,
    left: 0,
    width: 320,
    height: 45,
    position: "absolute",
  },
  iconCog: {
    top: 527,
    left: 281,
    width: 25,
    height: 25,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default Matches;
