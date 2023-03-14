import {
  Button,
  TextInput,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native"
import { useState } from "react"
import { StyleSheet } from "react-native"

export default function SignIn() {
  const [logins, setLogins] = useState({
    userName: "",
    password: "",
  })
  return (
    <SafeAreaView style={styles.sign}>
      <View style={styles.logop}>
        <View style={styles.logo}>
          <View style={styles.z}>
            <Text style={[styles.text, styles.zText]}>Z</Text>
          </View>
          <Text style={styles.text}>AMARA</Text>
        </View>
      </View>
      <View>
        <Text>Sign in</Text>
      </View>
      <View>
        <TextInput
          value={logins.userName}
          style={styles.input}
          placeholder={"enter username"}
          onChangeText={(t) => setLogins((l) => ({ ...l, userName: t }))}
        />
      </View>
      <View>
        <TextInput
          value={logins.password}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(t) => setLogins((l) => ({ ...l, password: t }))}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sign: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    flexDirection:"column",
    alignItems: "center",
    flex: 1
  },
  input: {
    borderBottomWidth: 2,
    height: 45,
    width: 150
  },
  logo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  logop: {
    justifyContent: "flex-start",
  },
  z: {
    backgroundColor: "#000",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  zText: {
    color: "#fff",
  },
  text: {
    fontFamily: "Roboto_700Bold",
    color: "#000",
    fontSize: 30,
  },
})
