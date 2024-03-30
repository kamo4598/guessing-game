import { StyleSheet, View, Text, Button, TextInput, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>GUESSING GAME</Text>
        <Text style={styles.text}>Enter a number</Text>
      </View>
      <View style={styles.startOuterContainer}>
        <View style={styles.startInnerContainer}>
          <TextInput
            keyboardType='numeric'
            maxLength={2}
            style={styles.textInput}
          />
          <PrimaryButton>Start Game</PrimaryButton>
        </View>
        <Image
          width={300}
          height={300}
          source={require("../assets/images/dice.png")}
        />
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
    width: "100%",
  },
  infoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  startOuterContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  startInnerContainer: {
    alignItems: "center",
    width: "80%",
    backgroundColor: "#250A30",
    borderRadius: 35,
    padding: 16,
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
