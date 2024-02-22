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
    <View style={[styles.inputBgParent1, styles.inputLayout]}>
      <View
        style={[styles.inputBg, styles.inputBorder]}
        onPress={() => navigation.goBack()}
      />
      <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
      />
    </View>

    <View style={[styles.inputBgParent, styles.inputLayout]}>
        <View
          style={[styles.inputBg, styles.inputBorder]}
          onPress={() => navigation.goBack()}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
    </View>
    

    <View style={[styles.inputBgParent2, styles.inputLayout]}>
        <View
            style={[styles.inputBg, styles.inputBorder]}
            onPress={() => navigation.goBack()}
        />
        <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
        />
      </View>

      <View style={[styles.inputBgParent2, styles.inputLayout]}>
        <TextInput 
            style={[styles.username, styles.emailTypo]}
            placeholder='Username'
        />
      </View>
      
      <View style={[styles.inputBgParent, styles.inputLayout]}>
        <TextInput 
            style={[styles.password, styles.emailTypo]}
            placeholder='Password'
        />
      </View>
      
      <View style={[styles.inputBgParent1, styles.inputLayout]}>
        <TextInput 
            style={[styles.confirmPassword, styles.emailTypo]}
            placeholder='Confirm Password'
        />
      </View>

      

      <View style={styles.dashiconsemailAltParent}>
        <View style={styles.dashiconsemailAlt}></View>
        <View
          style={[styles.inputBg, styles.inputBorder]}
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
        onPress={() => navigation.navigate("Matches")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Create Account</Text>
      </Pressable>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/screen-shot-20240212-at-930-11.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonShadowBox: {
    overflow: "hidden",
    shadowOpacity: 0,
    shadowOffset: {
      width: 0,
      height: 2,
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
    top: "-60%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
    top: "-95%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpTypo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    zIndex: 1,
    top: 15,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    zIndex: 1,
    left: 48,
    position: "absolute",
  },
  inputBgParent2:{
    top: 430,
  },
  inputBgParent1:{
    top: 570,
  },
  screenShot20240208At307: {
    top: -462,
    left: -563,
    width: 1404,
    height: 1477,
    position: "absolute",
  },
  inputBg: {
    top: -70,
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
    left: "17%",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "-95%",
    position: "absolute",
  },
  confirmPassword: {
    left: "17%",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "-95%",
    position: "absolute",
  },
  inputBgParent: {
    top: 500,
  },
  username: {
    top: "-95%",
    left: "17%",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  vectorIcon1: {
    width: "7.32%",
    left: "4.41%",
    bottom: "25.14%",
    top: "25.14%",
    height: "35.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "88.27%",
  },
  inputBgGroup: {
    top: 430,
  },
  dashiconsemailAlt: {
    width: 20,
    height: 20,
    left: 0,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  email: {
    top: "-60%",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  vectorIcon2: {
    height: "22.22%",
    top: "60.78%",
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
    fontWeight: "400",
    fontFamily: FontFamily.sFPro,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    zIndex: 1,
  },
  button: {
    height: "7.27%",
    width: "50.13%",
    top: "85.77%",
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
  createAccount: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 2,
    borderColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 560,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    shadowOpacity: 1,
  },
});

export default CreateAccount;
