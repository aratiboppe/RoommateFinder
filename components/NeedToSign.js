import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NeedToSign = () => {
  return <Text style={styles.needToSign}>Need to sign up?</Text>;
};

const styles = StyleSheet.create({
  needToSign: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 154,
    height: 17,
  },
});

export default NeedToSign;
