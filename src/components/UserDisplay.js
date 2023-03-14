import {View} from "react-native"
export default function UserDisplay({user}){
    return <View>
        <View>
            <Text>Welcome</Text>
            <Text>{`${user.firstName} ${user.lastName}`}</Text>
        </View>
        
    </View>
}