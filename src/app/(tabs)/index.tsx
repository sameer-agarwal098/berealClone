import { Text, View, StyleSheet } from "react-native";
import { Button } from "@expo/ui/jetpack-compose";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World</Text>

      <Link href={"/about"}>Go to the About Screen</Link>
      <Button onPress={() => router.push("/about")}>
        <Text>Navigate</Text>
      </Button>
      {/* <Button title="Navigate" onPress={() => router.push("/about")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldTitle: {
    color: "orange",
    fontWeight: "500",
    fontSize: 25,
  },
});
