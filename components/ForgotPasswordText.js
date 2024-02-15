import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPasswordText = () => {
  return <Text style={styles.forgotPassword}>{`Forgot password? `}</Text>;
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 213,
    height: 17,
  },
});

export default ForgotPasswordText;
