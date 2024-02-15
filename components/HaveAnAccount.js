import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HaveAnAccount = () => {
  return (
    <Text style={styles.haveAnAccountContainer}>
      <Text style={styles.haveAnAccountContainer1}>
        <Text style={styles.haveAnAccount}>Have an account?</Text> Sign in
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  haveAnAccount: {
    textDecoration: "underline",
  },
  haveAnAccountContainer1: {
    width: "100%",
  },
  haveAnAccountContainer: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 222,
    height: 17,
  },
});

export default HaveAnAccount;
