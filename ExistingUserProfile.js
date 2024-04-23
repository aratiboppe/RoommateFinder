//import * as React from "react";
import React, { useEffect, useState } from 'react';
//import {useState} from 'react';
import { Text, StyleSheet, Switch, View, Pressable, TextInput, Alert} from "react-native";
import { Image } from "expo-image";
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import axios from 'axios';

let optToggle = false;

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
    const [isEnabled4, setIsEnabled4] = useState(optToggle);

    const [userStatus, setUserStatus] = useState(null);
    const [showSignOutAlert, setShowSignOutAlert] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => {
        setIsEnabled4(optToggle => !optToggle);
        if(!optToggle){
            handleOptOut();
        }
        else{
            handleOptIn();
        }
    };

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

    // DISPLAY EXISTING USER PROFILE INFORMATION
    const [profile,setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const response = await axios.get('http://localhost:3001/get-profile');
                console.log("RESPONSE HAS HAPPENED", response);
                setProfile(response.data.profile);
                console.log(response.data.profile)
            } catch (error){
                console.error("Error Fetching the profile: ", error);
            }
        };

        fetchProfile();
    },[]);

    useEffect(() => {
        console.log("CHECKING USER STATUS");
        // Fetch data from the database using Axios
        const checkStatus = async () => {
            console.log("This is the account status");
            try {
                console.log('entered try block');
                const response = await axios.post("http://localhost:3001/userStatus");
                console.log('Entered');
                console.log('This is the user status: ', response.data.user);
                setUserStatus(response.data.user);
                if (response.data.user === 'new'){
                    setIsEnabled4(false)
                }
            } catch (error) {
                console.error('Error fetching status:', error);
            } 
        };
        checkStatus();
    }, []);

    useEffect(() => {
        console.log("OPT OUT");
        if (userStatus === 'exist'){
            // Fetch data from the database using Axios
            const fetchOPTFromDatabase = async () => {
            console.log("Opting Out");
                try {
                    const response = await axios.post("http://localhost:3001/OptToggle");
                    if (response.data) {
                        console.log("This is Response.Data: ", response.data);
                        console.log("In the opt out: ", response.data.opt.isHidden);
    
                        //Convert the Yes & No from the db to T & F for the switches
                        if (response.data.opt.isHidden === 0){
                            optToggle = false;
                            setIsEnabled4(optToggle);
                            console.log('Opt toggle: ', optToggle)
                        } else if (response.data.opt.isHidden === 1){
                            optToggle = true;
                            setIsEnabled4(optToggle);
                            console.log('Opt Toggle: ', optToggle)
                        } else{
                            console.log('Opt data is undefined')
                        }
                    }
                } catch (error) {
                    console.error('Error fetching opt status from database:', error);
                }
            };
            fetchOPTFromDatabase();
        }
    }, [userStatus]);

    //OPT OUT BUTTON 
    const handleOptOut = async () => {
        try {
            const response = await axios.post('http://localhost:3001/optOut');
            Alert.alert('Opt Out', 'You have opted out successfully.');

            console.log('**optOUT**', optToggle)
            console.log('isEnabled', isEnabled4);
            if(isEnabled4 === false){
                optToggle = true;
            } 
            console.log('**optOUT**', optToggle)

        } catch(error){
            console.error('Error opting out:', error);
            Alert.alert('Error', 'Failed to opt out. Please try again later.');
        }
    }

    //OPT IN BUTTON
    const handleOptIn = async () => {
        try {
            const response = await axios.post('http://localhost:3001/optIn');
            Alert.alert('Opt In', 'You have opted back in successfully.');
            
            console.log('**optIN**', optToggle)
            if(isEnabled4 === true){
                optToggle = false;
            } 
            console.log('**optIN**', optToggle)

        } catch(error){
            console.error('Error opting in:', error);
            Alert.alert('Error', 'Failed to opt in. Please try again later.');
        }
    }

return (
    <View style={styles.profile}>
    <Text style={styles.yourProfile}>Your Profile</Text>
    {profile && (
        <View>
            <Text style={styles.nameTypo}>{`Name: ${profile.Name}`}</Text>
            <Text style={styles.emailTypo}>{`Email: ${profile.Email}`}</Text>
            <Text style={styles.universityTypo}>{`University: ${profile.University}`}</Text>
            <Text style={styles.collegeYearTypo}>{`Grade: ${profile.Grade}`}</Text>

            <Text style={styles.startDateTypo}>{`Start Date: ${profile.MoveDate}`}</Text>
            <Text style={styles.maxBudgetTypo}>{`Max Budget: ${profile.Budget}`}</Text>

            <Text style={styles.GenderTypo}>{`Gender: ${profile.Gender}`}</Text>
            <Text style={styles.RoomTypeTypo}>{`Room Type: ${profile.RoomType}`}</Text>
            <Text style={styles.LeaseDurationTypo}>{`Lease Duration: ${profile.LeaseDuration}`}</Text>
            <Text style={styles.HousingTypeTypo}>{`Housing Type: ${profile.HousingType}`}</Text>

            <Text style={styles.LocalityTypo}>{`Locality: ${profile.Locality}`}</Text>
            <Text style={styles.SmokingTypo}>{`Smoking: ${profile.Smoking}`}</Text>
            <Text style={styles.DrinkingTypo}>{`Drinking: ${profile.Drinking}`}</Text>
            <Text style={styles.PetsTypo}>{`Pets: ${profile.Pets}`}</Text>                
        </View> 
    )}
    <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
    >
        <Text style={styles.saveProfile}>Edit Profile</Text>
    </Pressable>
    
<View style={styles.optContainer}>
    <View style={styles.optSwitchContainer}>
    <Text style={styles.optText}>Opt Out</Text>
    <Switch

    trackColor={{false: '#808080', true: '#00f00'}}
    thumbColor={isEnabled4 ? '#ffffff' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch4}
    value={isEnabled4}
    />
    </View>
</View>

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
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
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
        height: "4%",
        width: "6.5%",
        top: "94.49%",
        right: "5.47%",
        bottom: "2.17%",
        left: "87%",
        position: "absolute",
    },
    vectorIcon1Position: {
        top: "94.5%",
        position: "absolute",
    },
    name: {
        top: 200,
    },
    nameTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 275,
        position: "absolute",
    },
    email: {
        top: 150,
    }, 
    emailTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 302,
        position: "absolute",
    },
    university: {
        top: 300,
    },
    universityTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 329,
        position: "absolute",
    },
    collegeYear: {
        top: 325,
    },
    collegeYearTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 356,
        position: "absolute",
    },
    startDate: {
        top: 350,
    },
    startDateTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 383,
        position: "absolute",
    },
    maxBudget: {
        top: 375,
    },
    maxBudgetTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 410,
        position: "absolute",
    },
    GenderTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 437,
        position: "absolute",
    },
    RoomTypeTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 464,
        position: "absolute",
    },
    LeaseDurationTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 491,
        position: "absolute",
    },
    HousingTypeTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 518,
        position: "absolute",
    },
    LocalityTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 545,
        position: "absolute",
    },
    SmokingTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 572,
        position: "absolute",
    },
    DrinkingTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 599,
        position: "absolute",
    },
    PetsTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: 18,
        left: 40,
        top: 626,
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
        fontSize: 20,
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
        fontSize: 20,
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
        fontSize: 20,
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
    optContainer: {
        flex: 0.1,
        top: 675,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optSwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optText: {
        marginRight: 235,
        fontSize: 18,
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
        top: "83%", // Adjusted top value
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
        height:0, // Adjusted height value
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
export default ExistingUserProfile;