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
                <TouchableOpacity><Text style={styles.forgotText}>Forgot your password?</Text></TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} ><Text style={styles.signInText}>Sign in</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.createNewText}>Create new account</Text></TouchableOpacity>
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
    },
    forgotText: {
        textAlign: 'right',
        color: '#1F41BB',
        fontWeight: 600,
        fontSize: 14,
    },
    signInButton: {
        backgroundColor: '#1F41BB',
        height: 64,
        borderRadius: 10,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 20,
    },
    createNewText: {
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 14,
        color: '#494949',
    }
});