import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

 

  return (
    <View style={styles.profile}>
      <Text style={[styles.name, styles.ageTypo]}>Name:</Text>
      <Text style={styles.yourProfile}>Your Profile</Text>
      <TextInput
        style={[styles.inputBg, styles.inputLayout1]}
        placeholder= ""
      />
      <Text style={[styles.email, styles.ageTypo]}>Email:</Text>
      <Text style={[styles.phoneNumber, styles.ageTypo]}>Phone Number:</Text>
      <TextInput
        style={[styles.inputBg1, styles.inputLayout]}
        placeholder=""
      />
      <TextInput
        style={[styles.inputBg2, styles.inputLayout1]}
        placeholder=""
      />
      <Text style={[styles.university, styles.ageTypo]}>University:</Text>
      <TextInput
        style={[styles.inputBg3, styles.inputLayout1]}
        placeholder=""
      />
    
  
      <Text style={[styles.age, styles.ageTypo]}>Age:</Text>
      <TextInput
        style={[styles.inputBg4, styles.inputLayout]}
        placeholder=""
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Matches")}
      >
        <Text style={styles.saveProfile}>Save Profile</Text>
      </Pressable>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/avatar2.png")}
      />
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ageTypo: {
    height: 22,
    width: 232,
    color: Color.colorBrown_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 43,
    position: "absolute",
  },
  inputLayout1: {
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  inputLayout: {
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: 38,
    position: "absolute",
  },
  name: {
    top: 365,
  },
  yourProfile: {
    top: 50,
    fontSize: FontSize.size_45xl,
    letterSpacing: 0,
    fontWeight: "200",
    color: Color.colorBrown,
    position: "absolute",
    left: "10%",
  },
  inputBg: { //name
    top: 271,
    paddingLeft: 10,
    left: 38,
  },
  email: {
    top: 420,
  },
  phoneNumber: {
    top: 475,
  },
  inputBg1: { //phone
    top: 490,
    paddingLeft: 10,
  },
  inputBg2: {  //email
    paddingLeft: 10,
    top: 436,
    left: 38,
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  university: {
    top: 310,
  },
  inputBg3: { //university
    top: 382,
    paddingLeft: 10,
    left: 38,
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  age: {
    top: 252,
  },
  inputBg4: { //age one
    top: 327,
    paddingLeft: 10,
  },
  saveProfile: {
    fontSize: FontSize.size_xl,
    top: 15,
    textAlign: "center",
    lineHeight: 20,
    color: Color.white,
    position: "absolute",
    zIndex: 1,

  },
  button: {
    height: 50, // Adjusted height value
    width: "47.5%",
    top: "85%", // Adjusted top value
    left: "20%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,

  },
  avatarIcon: {
    top: 135,
    left: 107,
    width: 107,
    height: 101,
    position: "absolute",
  },
  profileChild: {
    top: 220,
    left: 184,
    width: 18,
    height: 16,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    left: "5%",
  },
});

export default Profile;
