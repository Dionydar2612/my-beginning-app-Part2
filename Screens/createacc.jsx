import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function App() {
  const handlePress = () => {
    Alert.alert(
      'Your account has been successfully created!',
      'Please proceed with login.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
           //navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setcPassword] = React.useState("");
  const [name, setname] = React.useState("");
  //const navigation = useNavigation();

  const [passwordIsVisible, setPasswordIsVisible] =
    React.useState(false);
  const [cpasswordIsVisible, setcPasswordIsVisible] =
    React.useState(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handlePressChack = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Please re-enter again.');
    } else if (!name.trim() || !email.trim()) {
      Alert.alert('Please enter all required information');
    } else {
      handlePress();
    }
  };
  const updateSubmitButtonState = () => {
    setIsSubmitDisabled(password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Image
            style={styles.frame2608156}
            source={require('C:\Users\sakna\GeoseryServer\assets\header.png')}
          />
          <Text style={styles.title}>Create account</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                updateSubmitButtonState();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="user" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="name"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setname(text);
                updateSubmitButtonState();
              }}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordIsVisible}
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setPassword(text);
                updateSubmitButtonState();
              }}
              value={password}
            />
            <TouchableOpacity
              style={styles.passwordVisibleButton}
              onPress={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              <Feather
                name={passwordIsVisible ? "eye" : "eye-off"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!cpasswordIsVisible}
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setcPassword(text);
                updateSubmitButtonState();
              }}
              value={confirmPassword}
            />
            <TouchableOpacity
              style={styles.cpasswordVisibleButton}
              onPress={() => setcPasswordIsVisible(!cpasswordIsVisible)}
            >
              <Feather
                name={cpasswordIsVisible ? "eye" : "eye-off"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handlePressChack}>
            <Text style={styles.loginButtonText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.googleButtonText}>Sign up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>
              Already have an account ? {" "}
              <Text style={styles.registerButtonTextHighlight} >
                Login Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    left: 60,
    top: 70,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
    top: 70,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,

  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  cpasswordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#FF2222",
    fontSize: 16,
    fontWeight: "500",
    top: 70,
  },
  loginButton: {
    backgroundColor: "#4DE164",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    top: 70,
  },
  loginButtonText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
    top: 70,
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
    top: 70,
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: 70,
  },
  googleButtonText: {
    color: "#4E5867",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  googleLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 40,
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
  frame2608156: {
    left: -130,
    width: 369,
    height: 435,
    top: -220,
    position: "absolute",
  },
});