import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
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
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState("");
  //const navigation = useNavigation();

  
  const [passwordIsVisible, setPasswordIsVisible] =
    React.useState(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Please enter all required information');
    } else {
      //navigation.navigate('homepage');
    }
  };

  const updateLoginButtonState = () => {
    setIsLoginDisabled(email.trim() === '' || password.trim() === '');
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
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={(text) => {
                setEmail(text);
                updateLoginButtonState();
              }}
              value={email}
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
                updateLoginButtonState();
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
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>
              Not have an account yet?{" "}
              <Text style={styles.registerButtonTextHighlight} >
                Register now!
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
    left: 130,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
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
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#FF2222",
    fontSize: 16,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#4DE164",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
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
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    top: -280,
    position: "absolute",
  },
});