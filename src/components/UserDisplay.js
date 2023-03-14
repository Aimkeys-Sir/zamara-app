import { StyleSheet, Text } from "react-native"
import {View} from "react-native"
export default function UserDisplay({user}){
    return <View style={styles.usersDetails}>
        <View style={styles.welcome}>
            <Text>Welcome</Text>
            <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        </View>
        <View style={styles.item}>
           <Text>Age: </Text>
           <Text>{`${user.age}`}</Text>
        </View>
        <View style={styles.item}>
           <Text>Gender: </Text>
           <Text>{user.gender}</Text>
        </View>
        <View style={styles.item}>
           <Text>Email: </Text>
           <Text>{user.email}</Text>
        </View>
        <View style={styles.item}>
           <Text>Phone: </Text>
           <Text>{user.phone}</Text>
        </View>
        <View style={styles.item}>
           <Text>Birth Date: </Text>
           <Text>{user.birthDate}</Text>
        </View>
        <View style={styles.item}>
           <Text>Eye Color: </Text>
           <Text>{user.eyeColor}</Text>
        </View>
        <View style={styles.item}>
           <Text>Blood Group: </Text>
           <Text>{user.bloodGroup}</Text>
        </View>
        <View style={styles.item}>
           <Text>Height: </Text>
           <Text>{user.height}</Text>
        </View>
        <View style={styles.item}>
           <Text>Weight: </Text>
           <Text>{user.weight}</Text>
        </View>
    </View>
}

const styles= StyleSheet.create({
    welcome:{
        flexDirection: "row",
        alignItems: "center"
    },
    usersDetails: {
        paddingLeft: 80
    },
    name:{
        fontSize: 16, 
        fontWeight: 600,
        marginLeft: 4
    },
    item:{
        flexDirection: "row"
    }
})