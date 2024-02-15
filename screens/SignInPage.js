import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SignInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInPage}>
      <Image
        style={styles.screenShot20240208At307}
        contentFit="cover"
        source={require("../assets/screen-shot-20240208-at-307-1.png")}
      />
      <Pressable
        style={[styles.inputBg, styles.inputLayout]}
        onPress={() => navigation.goBack()}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.inputBg1, styles.inputLayout]}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.oiperson} />
      <View style={[styles.button, styles.buttonShadowBox]}>
        <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
      </View>
      <View style={[styles.button1, styles.buttonShadowBox]}>
        <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
      </View>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/screen-shot-20240212-at-930-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 56,
    width: 272,
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_xs,
    left: 57,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "18.13%",
    right: "76.53%",
    width: "5.33%",
    height: "3%",
    position: "absolute",
    overflow: "hidden",
  },
  usernameTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 114,
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_4xl,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_980xl,
    left: "24.8%",
    bottom: "16.13%",
    right: "25.07%",
    top: "85.6%",
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
    color: Color.white,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  screenShot20240208At307: {
    top: -469,
    left: -567,
    width: 1404,
    height: 1477,
    position: "absolute",
  },
  inputBg: {
    top: 450,
  },
  vectorIcon: {
    top: "70%",
    bottom: "35.71%",
  },
  inputBg1: {
    top: 370,
  },
  username: {
    top: 385,
  },
  password: {
    top: 465,
  },
  vectorIcon1: {
    top: "58%",
    bottom: "48.77%",
  },
  oiperson: {
    left: 68,
    width: 20,
    height: 20,
    top: 396,
    position: "absolute",
    overflow: "hidden",
  },
  signIn: {
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    fontWeight: "400",
    lineHeight: 20,
  },
  button: {
    right: "23.47%",
    left: "26.4%",
  },
  signIn1: {
    fontFamily: FontFamily.sFPro,
    lineHeight: 20,
  },

  signIn1Typo: {
    textAlign: "left",
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
  },
  
  button1: {
    right: "25.07%",
    left: "24.8%",
  },

  
  screenShot20240212At930: {
    top: 103,
    left: 139,
    width: 97,
    height: 111,
    position: "absolute",
  },
  signInPage: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
});

export default SignInPage;
