import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
  } from "react-native"
  import Home from "./Home"
  

  import HamburgerMenu from "./HamburgerMenu"
  // import {
  //   createDrawerNavigator,
  //   NavigationContainer,
  // } from "@react-navigation/drawer"
  
  // const Drawer = createDrawerNavigator()
  
  export default function Land() {
   
    return (
      <SafeAreaView style={styles.container}>
        <Home/>
        <HamburgerMenu/>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      position: "relative"
    },
  })