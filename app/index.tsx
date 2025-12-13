import { View , Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container} >
            <Text style={styles.mainTitle}>หน้าแรก</Text>
            <Button title="คำนวณพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/square')} />
            <Button title="คำนวณแกลลอนเป็นลิตร" onPress={() => router.navigate('/Gallon')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#ACFABF",
        justifyContent:"center",
        alignItems:"center",
        gap:15
    },

    mainTitle:({
        fontSize:20,
        fontWeight:"700"
    })
})