import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Text style={[styles.name, styles.ageTypo]}>Name:</Text>
      <Text style={styles.yourProfile}>Your Profile</Text>
      <Pressable
        style={[styles.inputBg, styles.inputLayout1]}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.email, styles.ageTypo]}>Email:</Text>
      <Text style={[styles.phoneNumber, styles.ageTypo]}>Phone Number:</Text>
      <Pressable
        style={[styles.inputBg1, styles.inputLayout]}
        onPress={() => navigation.goBack()}
      />
      <Pressable
        style={[styles.inputBg2, styles.inputLayout1]}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.university, styles.ageTypo]}>University:</Text>
      <Pressable
        style={[styles.inputBg3, styles.inputLayout1]}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.age, styles.ageTypo]}>Age:</Text>
      <Pressable
        style={[styles.inputBg4, styles.inputLayout]}
        onPress={() => navigation.goBack()}
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
    fontFamily: FontFamily.sFPro,
    left: 42,
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
    height: 31,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: 42,
    position: "absolute",
  },
  name: {
    top: 194,
  },
  yourProfile: {
    top: 24,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    fontWeight: "500",
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
    height: 64,
    fontFamily: FontFamily.sFPro,
    left: 42,
    position: "absolute",
  },
  inputBg: {
    top: 210,
    left: 43,
  },
  email: {
    top: 359,
  },
  phoneNumber: {
    top: 413,
  },
  inputBg1: {
    top: 429,
  },
  inputBg2: {
    top: 375,
    left: 42,
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  university: {
    top: 305,
  },
  inputBg3: {
    top: 321,
    left: 42,
    height: 32,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  age: {
    top: 248,
  },
  inputBg4: {
    top: 266,
  },
  saveProfile: {
    fontSize: FontSize.size_mini,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "left",
  },
  button: {
    height: "6.77%",
    width: "47.5%",
    top: "85.56%",
    right: "26.25%",
    bottom: "7.66%",
    left: "26.25%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xl,
    position: "absolute",
    overflow: "hidden",
  },
  avatarIcon: {
    top: 81,
    left: 107,
    width: 107,
    height: 101,
    position: "absolute",
  },
  profileChild: {
    top: 166,
    left: 184,
    width: 18,
    height: 16,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    width: "100%",
    height: 561,
    overflow: "hidden",
  },
});

export default Profile;
