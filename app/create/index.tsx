import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createNewUser } from '../api';

export default function LoginScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async () => {
        // Chama a função importada
        const { status, data } = await createNewUser(name, email, password);

        if (status === 201) {
            console.log('Usuário criado com sucesso:', data);
            // Redireciona para outra tela após o sucesso
            router.push('/welcome');
        } else {
            console.error('Erro ao criar o usuário:', data.error);
            // Mostra uma mensagem de erro na UI
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}>
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.titleBox}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>
            </View>

            <View style={styles.inputBox}>
                <TextInput
                   value={name}
                   onChangeText={setName}
                   style={styles.textInput}
                   placeholder="Name">    
                </TextInput>
                <TextInput
                    value={email}
                   onChangeText={setEmail}
                   style={styles.textInput}
                   placeholder="email"> 
                </TextInput>
                <TextInput 
                    value={password}
                   onChangeText={setPassword}
                   style={styles.textInput}
                   placeholder="password"> 
                </TextInput>
                <TouchableOpacity onPress={handleCreateAccount} style={styles.signInButton} ><Text style={styles.signInText}>Sign in</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/login')}><Text style={styles.createNewText}>Already have an account</Text></TouchableOpacity>
            </View>

            <View style={styles.otherWaysLoginBox}>
                <Text style={styles.otherWaysLoginText} >Or continue with</Text>
                <View style={styles.IconsBox}>
                    <TouchableOpacity style={styles.iconsButton}><FontAwesome name="google" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconsButton}><FontAwesome name="facebook" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconsButton}><FontAwesome name="apple" size={24} color="black" /></TouchableOpacity>
                </View>
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
        width: 300,
        gap: 10,
        position: 'absolute',
        top: 110,
    },
    title: {
        fontSize: 30,
        color: '#1F41BB',
        fontWeight: '700',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    inputBox: {
        width: 340,
        gap: 20,
        justifyContent: 'center',
        marginTop: 50,
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
        marginTop: 40,
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
        marginTop: 15,
    },
    otherWaysLoginBox: {
        justifyContent: 'space-between',
        gap: 20,
        width: 200,
        position: 'absolute',
        bottom: 70,
    },
    otherWaysLoginText: {
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        color: '#1F41BB',
        fontWeight: 600,
    },
    IconsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    iconsButton: {
        backgroundColor: '#dcdbdbff',
        width: 60,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});