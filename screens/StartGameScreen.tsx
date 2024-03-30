import { StyleSheet, View, Text, Button, TextInput } from "react-native";
const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>GUESSING GAME</Text>
        <Text style={styles.text}>Enter a number</Text>
      </View>
      <View style={styles.startContainer}>
        <TextInput
          keyboardType='numeric'
          maxLength={2}
          style={styles.textInput}
        />
        <Button title='Start Game' />
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000411",
    width: "100%",
  },
  infoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  startContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 32,
    marginTop: 16,
  },
  textInput: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2,
    color: "#D3D3D3",
    fontSize: 32,
    marginTop: 16,
    width: 50,
    textAlign: "center",
    marginBottom: 16,
  },
});
