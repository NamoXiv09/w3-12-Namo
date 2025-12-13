import { View , Text, Button, StyleSheet, TextInput , Touchable} from "react-native";
import { useRouter } from "expo-router";
import { use, useState } from "react";

export default function calGallon(){
    const router = useRouter()
    const [liter, setLiter] = useState(0)
    const [gallon, setGallon] = useState(0)
    const [total, setTotal] = useState(0)

    function calLiter(){
        let liter = gallon * 3.785
        setTotal(liter)
    }

    return(

        <View style={styles.container}>

            <Button title="กลับไปยังหน้าแรก" onPress={() => router.navigate('/')} />
             <Text style={styles.mainTitle}>คำนวณแกลลอนเป็นลิตร</Text>
            {/* <Button title="กลับหน้าแรก" onPress={() => router.navigate('/')} /> */}
        
            <Text>{gallon} แกลลอน = {total}  ลิตร </Text>
        
            <TextInput 
                style={styles.textInput} 
                placeholder="กรอกแกลลอน"
                value={gallon.toString()}
                onChangeText={(g) => setGallon(Number(g))}
            />
                <Button title="คำนวณ" onPress={() => calLiter()}/>
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
    },

})