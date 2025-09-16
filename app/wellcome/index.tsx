import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('/login')} style={styles.backButton}><Text style={styles.goBackText}>Back to login</Text></TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subtitle}>This is my first React Native App.</Text>
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
    fontWeight: 500,
    color: '#000000',
  }
});