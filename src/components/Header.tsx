import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import userImg from "../assets/waterdrop.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName(){
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || "")

    }

    loadStorageUserName()

  },[])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.user}>{userName}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  user: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
});
