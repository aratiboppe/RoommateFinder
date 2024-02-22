import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const IndividualMessages = () => {
  return (
    <View style={styles.individualMessages}>
      <Text style={styles.janeDoe}>Jane Doe</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.thankYouThat, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
        <Image
          style={[styles.avatarIcon, styles.groupViewLayout]}
          contentFit="cover"
          //source={require("../assets/avatar1.png")}
        />
        <Image
          style={[styles.avatarIcon1, styles.avatarIconPosition]}
          contentFit="cover"
          //source={require("../assets/avatar1.png")}
        />
        <Image
          style={[styles.avatarIcon2, styles.avatarIconPosition]}
          contentFit="cover"
          //source={require("../assets/avatar1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.thankYouThat1, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.thankYouThat1, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.thankYouThat, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
        <Image
          style={[styles.avatarIcon, styles.groupViewLayout]}
          contentFit="cover"
          //source={require("../assets/avatar1.png")}
        />
      </View>
      <Image
        style={[styles.individualMessagesChild, styles.groupViewLayout]}
        contentFit="cover"
        //source={require("../assets/group-103.png")}
      />
      <View style={styles.uilthumbsUp} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        //source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.fluentsettings16RegularIcon}
        contentFit="cover"
        //source={require("../assets/-icon-cog.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 37,
    width: 189,
    left: 57,
    position: "absolute",
  },
  thankLayout: {
    height: 18,
    width: 179,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  groupViewLayout: {
    height: 45,
    position: "absolute",
  },
  avatarIconPosition: {
    left: 246,
    height: 45,
    width: 47,
    position: "absolute",
  },
  janeDoe: {
    top: 24,
    left: 42,
    fontSize: FontSize.size_14xl,
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
    height: 64,
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  groupChild: {
    top: 3,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    height: 37,
    width: 189,
    left: 57,
  },
  thankYouThat: {
    top: 14,
    left: 67,
  },
  avatarIcon: {
    width: 47,
    height: 45,
    left: 0,
    top: 0,
  },
  avatarIcon1: {
    top: 68,
  },
  avatarIcon2: {
    top: 214,
  },
  rectangleParent: {
    top: 152,
    width: 293,
    height: 259,
    left: 18,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
    height: 37,
    width: 189,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  thankYouThat1: {
    top: 11,
    left: 10,
  },
  rectangleGroup: {
    top: 223,
    height: 37,
    width: 189,
    left: 57,
  },
  rectangleContainer: {
    top: 369,
    height: 37,
    width: 189,
    left: 57,
  },
  groupView: {
    top: 288,
    width: 246,
    left: 18,
  },
  individualMessagesChild: {
    top: 516,
    width: 320,
    left: 0,
  },
  uilthumbsUp: {
    top: 534,
    left: 259,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.57%",
    width: "6.25%",
    top: "93.94%",
    right: "23.13%",
    bottom: "2.5%",
    left: "70.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentsettings16RegularIcon: {
    top: 526,
    left: 286,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  individualMessages: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    width: "100%",
    height: 561,
    overflow: "hidden",
  },
});

export default IndividualMessages;
