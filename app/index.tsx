import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
        
            <Text style={styles.mainTitle}>แอปคำนวณ</Text>
            <Text style={styles.subTitle}>เลือกเมนูที่ต้องการ</Text>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => router.navigate("/square")}
            >
                <Text style={styles.menuText}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => router.navigate("/Gallon")}
            >
                <Text style={styles.menuText}>คำนวณแกลลอนเป็นลิตร</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F5E9",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 15,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#1B5E20",
    },
    subTitle: {
        fontSize: 16,
        color: "#4E6E57",
        marginBottom: 20,
    },
    menuButton: {
        width: "100%",
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,
    },
    menuText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});
