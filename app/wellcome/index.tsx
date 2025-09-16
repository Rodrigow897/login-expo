import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity><Text>Back to login</Text></TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study major</Text>
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
  }
});