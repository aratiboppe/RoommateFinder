import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Start1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start2}>
      <Image
        style={styles.pexelsCarlosMontelara598276Icon}
        contentFit="cover"
        source={require("../assets/pexelscarlosmontelara5982764-2.png")}
      />
      <View style={styles.buttonShadowBox} />
      <Pressable
        style={styles.buttonShadowBox}
        onPress={() => navigation.navigate("SignInPage")}
      />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={[styles.createAnAccount, styles.signIn1Typo]}>
          Create an Account
        </Text>
      </Pressable>
      <Pressable
        style={styles.signIn}
        onPress={() => navigation.navigate("SignInPage")}
      >
        <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
      </Pressable>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/screen-shot-20240212-at-930-1.png")}
      />
      <Text style={styles.livinglink}>LivingLink</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonShadowBox: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_980xl,
    width: "50.13%",
    height: "7.27%",
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  signTypo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "600",
  },
  pexelsCarlosMontelara598276Icon: {
    top: -152,
    left: -381,
    width: 1588,
    height: 812,
    position: "absolute",
  },
  button: {
    top: "76.6%",
    right: "25.06%",
    bottom: "16.13%",
    left: "24.81%",
    display: "none",
  },
  button1: {
    top: "81.82%",
    right: "24.87%",
    bottom: "10.91%",
    left: "25%",
  },
  signUp: {
    height: "3.08%",
    width: "48%",
    top: "93.4%",
    left: "29.06%",
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    lineHeight: 16,
    position: "absolute",
  },
  signIn1: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  signIn: {
    left: 126,
    top: 469,
    position: "absolute",
  },
  livinglink: {
    height: "5.04%",
    width: "88.81%",
    top: "39.75%",
    left: "5.63%",
    fontSize: 48,
    letterSpacing: 0,
    lineHeight: 41,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  screenShot20240212At930: {
    top: 93,
    left: 93,
    width: 134,
    height: 150,
    position: "absolute",
  },
  start1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 561,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Start1;
