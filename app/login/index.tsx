import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}>
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.titleBox}>
            <Text style={styles.title}>Login here</Text>
            <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput style={styles.textInput} placeholder="Email"></TextInput>
                <TextInput style={styles.textInput} placeholder="Password"></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    goBackText:{
        fontSize: 14,
        color: '#000000',
        fontWeight: 700,
    },
    titleBox:{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 200,
        gap: 26,
        position: 'absolute',
        top: 130,
    },
    title: {
        fontSize: 30,
        color: '#1F41BB',
        fontWeight: '700',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    inputBox: {
        width: 340,
        gap: 20,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        paddingLeft: 15,
        backgroundColor: '#F1F4FF',
        height: 64,
    }
});