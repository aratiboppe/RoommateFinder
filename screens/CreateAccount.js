import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.createAccount, styles.buttonShadowBox]}
      locations={[0, 0.53, 1]}
      colors={[
        "rgba(233, 130, 116, 0.81)",
        "#f0dfce",
        "rgba(245, 182, 121, 0.86)",
      ]}
    >
      <Image
        style={styles.screenShot20240208At307}
        contentFit="cover"
        source={require("../assets/screen-shot-20240208-at-307-1.png")}
      />
      <View style={[styles.inputBgParent, styles.inputLayout]}>
        <Pressable
          style={[styles.inputBg, styles.inputBorder]}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <TextInput 
          style={[styles.password, styles.signUpTypo]} 
          placeholder='Password'
        />
      </View>
      <View style={[styles.inputBgGroup, styles.inputLayout]}>
        <Pressable
          style={[styles.inputBg, styles.inputBorder]}
          onPress={() => navigation.goBack()}
        />
        <TextInput 
          style={[styles.username, styles.emailTypo]}
          placeholder='Username'
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <View style={styles.dashiconsemailAltParent}>
        <View style={styles.dashiconsemailAlt} />
        <Pressable
          style={[styles.inputBg2, styles.inputBorder]}
          onPress={() => navigation.goBack()}
        />
        <TextInput 
          style={[styles.email, styles.emailTypo]}
          placeholder='Email'
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        
      </View>
      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("SignInPage")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </Pressable>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/screen-shot-20240212-at-930-11.png")}
      />
      <Text style={styles.livinglink}>LivingLink</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonShadowBox: {
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  inputLayout: {
    height: 56,
    width: 272,
    left: 52,
    position: "absolute",
  },
  inputBorder: {
    borderColor: Color.colorLightgray,
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: 0,
    height: 56,
    width: 272,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  emailTypo: {
    width: 98,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 48,
    position: "absolute",
  },
  screenShot20240208At307: {
    top: -462,
    left: -563,
    width: 1404,
    height: 1477,
    position: "absolute",
  },
  inputBg: {
    top: 0,
    borderColor: Color.colorLightgray,
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  vectorIcon: {
    left: "4.41%",
    width: "7.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
    bottom: "32.14%",
    top: "32.14%",
    height: "35.71%",
  },
  password: {
    color: Color.colorDarkslategray,
    left: 48,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 16,
    position: "absolute",
  },
  inputBgParent: {
    top: 561,
  },
  username: {
    top: 16,
    width: 98,
  },
  vectorIcon1: {
    width: "7.68%",
    left: "4.04%",
    bottom: "32.14%",
    top: "32.14%",
    height: "35.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
  },
  inputBgGroup: {
    top: 475,
  },
  dashiconsemailAlt: {
    width: 20,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  inputBg2: {
    top: 34,
  },
  email: {
    top: 50,
  },
  vectorIcon2: {
    height: "22.22%",
    top: "57.78%",
    bottom: "20%",
    left: "4.41%",
    width: "7.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
  },
  dashiconsemailAltParent: {
    top: 359,
    height: 90,
    width: 272,
    left: 52,
    position: "absolute",
  },
  signUp: {
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    top: "81.77%",
    right: "25.27%",
    bottom: "10.96%",
    left: "24.6%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xl,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  screenShot20240212At930: {
    top: 99,
    left: 139,
    width: 97,
    height: 111,
    position: "absolute",
  },
  livinglink: {
    top: "29.06%",
    left: "5.61%",
    fontSize: FontSize.size_45xl,
    lineHeight: 41,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    position: "absolute",
  },
  createAccount: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 561,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default CreateAccount;
