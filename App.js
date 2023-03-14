
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/dev"

import SignIn from "./src/components/SignIn"
import Land from "./src/components/Land"
const Stack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({ Roboto_700Bold })
  if (!loaded) {
    return
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signIn" options={{headerShown: false}} component={SignIn} />
        <Stack.Screen name="land" component={Land} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

