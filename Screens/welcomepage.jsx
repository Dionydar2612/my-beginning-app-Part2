import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from '@react-navigation/native';



const BackgroundComponent = () => {
  //const navigation = useNavigation();

  const handlePress = () => {
    //navigation.navigate('choose'); // Replace 'NextScreen' with the name of your target screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("C:\Users\sakna\GeoseryServer\assets\Welcome.png")} 
        style={styles.backgroundImage}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btc} >Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>
            Already have an account ? {" "}
            <Text style={styles.registerButtonTextHighlight} >
              Login Up
            </Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableArea: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: 406,
    height: 910,
    resizeMode: 'cover',
    top: 0,
    left: -4,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    //top: -30,
    backgroundColor: "#C6EBB6",
    borderRadius: 10,
    marginTop: 650,
    width: 300,
    left: 60,
  },
  btc: {
    fontSize: 18, left: 0, top: 0, color: "#000000", fontWeight: "bold"
  },
  registerButton: {
    alignSelf: "center",
    marginTop: -20,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#7C808D",
    top: 50,
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: "#FF2222",
    fontWeight: "500",
  },
});

export default BackgroundComponent;
