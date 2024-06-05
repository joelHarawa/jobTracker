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
  height: 15%;
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


export default function SignUp2 ({route, navigation}) {
    const [pressed, setPressed] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [isValidName, setIsValidName] = useState(true);
    
    const validateName = (name) => {
        if (name.length < 2 ) {
            return false;
        }
        return true;
    }


    const handlePress = () => {
        if (validateName(firstName)) {
          console.log("Name is valid:", firstName);
          navigation.navigate('userhome');
        } else { 
            setIsValidName(false);
        }
    }

    return (
        <Container>
            <LogoWrapper>
                <Logo>JobTracker</Logo>
            </LogoWrapper>
            <BodyWrapper>
                <Subtitle>Last Step</Subtitle>
                <Body>Enter your name.</Body>
            </BodyWrapper>
            <InputWrapper>
                <Input placeholder="First Name"  placeholderTextColor="#707070" onChangeText={(text) => {
                  setFirstName(text)}}/>
                {!isValidName && <Text style={styles.errorText}>Please enter a name longer than 1 character.</Text>}
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