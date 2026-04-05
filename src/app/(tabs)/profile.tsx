import { Text, View, StyleSheet } from "react-native";
import {
  Button,
  Host,
  Column,
  ModalBottomSheet,
} from "@expo/ui/jetpack-compose";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
