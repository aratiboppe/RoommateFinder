import React from 'react';
//import * as React from "react";
import { Image } from "expo-image";
import { Pressable, Text, Switch, StyleSheet, Alert, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import {useState} from 'react';
import axios from 'axios';

const Preferences = () => {

  const navigation = useNavigation();
  const [university, setUniversity] = useState('');
  const [username, setUsername] = useState('');
  const [startDate, setStartDate] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [roomType, setRoomType] = useState('');
  const [leaseDuration, setLeaseDuration] = useState('');
  const [housingType, setHousingType] = useState('');
  const [locality, setLocality] = useState('');
  const [gender, setGender] = useState('');

  const [selected, setSelected] = React.useState("");
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const [showSignOutAlert, setShowSignOutAlert] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const genderData = [
    {key:'1', value:'Female'},
    {key:'2', value:'Male'},
    {key:'3', value:'Other'},
    {key:'4', value:'No Preference'},
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

  const handleSignOut = () => {
    setShowSignOutAlert(true);
  };

  const handleConfirmSignOut = async () => {
    // Perform sign-out logic here
    // For demonstration, navigate to the start page
    try {
      const response = await axios.post('http://localhost:3001/signOut');
      navigation.navigate("Start");
    } catch(error){
      console.error('Error signing out:', error);
      Alert.alert('Error', 'Failed to sign out. Please try again later.');
    }
  };
  
  const handleSubmitPreferences = async () => {
    try {
      const response = await axios.post('http://localhost:3001/submit-preferences', {
        'Username': username,
        'University': university,
        'MoveDate': startDate, // Ensure this matches the expected format "MM/DD/YY"
        'Budget': maxBudget,
        'Gender': gender,
        'RoomType': roomType,
        'LeaseDuration': leaseDuration,
        'HousingType': housingType,
        'Locality': locality,
        'Smoking': isEnabled1, // Assuming true => "Yes", false => "No"
        'Drinking': isEnabled2,
        'Pets': isEnabled3,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      const matchData = response.data.data[1];


      console.log("data: ", matchData);
      //console.log("data [1]: ", response.data.data[1]);

      // Check if the backend found matches
      if (matchData) {
        console.log("Matches found:", matchData);
        // Optionally, handle the matches data further, e.g., display it in the UI
        // Navigate to matches screen or show matches
        navigation.navigate("Matches", { matches: matchData});
      } else {
        // Handle case where no matches are found or response is not as expected
        navigation.navigate("Matches", { matches: matchData });
        //console.log("No matches found or unexpected response:", data);
        alert("No matches found based on preferences.");
      }
    } catch (error) {
      // Log the error and show an alert
      console.error('Error submitting preferences:', error);
      alert("An error occurred while submitting preferences.");
    }
  };


  return (

    <View style={styles.preferences}>
    <Text style={styles.preferences1}>Preferences</Text>
    <View style={styles.button} />


    <Pressable
        style={styles.findRoommate}
        onPress={handleSubmitPreferences}  
      >
        <Text style={[styles.findRoommate1, styles.findRoommate1Typo]}>Find My Roommate</Text>
      </Pressable>

      <TextInput 
        style={[styles.username, styles.usernameTypo]}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"  // This prevents automatic capitalization

    />

    <TextInput 
        style={[styles.univerity, styles.univerityTypo]}
        placeholder='University'
        value={university}
        onChangeText={setUniversity}
    />

      <TextInput 
          style={[styles.startDate, styles.startDateTypo]}
          placeholder='Lease Start Date (YYYY-MM-DD)'
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

          setSelected={setGender} 
          data={genderData} 
          save="value"
          placeholder = {"Gender"}
        />

        <SelectList 

            setSelected={setRoomType} 
            data={roomTypeData} 
            save="value"
            placeholder = "Room Type"
            
        />

    
        <SelectList
            setSelected={setLeaseDuration} 
            placeholder="Lease Duration"
            data={leaseDurationData}
            save="value"
        />

        
        <SelectList
            placeholder="Housing Type"
            setSelected={setHousingType} 
            data={housingTypeData}
            save="value"
        />

        <SelectList
            setSelected={setLocality} 
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
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
        onPress={() => navigation.navigate("IndividualMessages")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chaticon.png")}
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
        style={[styles.vector, styles.groupPosition]}
        onPress={handleSignOut}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/exit.png")}
        />
      </Pressable>

      {showSignOutAlert && (
        Alert.alert(
          "Sign Out",
          "Are you sure you want to sign out?",
          [
            {
              text: "No",
              onPress: () => setShowSignOutAlert(false),
              style: "cancel",
            },
            { text: "Yes", onPress: handleConfirmSignOut },
          ],
          { cancelable: false }
        )
      )}

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
    backgroundColor: "F0DFCE",
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "89%",
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
    left: "69.38%",
    position: "absolute",
  },
  vectorIcon1Position: {
    top: "94.25%",
    position: "absolute",
  },
  
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
    fontSize: 18,
    top: -40,
    left: 10,
    textAlign: "center",
    lineHeight: 20,
    color: Color.white,
    position: "absolute",
    zIndex: 1,
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