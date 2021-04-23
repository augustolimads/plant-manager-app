import React from "react";
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import colors from "../styles/colors";

type Props = {
    children?: JSX.Element[] | JSX.Element,
  };

export function Container({children}:Props) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: colors.background
    },
  });