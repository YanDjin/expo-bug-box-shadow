import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    boxShadow: "5 5 5 0 rgba(0, 255, 0, 1)",
  },
});
