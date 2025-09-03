import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Texting from "./texting";
import { useNavigation } from "expo-router";

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

const Login = () => {

    const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 50,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "yellow", fontSize: 40, fontWeight: "600" }}>
            Y
          </Text>
          <Text style={{ color: "#ffffffff", fontSize: 40, fontWeight: "600" }}>
            abbo
          </Text>
        </View>
        <Text style={{ color: "#5a5a5aff", textAlign: "center" }}>
          Welcome to Yabbo! The easiest way to chat, share, and connect with
          friends anytime, anywhere.
        </Text>
      </View>
      <View style={{ width: "100%", gap: 30 }}>
        <TextInput
          placeholder="Enter your phone number:"
          placeholderTextColor={"#727171ff"}
          keyboardType="number-pad"
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#ffffff",
            width: "100%",
            height: screenheight * 0.07,
            paddingLeft: 15,
            color: "#ffffff",
            fontSize: 19,
          }}
        />
        <TextInput
          placeholder="Password:"
          placeholderTextColor={"#727171ff"}
          keyboardType="default"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#ffffff",
            width: "100%",
            height: screenheight * 0.07,
            paddingLeft: 15,
            color: "#ffffff",
            fontSize: 19,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3593ea",
          height: screenheight * 0.07,
          borderRadius: 20,
        }}
        onPress={()=>{navigation.navigate("Texting")}}
      >
        <Text style={{ color: "#ffffff", fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5}}>
        <Text style={{color: "#ffffff"}}>New in Yabbo?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("UserSetup")}}>
            <Text style={{color: "#3593ea", fontWeight: "700", fontSize: 20}}>
                Signup
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
