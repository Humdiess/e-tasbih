import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(33);
  const [dzikirIndex, setDzikirIndex] = useState(0);

  const dzikirTitles = ["Subahanallah", "Alhamdulillah", "Allahuakbar"];

  const handlePress = () => {
    if (count === 1) {
      const nextIndex = (dzikirIndex + 1) % dzikirTitles.length;
      setDzikirIndex(nextIndex);
      setCount(33);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'black'
      }}
    >
      <View style={styles.display}>
        <View>
          <Text style={styles.text}>{dzikirTitles[dzikirIndex]}</Text>
        </View>
        <View style={styles.dzikir}>
          <Text style={styles.text}>Count: {count}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={{ color: 'white' }}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dzikir: {
    backgroundColor: 'green',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderColor: 'grey',
    borderWidth: 20,
    borderRadius: 200,
  },
  buttonContainer: {
    width: '100%',
    height: '50%',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 200,
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  display: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
    // justifyContent: 'center',
  }
});