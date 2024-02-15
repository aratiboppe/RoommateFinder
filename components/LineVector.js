import * as React from "react";
import { StyleSheet, View } from "react-native";

const LineVector = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: "#8f8f8f",
    borderWidth: 1,
    width: 28,
    height: 1,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
});

export default LineVector;
