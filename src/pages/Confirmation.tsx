import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { useNavigation, useRoute } from "@react-navigation/core";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😊'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {title, subtitle, buttonTitle, icon, nextScreen} = routes.params as Params;

  function handleMoveOn(){
    navigation.navigate(nextScreen)
  }

  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.emoji}> {emojis[icon]} </Text>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subtitle}>
         {subtitle}
        </Text>
        <View style={styles.footer}>
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  emoji: { fontSize: 78 },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  footer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 50,
  },
});
