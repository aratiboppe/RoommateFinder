import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start1}>
      <Image
        style={styles.pexelsCarlosMontelara598276Icon}
        contentFit="cover"
        source={require("../assets/pexelscarlosmontelara5982764-2.png")}
      />
      <View style={[styles.button, styles.buttonShadowBox]} />
      <Pressable
        style={styles.buttonShadowBox}
        onPress={() => navigation.navigate("SignInPage")}
      />

      <Pressable
        style={styles.signIn}
        onPress={() => navigation.navigate("SignInPage")}
      >
        <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={[styles.createAnAccount, styles.signIn1Typo]}>
          Create an Account
        </Text>
      </Pressable>
      
      <Text style={styles.livinglink}>LivingLink</Text>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/screen-shot-20240212-at-930-1.png")}
      />
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
    left: "24.8%",
    bottom: "16.13%",
    right: "25.07%",
    top: "76.6%",
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
  signIn1Typo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "600",
  },
  pexelsCarlosMontelara598276Icon: {
    top: 0,
    left: -394,
    width: 1588,
    position: "absolute",
    height: 812,
  },
  button: {
    display: "none",
  },
  createAnAccount: {
    height: "150%",
    width: "100%",
    fontSize: FontSize.size_base,
    lineHeight: 16,
  },
  signUp: {
    left: "30%",
    top: "87.56%",
    position: "absolute",
  },
  signIn1: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  signIn: {
    left: 154,
    top: 525,
    position: "absolute",
  },
  livinglink: {
    top: "40%",
    left: "5.6%",
    fontSize: FontSize.size_45xl,
    letterSpacing: 0,
    lineHeight: 100,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  screenShot20240212At930: {
    top: 125,
    left: 93,
    width: 183,
    height: 150,
    position: "absolute",
  },
  start1: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 812,
  },
});

export default Start;
