import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function CalGallon() {
    const router = useRouter();

    const [gallon, setGallon] = useState("");
    const [liter, setLiter] = useState(0);

    function calLiter() {
        const result = Number(gallon) * 3.785;
        setLiter(result);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.navigate("/")}>
                <Text style={styles.backText}> ← กลับไปยังหน้าแรก</Text>
            </TouchableOpacity>
            
            <View style={styles.card}>
                <Text style={styles.title}>คำนวณแกลลอนเป็นลิตร</Text>

                <Text style={styles.resultText}>
                    {gallon || 0} แกลลอน = {liter.toFixed(2)} ลิตร
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="กรอกจำนวนแกลลอน"
                    keyboardType="numeric"
                    value={gallon}
                    onChangeText={setGallon}
                />

                <TouchableOpacity style={styles.calButton} onPress={calLiter}>
                    <Text style={styles.calText}>คำนวณ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
        flexDirection:"row"
    },
    calText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
