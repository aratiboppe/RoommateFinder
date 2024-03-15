//import * as React from "react";
import React, {useState} from 'react';
import { Text, Switch, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'


import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Preferences = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState("");
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

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
        style={styles.findMyRoommateContainer}
        onPress={() => navigation.navigate("Matches")}
      >
      <Text style={styles.findMyRoommate}>Find my Roommate</Text>
      </Pressable>

      <View style={styles.selectListContainer}>
        <SelectList
            setSelected={(val) => setSelected(val)} 
            data={roomTypeData} 
            save="value"
            
        />
      
        <SelectList
            setSelected={(val) => setSelected(val)} 
            data={leaseDurationData}
            save="value"
            label="Lease Duration"
        />
        
        <SelectList
            setSelected={(val) => setSelected(val)} 
            data={housingTypeData}
            save="value"
            label="Housing Type"
        />

        <SelectList
            setSelected={(val) => setSelected(val)} 
            data={localityData}
            save="value"
            label="Locality"
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
  },
  drinkerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drinkerSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drinkerText: {
    marginRight: 240,
  },
  petsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petsSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petsText: {
    marginRight: 265,
  },
  selectListContainer: {
    marginTop: 75,
  },
  preferences1: {
    top: 24,
    left: 75,
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
  findMyRoommate: {
    top: "91%",
    left: "33%",
    lineHeight: 15,
    fontWeight: "600",
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  findMyRoommateContainer: {
    left: 125,
    top: 607,
    position: "absolute",
  },
  preferences: {
    backgroundColor: '#F0DFCE',
    flex: 1,
    height: 561,
    overflow: "hidden",
    width: "100%",
  },
});

export default Preferences;
