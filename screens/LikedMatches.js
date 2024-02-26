import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LikedMatches = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.likedMatches}>
      <Text style={styles.likedMatches1}>Liked Matches</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Pressable
          style={[styles.groupChild, styles.groupChildLayout]}
          onPress={() => navigation.navigate("IndividualMessages")}
        />
        <Text style={[styles.thankYouThat, styles.janeDoeClr]}>
          Thank you! That was very helpful!
        </Text>
        <Text style={[styles.janeDoe, styles.janeDoeClr]}>Jane Doe</Text>
        <Image
          style={[styles.avatarIcon, styles.avatarIconLayout]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
      </View>
      <Image
        style={[styles.likedMatchesChild, styles.avatarIconLayout]}
        contentFit="cover"
        source={require("../assets/group-101.png")}
      />
      <View style={styles.button} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-33.png")}
        />
      </Pressable>
      <Image
        style={styles.iconCog}
        contentFit="cover"
        source={require("../assets/-icon-cog.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 69,
    width: 297,
    position: "absolute",
  },
  janeDoeClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  avatarIconLayout: {
    height: 45,
    position: "absolute",
  },
  likedMatches1: {
    top: 24,
    left: 42,
    fontSize: FontSize.size_14xl,
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.colorBrown,
    width: 231,
    height: 64,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLinen,
    left: 0,
  },
  thankYouThat: {
    top: 35,
    left: 71,
    fontSize: FontSize.size_7xs,
    lineHeight: 18,
    textAlign: "left",
    width: 121,
    height: 18,
  },
  janeDoe: {
    top: 20,
    left: 60,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    fontWeight: "700",
    width: 76,
    height: 11,
    textAlign: "center",
  },
  avatarIcon: {
    top: 13,
    left: 12,
    width: 47,
  },
  rectangleParent: {
    top: 88,
    left: 14,
  },
  likedMatchesChild: {
    top: 516,
    width: 320,
    left: 0,
  },
  button: {
    height: "5.88%",
    width: "10.31%",
    top: "18.89%",
    right: "6.88%",
    bottom: "75.22%",
    left: "82.81%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorLimegreen,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 273,
    top: 115,
    width: 16,
    height: 16,
    position: "absolute",
  },
  iconCog: {
    top: 528,
    left: 283,
    width: 25,
    height: 25,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.57%",
    width: "6.25%",
    top: "94.3%",
    right: "24.38%",
    bottom: "2.14%",
    left: "69.38%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  likedMatches: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default LikedMatches;
