import styled from "styled-components/native"
import { Container, Input, Logo, Subtitle, styles } from "./components/small-components"
import { Text, Pressable } from "react-native";
import { useState } from "react";

const LogoWrapper = styled.View`
    display: flex;
    justify-content: center;
    height: 10%;
`;

const BodyWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

const InputWrapper = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25%;
  width: 100%;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`;

const Body = styled.Text`
  font-size: 16px;
`;


export default function SignUp ({route, navigation}) {
    const { email } = route.params;
    const [pressed, setPressed] = useState(false);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [finalEmail, setEmail] = useState(email);
    

    const validatePassword = (password1, password2) => {
        if (password1 === password2) {
        return true;
        }
    }

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }


    const handlePress = () => {
        if (validatePassword(password1, password2) && validateEmail(finalEmail)) {
          console.log("Password and email are valid:", finalEmail);
          navigation.navigate('userhome');
        } else {
          setIsValidEmail(false);
        }
    }

    return (
        <Container>
            <LogoWrapper>
                <Logo>JobTracker</Logo>
            </LogoWrapper>
            <BodyWrapper>
                <Subtitle>Sign Up</Subtitle>
                <Body>Enter your new email and password.</Body>
            </BodyWrapper>
            <InputWrapper>
                <Input placeholder={email}  placeholderTextColor="#707070" onChangeText={(text) => {
                  setEmail(text)}}/>
                <Input placeholder="Password" secureTextEntry={true} onChangeText={(text) => {
                  setPassword1(text)}}/>
                <Input placeholder="Re-Enter Password" secureTextEntry={true} onChangeText={(text) => {
                  setPassword2(text)}}/>
                {!isValidEmail && <Text style={styles.errorText}>Please enter a valid email address.</Text>}
                <Pressable onPress={handlePress} style={({ pressed }) => [
        styles.longbutton,
        { backgroundColor: pressed ? 'white' : 'black' }
      ]}onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
          <ButtonText>Continue</ButtonText>
          </Pressable>

            </InputWrapper>
        </Container>
    )
}