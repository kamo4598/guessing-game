import { StyleSheet, Pressable, View, Text } from "react-native";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  const pressHandler = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#808080" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#36454F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: { color: "white", fontSize: 24, textAlign: "center" },
  pressed: {
    opacity: 0.75,
  },
});
