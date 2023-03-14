import {
  Button,
  TextInput,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  Image,
  TouchableHighlight,
} from "react-native"
import { useEffect, useState, useContext } from "react"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"



export default function SignIn({setUser, user}) {
 
   const navigation = useNavigation()
  const [logins, setLogins] = useState({
    username: "atuny0",
    password: "9uQFF1Lh",
  })

  function handleSubmit(){
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logins)
    })
    .then(res => {
        if(res.ok){
            res.json().then(setUser)
        }
    })
  }

  useEffect(()=>{
      if(user){
        navigation.navigate("land")
      }
  },[user])

  return (
    <SafeAreaView style={styles.sign}>
      <View style={styles.inner}>
        <View style={styles.logop}>
          <View style={styles.logo}>
            <View style={styles.z}>
              <Text style={[styles.text, styles.zText]}>Z</Text>
            </View>
            <Text style={styles.text}>AMARA</Text>
          </View>
        </View>
        <View>
          <Text style={styles.texts}>Sign in</Text>
        </View>
        <View style={styles.inputP}>
          <Image
            style={styles.icons}
            source={require("../../assets/icons/user.png")}
          />
          <TextInput
            value={logins.username}
            style={styles.input}
            placeholder={"Enter username"}
            onChangeText={(t) => setLogins((l) => ({ ...l, username: t }))}
          />
        </View>
        <View style={styles.inputP}>
          <Image
            style={styles.icons}
            source={require("../../assets/icons/lock.png")}
          />
          <TextInput
            value={logins.password}
            secureTextEntry={true}
            style={styles.input}
            placeholder="Enter password"
            onChangeText={(t) => setLogins((l) => ({ ...l, password: t }))}
          />
        </View>
        <TouchableHighlight onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sign: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  inner: {
    backgroundColor: "white",
    padding: 30,
    paddingBottom: 40,
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 5 },
    elevation: 30,
    shadowRadius: 10,
    shadowOpacity: 0.9,
    // alignItems: "center"
  },
  input: {
    borderBottomWidth: 2,
    height: 45,
    width: 150,
    marginBottom: 20,
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
  icons: {
    height: 23,
    width: 23,
    marginRight: 10,
  },
  inputP: {
    flexDirection: "row",
    alignItems: "center",
  },
  texts: {
    fontSize: 18,
    margin: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#0f0718",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
})
