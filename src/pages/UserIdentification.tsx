import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {

    if(!name)
      return Alert.alert('Me diz como chamar você? 😥');
      
      try {
        await AsyncStorage.setItem("@plantmanager:user", name)
        navigation.navigate("Confirmation", {
          title: 'Prontinho',
          subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
          buttonTitle: 'Começar',
          icon: 'smile',
          nextScreen: 'PlantSelect',
        });
      } catch (error) {
        return Alert.alert('Não consigo salvar o seu nome 😥');
    }

  }

  return (
    <Container>
      <View style={styles.content}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? "😄" : "🙂"}</Text>
            </View>
            <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={styles.footer}>
              <Button onPress={handleSubmit} title="Confirmar" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
    width: "100%",
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
    width: "100%",
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
