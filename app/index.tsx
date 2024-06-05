import { Text, Pressable} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Logo, Subtitle, Container, Input, styles} from "./components/small-components"
import { useState } from "react";

const LogoWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const BodyWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const InputWrapper = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15%;
  width: 100%;
`;

const InfoWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
`;


const SignWith = styled(Pressable)`
  width: 90%;
  color: white;
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
`;

const Body = styled.Text`
  font-size: 16px;
`;

const Info = styled.Text`
  justify-content: center;
  font-size: 12px;
  text-align: center;
  width: 90%;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export default function Home({navigation}) {
  const [pressed, setPressed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");

  // Check to see if the email entered is in the correct form
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Trigger the validateEmail function
  const handlePress = () => {
      if (validateEmail(email)) {
        console.log("Email is valid:", email);
        navigation.navigate('signup', {email: email});
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
        <Subtitle>Create an account</Subtitle>
        <Body>Enter your email to sign up for JobTracker.</Body>
      </BodyWrapper>
      <InputWrapper>
        <Input placeholder="email@domain.com"  placeholderTextColor="#707070" value={email} 
        onChangeText={(text) => {
          setEmail(text);
          setIsValidEmail(true);
        }}></Input>
        {!isValidEmail && <Text style={styles.errorText}>Please enter a valid email address.</Text>}
          <Pressable onPress={handlePress} style={({ pressed }) => [
        styles.longbutton,
        { backgroundColor: pressed ? 'white' : 'black' }
      ]}onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
          <ButtonText>Continue</ButtonText>
          </Pressable>
      </InputWrapper>
      <InputWrapper>
        <Body>or continue with:</Body>
        <Pressable style={({ pressed }) => [
        styles.longbutton,
        { backgroundColor: pressed ? 'white' : 'gray' }
      ]}onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
          <ButtonText><Icon size={20} name="google"></Icon>&nbsp;&nbsp;Google</ButtonText>
        </Pressable>
      </InputWrapper>
      <InfoWrapper>
        <Info>By clicking continue, you agree to our Terms of Service and Privacy Policy.</Info>
      </InfoWrapper>
    </Container>
  );
}
