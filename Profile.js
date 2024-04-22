//import * as React from "react";
//import React from 'react';
import { Text, StyleSheet, View, Switch, Pressable, TextInput} from "react-native";
import { Image } from "expo-image";
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import axios from "axios";
import React, { useEffect, useState } from 'react';

let smokeToggle = false;
let drinkToggle = false;
let petToggle = false;

const Profile = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [University, setUniversity] = useState('');
  const [Grade, setGrade] = useState('');
  const [MoveDate, setMoveDate] = useState('');
  const [Budget, setBudget] = useState('');
  const [Gender, setSelectedGender] = useState('');
  const [LeaseDuration, setLeaseDuration] = useState('');
  const [HousingType, setHousingType] = useState('');
  const [Locality, setLocality] = useState('');
  const [RoomType, setRoomType] = useState('');
  
  const [selected, setSelected] = React.useState("");
  const [isEnabled1, setIsEnabled1] = useState(smokeToggle); // Smoking
  const [isEnabled2, setIsEnabled2] = useState(drinkToggle); // Drinking
  const [isEnabled3, setIsEnabled3] = useState(petToggle); // Pets

  const [userStatus, setUserStatus] = useState(null);

  const toggleSwitch1 = () => setIsEnabled1(smokeToggle => !smokeToggle); // Smoking
  const toggleSwitch2 = () => setIsEnabled2(drinkToggle => !drinkToggle); // Drinking
  const toggleSwitch3 = () => setIsEnabled3(petToggle => !petToggle); // Pets

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


  // Checks the status of the users -> if new or existing
  useEffect(() => {
    console.log("CHECKING USER STATUS ON THE FRONTEND");
    // Fetch data from the database using Axios
    const checkStatus = async () => {
      console.log("This is the account status");
        try {
            console.log('entered try blck');
            const response = await axios.post("http://localhost:3001/userStatus");
            console.log('User status:', response.data.user);
            setUserStatus(response.data.user);
            if (response.data.user === 'new'){
              setIsEnabled1(false);
              setIsEnabled2(false);
              setIsEnabled3(false);
            }
        } catch (error) {
            console.error('Error fetching status:', error);
        } 
    };
    checkStatus();
}, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE SMOKE DATA
  useEffect(() => {
    console.log("IN SMOKE");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchSKFromDatabase = async () => {
        console.log("Smoking");
          try {
              const response = await axios.post("http://localhost:3001/smokeType");
              if (response.data) {
                  console.log("This is Response.Data: ", response.data);
                  console.log("The smoking: ", response.data.smoke.Smoking);

                  //Convert the Yes & No from the db to T & F for the switches
                  if (response.data.smoke.Smoking === 'No'){
                    smokeToggle = false;
                    setIsEnabled1(smokeToggle);
                    console.log('Smoke toggle: ', smokeToggle)
                  } else if (response.data.smoke.Smoking === 'Yes'){
                    smokeToggle = true;
                    setIsEnabled1(smokeToggle);
                    console.log('Smoke Toggle: ', smokeToggle)
                  } else{
                    console.log('Smoking data is undefined')
                  }
              }
          } catch (error) {
              console.error('Error fetching smoking status from database:', error);
          }
      };
      fetchSKFromDatabase();
    }
}, [userStatus]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // FETCH THE DRINKING DATA
  useEffect(() => {
    console.log("DRINK");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchDRFromDatabase = async () => {
        console.log("Drinking");
          try {
              const response = await axios.post("http://localhost:3001/drinkType");
              if (response.data) {
                  console.log("This is Response.Data", response.data);
                  console.log("The drinking", response.data.drink.Drinking);

                  //Convert the Yes & No from the db to T & F for the switches
                  if (response.data.drink.Drinking === 'No'){
                    drinkToggle = false;
                    setIsEnabled2(drinkToggle);
                    console.log('Drink toggle: ', drinkToggle)
                  } else if (response.data.drink.Drinking === 'Yes'){
                    drinkToggle = true;
                    setIsEnabled2(drinkToggle);
                    console.log('Drink Toggle: ', drinkToggle)
                  } else{
                    console.log('Drinking data is undefined')
                  }
              }
          } catch (error) {
              console.error('Error fetching drinking status from database:', error);
          }
      };
      fetchDRFromDatabase();
    }
}, [userStatus]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // FETCH PET DATA
  useEffect(() => {
    console.log("PET");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchPTFromDatabase = async () => {
        console.log("Pets");
          try {
              const response = await axios.post("http://localhost:3001/petType");
              if (response.data) {
                  console.log("This is Response.Data", response.data);
                  console.log("I am in the Pets", response.data.pets.Pets);

                  //Convert the Yes & No from the db to T & F for the switches
                  if (response.data.pets.Pets === 'No'){
                    petToggle = false;
                    setIsEnabled3(petToggle);
                    console.log('Pet toggle: ', petToggle)
                  } else if (response.data.pets.Pets === 'Yes'){
                    petToggle = true;
                    setIsEnabled3(petToggle);
                    console.log('pet Toggle: ', petToggle)
                  } else{
                    console.log('Pet data is undefined')
                  }
              }
          } catch (error) {
              console.error('Error fetching pet status from database:', error);
          }
      };
      fetchPTFromDatabase();
    }
}, [userStatus]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE NAME
  useEffect(() => {
    console.log("NAME");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchNMFromDatabase = async () => {
        console.log("Name");
          try {
              const response = await axios.post("http://localhost:3001/nameType");
              if (response.data) {
                  console.log("In the name", response.data.name.Name);
                  setName(response.data.name.Name); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching name from database:', error);
          }
      };
      fetchNMFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE EMAIL
  useEffect(() => {
    console.log("EMAIL");

    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchELFromDatabase = async () => {
        console.log("Email");
          try {
              const response = await axios.post("http://localhost:3001/emailType");
              if (response.data) {
                  console.log("In the email", response.data.email.Email);
                  setEmail(response.data.email.Email); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching email from database:', error);
          }
      };
      fetchELFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE UNIVERSITY
  useEffect(() => {
    console.log("UNIVERSITY");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchUNIFromDatabase = async () => {
        console.log("University");
          try {
              const response = await axios.post("http://localhost:3001/uniType");
              if (response.data) {
                  console.log("In the university", response.data.university.University);
                  setUniversity(response.data.university.University); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching University from database:', error);
          }
      };
      fetchUNIFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE GRADE
  useEffect(() => {
    console.log("GRADE");
    if (userStatus === 'exist'){
     // Fetch data from the database using Axios
      const fetchGDFromDatabase = async () => {
      console.log("Grade");
        try {
            const response = await axios.post("http://localhost:3001/gradeType");
            if (response.data) {
                console.log("In the grade", response.data.grade.Grade);
                setGrade(response.data.grade.Grade); // Assuming the response contains the housing type
            }
        } catch (error) {
            console.error('Error fetching grade from database:', error);
        }
      };
      fetchGDFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE GENDER
  useEffect(() => {
    console.log("GENDER");
    if (userStatus === 'exist'){
        // Fetch data from the database using Axios
        const fetchGRFromDatabase = async () => {
          console.log("Gender");
            try {
                const response = await axios.post("http://localhost:3001/genderType");
                if (response.data) {
                    console.log("In the Gender", response.data.gender.Gender);
                    setSelectedGender(response.data.gender.Gender); // Assuming the response contains the housing type
                }
            } catch (error) {
                console.error('Error fetching gdenr from database:', error);
            } 
        };
        fetchGRFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE MOVE DATE
  useEffect(() => {
    console.log("MOVE DATE");
    if (userStatus === 'exist'){
      const fetchMDFromDatabase = async () => {
        console.log("Move Date");
          try {
              const response = await axios.post("http://localhost:3001/movedateType");
              if (response.data) {
                  console.log("In the move date", response.data.moveDate.MoveDate);
                  setMoveDate(response.data.moveDate.MoveDate); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching move date from database:', error);
          }
      };
      fetchMDFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE LEASE DURATION
  useEffect(() => {
    console.log("LEASE DURATION");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchLDFromDatabase = async () => {
        console.log("Lease");
          try {
              const response = await axios.post("http://localhost:3001/leasedurationType");
              if (response.data) {
                  console.log("In the lease", response.data.leaseDuration.LeaseDuration);
                  setLeaseDuration(response.data.leaseDuration.LeaseDuration); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching lease from database:', error);
          }
      };
      fetchLDFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE HOUSING
  useEffect(() => {
    console.log("HOUSING TYPE");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchHTFromDatabase = async () => {
        console.log("Housing Type");
          try {
              const response = await axios.post("http://localhost:3001/housingType");
              if (response.data) {
                  console.log("In housing Type:", response.data);
                  setHousingType(response.data.housingType.HousingType); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching housing from database:', error);
          }
      };
      fetchHTFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE LOCALITY
  useEffect(() => {
    console.log("LOCALITY");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchLsFromDatabase = async () => {
        console.log("Locality");
          try {
              const response = await axios.post("http://localhost:3001/localityType");
              if (response.data) {
                  console.log("In the locality", response.data.locality.Locality);
                  setLocality(response.data.locality.Locality); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching locality from database:', error);
          }
      };
      fetchLsFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE ROOMTYPE
  useEffect(() => {
    console.log("ROOM TYPE");    
    if (userStatus === 'exist'){
         // Fetch data from the database using Axios
      const fetchRTFromDatabase = async () => {
        console.log("Room Type");
          try {
              const response = await axios.post("http://localhost:3001/roomType");
              if (response.data) {
                  console.log("In the room type", response.data.roomType.RoomType);
                  setRoomType(response.data.roomType.RoomType); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching room Type from database:', error);
          }
      };
      fetchRTFromDatabase();
    }
}, [userStatus]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //THIS IS TO FETCH THE BUDGET
  useEffect(() => {
    console.log("BUDGET");
    if (userStatus === 'exist'){
      // Fetch data from the database using Axios
      const fetchBFromDatabase = async () => {
        console.log("Budget");
          try {
              const response = await axios.post("http://localhost:3001/budgetType");
              if (response.data) {
                  console.log("In the budget", response.data.budget.Budget);
                  setBudget(response.data.budget.Budget); // Assuming the response contains the housing type
              }
          } catch (error) {
              console.error('Error fetching budget from database:', error);
          }
      };
      fetchBFromDatabase();
    }
}, [userStatus]);

  const handleSaveProfile = async () => {  
    try {
      const response = await axios.post("http://localhost:3001/saveProfile", {
          Name: Name,
          Email: Email,
          University: University,
          Grade: Grade,
          Gender: Gender,
          MoveDate: MoveDate,
          LeaseDuration: LeaseDuration,
          HousingType: HousingType,
          Locality: Locality,
          RoomType: RoomType,
          Budget: Budget,
          Smoking: isEnabled1, //? "Yes" : "No",
          Drinking: isEnabled2, //? "Yes" : "No",
          Pets: isEnabled3, //? "Yes" : "No",
      });

      console.log("State for Smoking: ", smokeToggle);
      console.log("State for Drinking: ", drinkToggle);
      console.log("State for Pets: ", petToggle);

      // Set the Smoke Toggle
      if(isEnabled1 === true){
        smokeToggle = true;
      } else{
        smokeToggle = false;
      }

      // Set the Drink Toggle
      if(isEnabled2 === true){
        drinkToggle = true;
      } else{
        drinkToggle = false;
      }

      // Set the Pet Toggle
      if(isEnabled3 === true){
        petToggle = true;
      } else {
        petToggle = false;
      }

      console.log("State for Smoking: ", smokeToggle);
      console.log("State for Drinking: ", drinkToggle);
      console.log("State for Pet:", petToggle);
        
      console.log(response.data);
      console.log("*************************************************************", response.data.user);
      // Navigate to Matches screen upon successful profile save
      if (response.data.user === 'exists'){
        navigation.navigate('Matches');
      } else{
        navigation.navigate('Preferences');
      }        
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  }

  return (
    <View style={styles.profile}>
      <Text style={styles.yourProfile}>Your Profile</Text>

      <Pressable
          style={styles.button}
          onPress = {handleSaveProfile}
      >
        <Text style={styles.saveProfile}>Save Profile</Text>
      </Pressable>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/profile-circle.png")}
      />
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <TextInput 
          style={[styles.name, styles.nameTypo]}
          placeholder={(Name || 'Name')}
          //placeholder = 'Name'
          value={Name}
          onChangeText={setName}
      />
      <TextInput 
        style={[styles.email, styles.emailTypo]}
        placeholder={(Email || 'Email')}
        //placeholder = 'Email'
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={[styles.university, styles.universityTypo]}
        placeholder={(University || 'University')}
        //placeholder = 'University'
        value={University}
        onChangeText={setUniversity}
      />
      <TextInput 
        style={[styles.collegeYear, styles.collegeYearTypo]}
        placeholder={(Grade || 'College Year')}
        //placeholder = 'College Year'
        value={Grade}
        onChangeText={setGrade}
      />
      <TextInput 
          style={[styles.startDate, styles.startDateTypo]}
          placeholder={(MoveDate || 'Move Date')}
          //placeholder = 'Move Date'
          value={MoveDate}
          onChangeText={setMoveDate}
      />
      <TextInput 
          style={[styles.maxBudget, styles.maxBudgetTypo]}
          placeholder={(Budget || 'Budget')}
          //placeholder = 'Budget'
          value={Budget}
          onChangeText={setBudget}
      />

      <View style={styles.selectListContainer}>
        <SelectList 
          setSelected={(val) => setSelectedGender(val)} 
          data={genderData}
          save="value"
          placeholder = {(Gender || 'Gender')}
          //placeholder = 'Gender'
        />

        <SelectList 
            setSelected={(val) => setRoomType(val)} 
            data={roomTypeData} 
            save="value"
            placeholder = {(RoomType || 'Room Type')}
            //placeholder = 'Room Type'
        />

        <SelectList
            setSelected={(val) => setLeaseDuration(val)} 
            placeholder={(LeaseDuration || 'Lease Duration')}
            //placeholder = 'Lease Duration'
            data={leaseDurationData}
            save="value"
        />


        <SelectList
            placeholder={(HousingType || 'Housing Type')}
            //placeholder = 'Housing Type'
            setSelected={(val) => setHousingType(val)} 
            data={housingTypeData}
            save="value"
        />

        <SelectList
            setSelected={(val) => setLocality(val)} 
            data={localityData}
            save="value"
            placeholder= {(Locality || 'Locality')}
            //placeholder = 'Locality'
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
                checked={isEnabled1}
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
  university: {
    top: 300,
  },
  universityTypo: {
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
    top: 300,
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
    top: "90%", // Adjusted top value
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
    width: 100,
    height: 100,
    position: "absolute",
  },
  profileChild: {
    top: 220,
    left: 235,
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