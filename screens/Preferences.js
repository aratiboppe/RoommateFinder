import React from 'react';
//import * as React from "react";

import { Pressable, Text, Switch, StyleSheet, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SelectList } from 'react-native-dropdown-select-list'

import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

import {useState} from 'react';

const Preferences = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [univerity, setUniversity] = useState('');
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

    

    <View style={styles.preferences}>

    <Text style={styles.preferences1}>Preferences</Text>

    <View style={styles.button} />


    <Pressable
        style={styles.findRoommate}
        onPress={() => navigation.navigate("Matches")}  
      >
        <Text style={[styles.findRoommate1, styles.findRoommate1Typo]}>Find My Roommate</Text>
      </Pressable>

      <TextInput 
        style={[styles.username, styles.usernameTypo]}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
    />

    <TextInput 
        style={[styles.univerity, styles.univerityTypo]}
        placeholder='University'
        value={univerity}
        onChangeText={setUniversity}
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
  username:{
    top: 110,
  },
  usernameTypo:{
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 20,
    left: 20,
    position: "absolute",
  },
  univerity:{
    top: 140,
  },
  univerityTypo:{
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 20,
    left: 20,
    position: "absolute",
  },
  startDate: {
    top: 170,
  },
  startDateTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 20,
    left: 20,
    position: "absolute",
  },
  maxBudget: {
    top: 200,
  },
  maxBudgetTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: 20,
    left: 20,
    position: "absolute",
  },
  smokerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smokerSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smokerText: {
    marginRight: 240,
    fontSize: 20,
  },
  drinkerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -25,
  },
  drinkerSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drinkerText: {
    marginRight: 240,
    fontSize: 20,
  },
  petsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  petsSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petsText: {
    marginRight: 265,
    fontSize: 20,
  },
  selectListContainer: {
    marginTop: 250,
    zIndex: 3,
  },
  selectList : {
    padding: 30,
  },
  preferences1: {
    top: 50,
    left: 95,
    fontSize: 35,
    letterSpacing: 0,
    color: Color.colorBrown,
    textAlign: "center",
    width: 231,
    height: 64,
    fontWeight: "500",
    position: "absolute",
  },
  button: {
    height: "7.31%",
    width: "53.13%",
    top: "88.41%",
    right: "23.44%",
    bottom: "4.28%",
    left: "23.44%",
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
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  
  preferences: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },

  findRoommate: {
    color: Color.white,
    fontWeight: "400",
    lineHeight: 20,
    left: "30%", 
    top: "91%",
    position: "absolute",
    zIndex: 1,
  },
  findRoommate1: {
    lineHeight: 20,
    zIndex: 1,
    position: "relative",
    fontSize: 20,
  },

  findRoommate1Typo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    zIndex: 1,
    position: "relative",
  },
});

export default Preferences;
