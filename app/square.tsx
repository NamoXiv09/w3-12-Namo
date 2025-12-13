import { View , Text, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Square(){

    const router = useRouter()
    const [width, setWidth] = useState(0)
    const [lenght, setLenght] = useState(0)
    const [area, setArea] = useState(0)

    function calSquare(){
        let ans = width * lenght
        setArea(ans)
    }

    return(
        <View style={styles.container}>
            
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="กลับหน้าแรก" onPress={() => router.navigate('/')} /> */}

            <Text>กว้าง {width} เมตร ยาว {lenght} เมตร</Text>
            <Text> พื้นที่สี่เหลี่ยม = {area} ตารางเมตร </Text>

            <TextInput 
                style={styles.textInput} 
                placeholder="กรอกความกว้าง"
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w))}
            />

            <TextInput 
            value={lenght.toString()}
            onChangeText={(l) => setLenght(Number(l))}
            style={styles.textInput} 
            placeholder="กรอกความยาว"/>

            <Button title="คำนวณ" onPress={() => calSquare()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap:15,
        
    },

    mainTitle:({
        fontSize:20,
        fontWeight:"700"
    }),

    textInput:{
        borderWidth: 1,
        width: "80%",
        borderColor:"green"
    }
})