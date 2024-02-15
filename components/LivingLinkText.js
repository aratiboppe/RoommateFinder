import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LivingLinkText = () => {
  return <Text style={styles.livinglink}>LivingLink</Text>;
};

const styles = StyleSheet.create({
  livinglink: {
    fontSize: FontSize.size_45xl,
    letterSpacing: 0,
    lineHeight: 41,
    fontWeight: "700",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "center",
  },
});

export default LivingLinkText;
