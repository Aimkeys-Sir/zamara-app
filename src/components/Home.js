import { StyleSheet, View, Image, Text } from "react-native"

export default function Home() {
  return (
    <View style={styles.home}>
      <View style={styles.topbar}>
        {/* <View style={styles.hamp}>
          <Image
            style={styles.ham}
            source={require("../../assets/icons/hamburger.png")}
          />
        </View> */}
        <View style={styles.logop}>
          <View style={styles.logo}>
            <View style={styles.z}>
              <Text style={[styles.text, styles.zText]}>Z</Text>
            </View>
            <Text style={styles.text}>AMARA</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  home: {
    // flex: 1,
  },
  hamp:{
    padding: 10
  },
  logo: {
    flexDirection: "row",
    alignSelf: "center",
  },
  logop: {
    justifyContent: "flex-start",
    flex: 1
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
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ham: {
    height: 25,
    width: 25,
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 30,
  },
})
