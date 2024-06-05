import SignUp from "./signup";
import SignUp2 from "./signup2";
import Home from "./index";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" component={Home} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signup2" component={SignUp2} />
      </Stack.Navigator>
  );
}
