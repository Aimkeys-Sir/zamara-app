import { View } from "react-native";
import { animated,useSpring } from "@react-spring/native";

const AnimatedView= animated(View)

export default function HamburgerExpand(){
    const [expandSpring, apiExpand] = useSpring()
    return <AnimatedView>
        <TouchableHighlight>
            <Image style={styles.icons} source={require("../../assets/icons/home.png")}/>
        </TouchableHighlight>
        <TouchableHighlight>
            <Image style={styles.icons} source={require("../../assets/icons/staff.png")}/>
        </TouchableHighlight>
        <TouchableHighlight>
            <Image style={styles.icons} source={require("../../assets/icons/continents.png")}/>
        </TouchableHighlight>
        <View>
        </View>
        <TouchableHighlight>
            <Image style={styles.icons} source={require("../../assets/icons/log-out.png")}/>
        </TouchableHighlight>
    </AnimatedView>
}