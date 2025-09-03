import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../../firebaseConfig";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Texting = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);

  const partnerId = myId === "user1" ? "user2" : "user1";

  useEffect(() => {
    const loadMyId = async () => {
      const storedId = await AsyncStorage.getItem("myId");
      if (storedId) setMyId(storedId);
    };
    loadMyId();
  }, []);

  const chatId = myId ? [myId, partnerId].sort().join("_") : null;

  useEffect(() => {
    if (!chatId) return;

    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  const handleSend = async () => {
    if (!message.trim() || !myId) return;

    await addDoc(collection(db, "chats", chatId, "messages"), {
      text: message,
      sender: myId,
      createdAt: serverTimestamp(),
    });

    setMessage("");
  };

  if (!myId) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3593ea" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#000000" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
    >
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={{
                backgroundColor: msg.sender === myId ? "#3e91e6" : "#202133",
                padding: 12,
                marginVertical: 4,
                alignSelf: msg.sender === myId ? "flex-end" : "flex-start",
                borderRadius: 16,
                borderTopLeftRadius: msg.sender === myId ? 16 : 0,
                borderTopRightRadius: msg.sender === myId ? 0 : 16,
                maxWidth: "75%",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 17 }}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: Platform.OS === "ios" ? 20 : screenHeight * 0.09,
          }}
        >
          <TextInput
            placeholder="Type a message..."
            placeholderTextColor="#696868"
            value={message}
            onChangeText={setMessage}
            style={{
              flex: 1,
              height: screenHeight * 0.07,
              borderWidth: 1,
              borderColor: "#ffffff",
              borderRadius: 20,
              paddingHorizontal: 15,
              color: "#ffffff",
              fontSize: 18,
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            onPress={handleSend}
            style={{
              width: screenWidth * 0.18,
              height: screenHeight * 0.07,
              backgroundColor: "#3593ea",
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "600" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Texting;
