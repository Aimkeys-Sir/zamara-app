import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/dev"
import { useState } from "react"

import SignIn from "./src/components/SignIn"
import Land from "./src/components/Land"
const Stack = createNativeStackNavigator()
export default function App() {
  const [user, setUser] = useState(null)
  const [loaded] = useFonts({ Roboto_700Bold })
  if (!loaded) {
    return
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signIn" options={{ headerShown: false }}>
          {() => <SignIn user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="land">
          {() => <Land user={user} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
