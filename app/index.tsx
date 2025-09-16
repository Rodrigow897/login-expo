import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.svg')} />
      <View style={styles.textBox}>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study major</Text>
      </View>

    <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
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
  image: {
    width: 368,
    height: 331,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 47
  },
  textBox:{
    marginLeft: 42,
    marginRight: 42,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 23
  },

  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 600,
    color: '#1F41BB',
  },
    subtitle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    height: 106,
    fontSize: 14,
    fontWeight: 400,
    color: '#6A6A6A',
  },

  buttonBox: {
    flexDirection: 'row',
    gap: 10,
    width: 350,
    justifyContent: 'center',
    height: 60,
    marginLeft: 39,
    marginRight: 39,
    paddingVertical: 15
  },

  login: {
    backgroundColor: '#1F41BB',
    width: 160,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },

  loginText:{
    color:'#FFFFFF',
    fontWeight: 800,
    fontSize: 20
  },

  registerText:{
    color:'#0A0A0A',
    fontWeight: 800,
    fontSize: 20
  },

  register: {
    width: 160,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
