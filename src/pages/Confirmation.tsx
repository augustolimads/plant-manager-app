import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { useNavigation } from "@react-navigation/core";

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn(){
    navigation.navigate('PlantSelect')
  }

  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.emoji}> 😊 </Text>
        <Text style={styles.title}> Prontinho </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cudado.
        </Text>
        <View style={styles.footer}>
          <Button
            title="Começar"
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
