//import * as React from "react";
import React from 'react';
import {useState} from 'react';
import { Text, StyleSheet, Switch, View, Pressable, TextInput} from "react-native";
import { Image } from "expo-image";
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
const Profile = () => {
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



  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

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
        onPress={() => navigation.navigate("Preferences")}
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
      <TextInput 
          style={[styles.name, styles.nameTypo]}
          placeholder='Name'
          value={name}
          onChangeText={setName}
      />
      <TextInput 
        style={[styles.email, styles.emailTypo]}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={[styles.univerity, styles.univerityTypo]}
        placeholder='University'
        value={univerity}
        onChangeText={setUniversity}
      />
      <TextInput 
        style={[styles.collegeYear, styles.collegeYearTypo]}
        placeholder='College Year'
        value={collegeYear}
        onChangeText={setCollegeYear}
      />
      <TextInput 
          style={[styles.startDate, styles.startDateTypo]}
          placeholder='Lease Start Date'
          value={startDate}
          onChangeText={setStartDate}
      />
      <TextInput 
          style={[styles.maxBudget, styles.maxBudgetTypo]}
          placeholder='Max Budget'
          value={maxBudget}
          onChangeText={setMaxBudget}
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


    </View>
    

  );
};

const styles = StyleSheet.create({
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
    flex: 0.5,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -85,
  },
  petsSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petsText: {
    marginRight: 265,
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
  button: {
    height: 50, // Adjusted height value
    width: "47.5%",
    top: "85%", // Adjusted top value
    left: "27%",
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

export default Profile;
