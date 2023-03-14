import { StatusBar, StyleSheet } from "react-native"
import { View, Image, Text, TouchableHighlight,TouchableWithoutFeedback, Platform } from "react-native"
import { animated, useSpring } from "@react-spring/native"
import { useEffect, useState } from "react"

const AnimatedView = animated(View)

export default function HamburgerMenu() {
  const [showDetails, setShowDetails] = useState(false)

  const [expand, apiExpand] = useSpring(() => ({
    from: {
      opacity: 0,
      width: 70,
    },
  }))

  useEffect(() => {
    if (showDetails === true) {
      apiExpand.start(() => ({
        width: 250,
        opacity: 1,
      }))
    } else {
      apiExpand.start(() => ({
        width: 70,
        opacity: 0,
      }))
    }
  }, [showDetails])
  const details = { opacity: expand.opacity }
  const expandWidth = { width: expand.width }
  return (
    <AnimatedView style={[styles.hamb, expandWidth]}>
      <View style={styles.hamtop}>
        <TouchableWithoutFeedback onPress={()=>setShowDetails(show=>!show)}>
          <Image
            style={styles.ham}
            source={require("../../assets/icons/hamburger.png")}
          />
        </TouchableWithoutFeedback>
        {showDetails ? (
          <AnimatedView style={[styles.z, details]}>
            <Text style={styles.zText}>Z</Text>
          </AnimatedView>
        ) : null}
      </View>
      <View>
        <TouchableHighlight>
          <View style={styles.hamItem}>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/home.png")}
            />
            {showDetails ? (
              <AnimatedView style={details}>
                <Text style={styles.text}>Home</Text>
              </AnimatedView>
            ) : null}
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.hamItem}>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/staff.png")}
            />
            {showDetails ? (
              <AnimatedView style={details}>
                <Text style={styles.text}>Staff</Text>
              </AnimatedView>
            ) : null}
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.hamItem}>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/continents.png")}
            />
            {showDetails ? (
              <AnimatedView style={details}>
                <Text style={styles.text}>Continents</Text>
              </AnimatedView>
            ) : null}
          </View>
        </TouchableHighlight>
        <View style={styles.line}></View>
        <TouchableHighlight>
          <View style={styles.hamItem}>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/log-out.png")}
            />
            {showDetails ? (
              <AnimatedView style={details}>
                <Text style={styles.text}>Logout</Text>
              </AnimatedView>
            ) : null}
          </View>
        </TouchableHighlight>
      </View>
    </AnimatedView>
  )
}

const styles = StyleSheet.create({
  hamb: {
    padding: 10,
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ddd",
    position: "absolute",
    flex: 1,
  },
  icons: {
    height: 25,
    width: 25,
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  hamItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#00000088",
    marginBottom: 14,
    marginTop: 14,
  },
  ham: {
    height: 25,
    width: 25,
    marginLeft: 10,
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
    fontSize: 30,
  },
  hamtop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
