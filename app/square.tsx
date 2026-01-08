import { View , Text, Button, StyleSheet, TextInput , TouchableOpacity} from "react-native";
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
            <TouchableOpacity style={styles.backButton} onPress={() => router.navigate("/")}>
                            <Text style={styles.backText}> ← กลับไปยังหน้าแรก</Text>
            </TouchableOpacity>
          <View style={styles.card}> 
            <Text style={styles.title}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="กลับหน้าแรก" onPress={() => router.navigate('/')} /> */}

            <Text>กว้าง {width} เมตร ยาว {lenght} เมตร</Text>
            <Text> พื้นที่สี่เหลี่ยม = {area} ตารางเมตร </Text>

            <TextInput 
                style={styles.input} 
                placeholder="กรอกความกว้าง"
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w))}
            />

            <TextInput 
            style={styles.input} 
            value={lenght.toString()}
            onChangeText={(l) => setLenght(Number(l))}
            placeholder="กรอกความยาว"/>

            <Button title="คำนวณ" onPress={() => calSquare()}/>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F5E9",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
    },
    backText: {
        fontSize: 16,
        color: "#2E7D32",
        
    },
    card: {
        width: "85%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
        gap: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1B5E20",
    },
    resultText: {
        fontSize: 18,
        color: "#333",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#A5D6A7",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
    },
    calButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    calText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
