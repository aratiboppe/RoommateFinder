import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const IndividualMessages = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.individualMessages}>
      <Text style={styles.janeDoe}>Jane Doe</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.thankYouThat, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
        <Image
          style={[styles.avatarIcon, styles.groupViewLayout]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
        <Image
          style={[styles.avatarIcon1, styles.avatarIconPosition]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
        <Image
          style={[styles.avatarIcon2, styles.avatarIconPosition]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.thankYouThat1, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.thankYouThat1, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.thankYouThat, styles.thankLayout]}>
          Thank you! That was very helpful!
        </Text>
        <Image
          style={[styles.avatarIcon, styles.groupViewLayout]}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
      </View>
     
      <Pressable
        style={[styles.vectorPreferences, styles.groupPosition]}
        onPress={() => navigation.navigate("Preferences")}
      >
        <Image
          style={[styles.preferences, styles.preferencesLayout]}
          contentFit="cover"
          source={require("../assets/icons8-preferences-32.png")}
        />
      </Pressable>
      
      <Pressable
        style={[styles.likeIcon, styles.likeIconPosition]}
        onPress={() => navigation.navigate("LikedMatches")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>


      <Pressable
        style={[styles.group, styles.groupPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>

       {/* <Pressable
        style={[styles.vectorIcon, styles.vectorPosition]}
        onPress={() => navigation.navigate("Matches")}
      > */}
      <Image
        style={[styles.vectorIcon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      {/* </Pressable> */}

      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />

      <View style={styles.uilthumbsUp} />
      
      <Image
        style={styles.fluentsettings16RegularIcon}
        contentFit="cover"
        source={require("../assets/-icon-cog.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 37,
    width: 189,
    left: 57,
    position: "absolute",
  },
  thankLayout: {
    height: 18,
    width: 179,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },

  vectorPreferences: {
    left: "24%",
    right: "20%",
    bottom: "2.58%",
    width: "7%",
    height: "3%",
},

vectorMatches: {
  left: "50%",
  right: "20%",
  bottom: "15.58%",
  width: "8%",
  height: "3%",
},
matchesPosition: {
    top: "40.74%",
    position: "absolute",
 
},
groupPosition: {
  top: "94.74%",
  position: "absolute",
},
preferences: {
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",

},
likeIconPosition: {
  height: 20,
  top: 635,
  left: 260,
  position: "absolute",
},

likeIcon: {
  left: 71,
  width: 21,
},

icon: {
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
},
iconLayout: {
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
},

group: {
  left: "4.22%",
  right: "91.09%",
  bottom: "2.44%",
  width: "7%",
  height: "4%",
},


  groupViewLayout: {
    height: 45,
    position: "absolute",
  },
  avatarIconPosition: {
    left: 246,
    height: 45,
    width: 47,
    position: "absolute",
  },
  janeDoe: {
    top: 50,
    left: 70,
    fontSize: 50,
    letterSpacing: 0,
    fontWeight: "300",
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
    height: 64,
    position: "absolute",
  },
  groupChild: {
    top: 3,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    height: 37,
    width: 189,
    left: 57,
  },
  thankYouThat: {
    top: 14,
    left: 67,
  },
  avatarIcon: {
    width: 47,
    height: 45,
    left: 0,
    top: 0,
  },
  avatarIcon1: {
    top: 68,
  },
  avatarIcon2: {
    top: 214,
  },
  rectangleParent: {
    top: 152,
    width: 293,
    height: 259,
    left: 18,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
    height: 37,
    width: 189,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  thankYouThat1: {
    top: 11,
    left: 10,
  },
  rectangleGroup: {
    top: 223,
    height: 37,
    width: 189,
    left: 57,
  },
  rectangleContainer: {
    top: 369,
    height: 37,
    width: 189,
    left: 57,
  },
  groupView: {
    top: 288,
    width: 246,
    left: 18,
  },

  individualMessagesChild: {
    top: 516,
    width: 320,
    left: 0,
  },
  uilthumbsUp: {
    top: 534,
    left: 259,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.57%",
    width: "7%",
    top: "94.5%",
    bottom: "2.5%",
    left: "45.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    zIndex: 1,
  },

  fluentsettings16RegularIcon: {
    top: 627,
    left: 330,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  individualMessages: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    width: "100%",
    height: 561,
    overflow: "hidden",
  },
});

export default IndividualMessages;
