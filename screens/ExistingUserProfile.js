//import * as React from "react";
import React from 'react';
import {useState} from 'react';
import { Text, StyleSheet, Switch, View, Pressable, TextInput} from "react-native";
import { Image } from "expo-image";
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
const ExistingUserProfile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [univerity, setUniversity] = useState('');
  const [collegeYear, setCollegeYear] = useState('');
  const [startDate, setStartDate] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  
  const [selected, setSelected] = React.useState("");

  const [isEnabled1, setIsEnabled1] = useState(false);

  const [isEnabled2, setIsEnabled2] = useState(false);

  const [isEnabled3, setIsEnabled3] = useState(false);

  const [isEnabled4, setIsEnabled4] = useState(false);



  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  const genderData = [

    {key:'1', value:'Female'},

    {key:'2', value:'Male'},

    {key:'3', value:'No Preference'},

  ]


  const roomTypeData = [

    {key:'1', value:'Single'},

    {key:'2', value:'Double'},

    {key:'3', value:'Studio'},

    {key:'4', value:'No Preference'},

  ]



  const leaseDurationData = [

    {key:'1', value:'Month-to-month'},

    {key:'2', value:'6 months'},

    {key:'3', value:'12 months'},

    {key:'4', value:'No Preference'},

  ]



  const housingTypeData = [

    {key:'1', value:'Dorm'},

    {key:'2', value:'Apartment'},

    {key:'3', value:'House'},

    {key:'4', value:'No Preference'},

  ]



  const localityData = [

    {key:'1', value:'On-campus'},

    {key:'2', value:'Near-campus'},

    {key:'3', value:'Off-campus'},

    {key:'4', value:'No Preference'},

  ]

  return (
    <View style={styles.profile}>
      <Text style={styles.yourProfile}>Your Profile</Text>
      
      
    
  
      
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.saveProfile}>Edit Profile</Text>
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
      
      <View style={styles.selectListContainer}>

        <SelectList 

          setSelected={(val) => setSelected(val)} 
          data={genderData} 
          save="value"
          placeholder = "Gender"

        />

        <SelectList 

            setSelected={(val) => setSelected(val)} 
            data={roomTypeData} 
            save="value"
            placeholder = "Room Type"
            
        />


        <SelectList
            setSelected={(val) => setSelected(val)} 
            placeholder="Lease Duration"
            data={leaseDurationData}
            save="value"
        />


        <SelectList
            placeholder="Housing Type"
            setSelected={(val) => setSelected(val)} 
            data={housingTypeData}
            save="value"
        />

        <SelectList
            setSelected={(val) => setSelected(val)} 
            data={localityData}
            save="value"
            placeholder="Locality"
        />



      </View>

        <View style={styles.smokerContainer}>

          <View style={styles.smokerSwitchContainer}>

            <Text style={styles.smokerText}>Smoking</Text>

              <Switch

                trackColor={{false: '#808080', true: '#00ff00'}}

                thumbColor={isEnabled1 ? '#ffffff' : '#f4f3f4'}

                ios_backgroundColor="#3e3e3e"

                onValueChange={toggleSwitch1}

                value={isEnabled1}

              />

            </View>

        </View>



        <View style={styles.drinkerContainer}>

          <View style={styles.drinkerSwitchContainer}>

            <Text style={styles.drinkerText}>Drinking</Text>

              <Switch

                trackColor={{false: '#808080', true: '#00ff00'}}
                thumbColor={isEnabled2 ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
        </View>
        
        <View style={styles.petsContainer}>

          <View style={styles.petsSwitchContainer}>

          <Text style={styles.petsText}>Pets</Text>

          <Switch

          trackColor={{false: '#808080', true: '#00ff00'}}
          thumbColor={isEnabled3 ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
        </View>
      </View>

      <View style={styles.optContainer}>

          <View style={styles.optSwitchContainer}>

          <Text style={styles.optText}>Opt Out</Text>

          <Switch

          trackColor={{false: '#808080', true: '#00ff00'}}
          thumbColor={isEnabled4 ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
        </View>
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
        style={[styles.vector, styles.groupPosition]}
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
        onPress={() => navigation.navigate("ExistingUserProfile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      
      <Pressable
        style={[styles.vectorIcon, styles.vectorPosition]}
        onPress={() => navigation.navigate("Matches")}
      >
        <Image
          style={[styles.linkIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>

      <Pressable
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
        onPress={() => navigation.navigate("IndividualMessages")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chaticon.png")}
        />
      </Pressable>


    </View>
    

  );
};

const styles = StyleSheet.create({
  vectorPreferences: {
    left: "24%",
    right: "20%",
    bottom: "2.58%",
    width: "7%",
    height: "3%",
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
  vector: {
    left: "69.38%",
    top: "94.3%",
    right: "24.38%",
    bottom: "2.14%",
    width: "6.25%",
    height: "3.57%",
    position: "absolute",
  },
  icon: {
    height: "80%",
    width: "110%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconLayout: {
    maxHeight: "93%",
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
  linkIcon: {
    height: "80%",
    width: "150%",
  },
  vectorIcon: {
    height: "3.98%",
    width: "7.81%",
    right: "46.25%",
    bottom: "1.73%",
    left: "45.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    top: "94.3%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "5%",
    width: "6.75%",
    top: "94.49%",
    right: "5.47%",
    bottom: "2.17%",
    left: "87%",
    position: "absolute",
  },
  vectorIcon1Position: {
    top: "94.25%",
    position: "absolute",
  },
  name: {
    top: 200,
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    top: 250,
    position: "absolute",
  },
  email: {
    top: 150,
  }, 
  emailTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    top: 275,
    position: "absolute",
  },
  univerity: {
    top: 300,
  },
  univerityTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    position: "absolute",
  },
  collegeYear: {
    top: 325,
  },
  collegeYearTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    position: "absolute",
  },
  startDate: {
    top: 350,
  },
  startDateTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    position: "absolute",
  },
  maxBudget: {
    top: 375,
  },
  maxBudgetTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 15,
    left: 20,
    position: "absolute",
  },
  smokerContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smokerSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smokerText: {
    marginRight: 240,
    fontSize: 15,
  },
  drinkerContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drinkerSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drinkerText: {
    marginRight: 240,
    fontSize: 15,
  },
  petsContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petsSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petsText: {
    marginRight: 265,
    fontSize: 15,
  },
  optContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optText: {
    marginRight: 240,
    fontSize: 15,
  },
  selectListContainer: {
    marginTop: 400,
    zIndex: 3,
  },
  selectList : {
    padding: 30,
  },
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

  yourProfile: {
    top: 50,
    position: "absolute",
    left: "23%",
    fontSize: 45,
    letterSpacing: 0,
    color: Color.colorBrown,
    width: 231,
    fontWeight: "500",
  },
  inputBg: { //name
    top: 271,
    paddingLeft: 10,
    left: 38,
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
  optOut: {
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
    width: "40%",
    top: "86%", // Adjusted top value
    left: "30%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorBrown,
    shadowColor: "rgba(136, 144, 194, 0.25)",
    
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,

  },
  buttonOpt: {
    height: 50, // Adjusted height value
    width: "40%",
    top: "85%", // Adjusted top value
    left: "55%",
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
    left: 160,
    width: 107,
    height: 101,
    position: "absolute",
  },
  profileChild: {
    top: 220,
    left: 240,
    width: 20,
    height: 18,
    position: "absolute",
  },
  profile: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    left: "0%",
  },
});

export default ExistingUserProfile;
