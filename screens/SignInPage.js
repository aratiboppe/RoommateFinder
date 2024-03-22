import { Image as ExpoImage} from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";
import { Alert } from 'react-native';
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { Image, StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import axios from 'axios';

  const SignInPage = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3305/signin', {
        Username: Username,
        Password: Password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200 && response.data.message === 'Sign-In Successful') {
        Alert.alert("Login Status", "Logged in successfully");
        navigation.navigate("Matches");
      } else {
        Alert.alert("Login Status", "Invalid login credentials");
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("Login Error", error.response ? error.response.data.message : "An error occurred during login");
    }
  };  

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
        source={require("../assets/group-3.png")}
      />
      <Pressable
        style={[styles.inputBg1, styles.inputLayout]}
      />
      <TextInput 
          style={[styles.username, styles.usernameTypo]}
          placeholder='Username'
          value={Username}
          onChangeText={setUsername}
      />
      <TextInput 
          style={[styles.password, styles.usernameTypo]}
          secureTextEntry={true}
          placeholder='Password'
          value={Password}
          onChangeText={setPassword} // Make sure to update the state

      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
  
      {/* <View style={[styles.button1, styles.buttonShadowBox]}>
        <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
      </View> */}

    <View style={[styles.button, styles.buttonShadowBox]} />
      <Pressable
        style={styles.buttonShadowBox}
        onPress={handleSignIn} 
      />

      <Pressable
        style={styles.signIn}
        onPress={() => navigation.navigate("Matches")}  //change this to actual page later
      >
        <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPassword")}  //change this to actual page later
      >
        <Text style={[styles.fpass, styles.fpass1]}>Forgot Password?</Text>
      </Pressable>

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
    top: "49.5%",
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
    top: "41%",
    bottom: "48.77%",
   
  },
  oiperson: {
    left: '20%',
    width: 20,
    height: 20,
    top: 396,
    position: "absolute",
    overflow: "hidden",
  },
  signIn: {
    color: Color.white,
    fontWeight: "400",
    lineHeight: 20,
    left: "42%", 
    top: "88%",
    position: "absolute",
  },
  button: {
    right: "23.47%",
    left: "26.4%",
  },

  
  signIn1: {
    lineHeight: 20,
    zIndex: 1,
    position: "relative",
    fontSize: 20,
  },

  signIn1Typo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    zIndex: 1,
    position: "relative",
  },
  
  button1: {
    right: "25.07%",
    left: "24.8%",
  },

  fpass: {
    top: 880,
  },

  fpass1: {
    
    color: Color.white,
    letterSpacing: 0,
    fontSize: FontSize.size_10xl,
    left: "36%",
    
    
  },
  
  screenShot20240212At930: {
    top: '15%',
    left: '37%',
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
