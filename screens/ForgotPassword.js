import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import axios from 'axios';
import { useState } from "react";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    // Check if newPassword and confirmPassword match
    try {
      const response = await axios.post('http://localhost:3305/reset-password', {
        username: username, // Make sure this matches the case expected by your server
        newPassword: newPassword
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming your API responds with a success message on password reset
      if (response.status === 200) {
        Alert.alert("Success", "Password has been reset successfully");
        navigation.goBack(); // or navigate to a different screen if needed
      } else {
        // Handle any other responses from your backend
        Alert.alert("Error", "Failed to reset password");
      }
    } catch (error) {
      console.error(error);
      // You can access error.response.data to get more details about the error from the server
      Alert.alert("Error", error.response ? error.response.data.message : "Failed to reset password");
    }
  };

  return (
    <LinearGradient
      style={[styles.ForgotPassword, styles.buttonShadowBox]}
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
      <Text style={styles.resetPass}>Reset Password</Text>
      <View style={[styles.inputBgParent1, styles.inputLayout]}>
        <View
          style={[styles.inputBg, styles.inputBorder]}
          onPress={() => navigation.goBack()}
        />

        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
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
          source={require("../assets/group-3.png")}
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
          source={require("../assets/vector2.png")}
        />
      </View>

      <Pressable
        style={[styles.vectorIconPreferences, styles.vectorPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.linkIcon, styles.iconLayout, {transform: [{rotate:'90deg'}] }] }
          contentFit="cover"
          source={require("../assets/chevrondown.png")}
        />
      </Pressable>

      <View style={styles.usernameCursor}>
        <TextInput
          style={[styles.username, styles.userTypo]}
          placeholder='Username'
          onChangeText={text => setUsername(text)} // Set the username state
          value={username}
        />
      </View>

      <View style={styles.dashiconsemailAltParent}>
        <TextInput
          style={[styles.password, styles.passwordTypo]}
          secureTextEntry={true}
          placeholder='New Password'
          onChangeText={text => setNewPassword(text)} // Set the new password state
          value={newPassword}
        />
      </View>

      <View style={styles.dashiconsemailAltParent}>
        <TextInput
          style={[styles.confirmPassword, styles.confirmPasswordTypo]}
          placeholder='Confirm New Password'
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)} // Set the confirm password state
          value={confirmPassword}
        />
      </View>

      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={handleResetPassword}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Reset Password</Text>
      </Pressable>
      <Image
        style={styles.screenShot20240212At930}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  vectorIconPreferences: {
    height: "3.98%",
    width: "7.81%",
    right: "46.25%",
    bottom: "1.73%",
    left: "5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    top: "6.5%",
    position: "absolute",
  },
  linkIcon: {
    height: "80%",
    width: "150%",
  },
  iconLayout: {
    maxHeight: "93%",
    maxWidth: "100%",
    overflow: "hidden",
  },
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
    zIndex: 1,
    top: 15,
    position: "absolute",
  },

  resetPass: {
    top: "22%",
    left: "10.6%",
    fontSize: 50,
    letterSpacing: 0,
    lineHeight: 100,
    fontWeight: "400",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  userTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontWeight: "600",
    zIndex: 1,
    top: 17,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontWeight: "600",
    zIndex: 1,
    top: 87,
    position: "absolute",
  },
  confirmPasswordTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontWeight: "600",
    zIndex: 1,
    top: 157,
    position: "absolute",
  },
  inputBgParent2: {
    top: 430,
  },
  inputBgParent1: {
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
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "-95%",
    position: "absolute",
  },
  confirmPassword: {
    left: "17%",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: "75%",
    position: "absolute",
  },
  inputBgParent: {
    top: 500,
  },
  username: {
    top: "17%",
    left: "17%",
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

  usernameCursorBox: {
    width: 20,
    height: 20,
    left: 0,
    top: "17%",
    position: "absolute",
  },

  usernameCursor: {
    top: 359,
    left: '6%',
    overflow: "show",
    zIndex: 1,
  },

  dashiconsemailAlt: {
    width: 20,
    height: 20,
    left: 0,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
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
    lineHeight: 35,
    fontWeight: "400",
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
    top: '10%',
    left: '37%',
    width: 100,
    height: 89,
    position: "absolute",
  },
  ForgotPassword: {
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

export default ForgotPassword;
