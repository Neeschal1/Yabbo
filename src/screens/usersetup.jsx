import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UserSetup = ({ navigation }) => {
  const handleSelectUser = async (userId) => {
    await AsyncStorage.setItem("myId", userId);
    navigation.replace("Texting"); // Go to chat screen after saving user ID
  };

  const screenheight = Dimensions.get("window").height;
  const screenwidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your user ID to start chatting:</Text>
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3593ea",
              height: screenheight * 0.07,
              borderRadius: 20,
            }}
            title="user1"
            onPress={() => handleSelectUser("user1")}
          >
            <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "600" }}>
              User 1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3593ea",
              height: screenheight * 0.07,
              borderRadius: 20,
            }}
            onPress={() => handleSelectUser("user2")}
          >
            <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "600" }}>
              User 2
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default UserSetup;
