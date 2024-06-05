import styled from "styled-components/native";
import { Pressable, StyleSheet } from "react-native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
`;

export const Logo = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const Input = styled.TextInput`
  width: 90%;
  color: gray;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  padding: 10px;
`;

const Submit = styled(Pressable)`
  width: 90%;
  color: white;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
`;

export const styles = StyleSheet.create({
  longbutton: {
    width: '90%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  errorText: {
    color: 'red',
  }
});