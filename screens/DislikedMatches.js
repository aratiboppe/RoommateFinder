import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DislikedMatches = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dislikedMatches}>
      <Text style={styles.dislikedMatches1}>Disliked Matches</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
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
        style={[styles.dislikedMatchesChild, styles.avatarIconLayout]}
        contentFit="cover"
        source={require("../assets/group-102.png")}
      />
      <Pressable
        style={styles.like}
        onPress={() => navigation.navigate("DislikedMatches")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/like1.png")}
        />
      </Pressable>
      <View style={styles.button} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  janeDoeClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  avatarIconLayout: {
    height: 45,
    position: "absolute",
  },
  dislikedMatches1: {
    top: 29,
    left: 36,
    fontSize: FontSize.size_14xl,
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.colorBrown,
    width: 249,
    height: 71,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 67,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLinen,
    width: 297,
    height: 69,
    position: "absolute",
  },
  thankYouThat: {
    top: 35,
    left: 138,
    fontSize: FontSize.size_7xs,
    lineHeight: 18,
    textAlign: "left",
    width: 121,
    height: 18,
  },
  janeDoe: {
    top: 20,
    left: 127,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    fontWeight: "700",
    width: 76,
    height: 11,
    textAlign: "center",
  },
  avatarIcon: {
    top: 13,
    left: 79,
    width: 47,
  },
  rectangleParent: {
    top: 88,
    left: -53,
    width: 364,
    height: 179,
    position: "absolute",
  },
  dislikedMatchesChild: {
    top: 516,
    left: 0,
    width: 320,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  like: {
    left: 277,
    top: 116,
    width: 16,
    height: 14,
    position: "absolute",
  },
  button: {
    height: "6.24%",
    width: "11.25%",
    top: "18.72%",
    right: "5.31%",
    bottom: "75.04%",
    left: "83.44%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorLightcoral,
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
  vectorIcon: {
    height: "3.57%",
    width: "6.25%",
    top: "94.3%",
    right: "23.13%",
    bottom: "2.14%",
    left: "70.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dislikedMatches: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default DislikedMatches;
