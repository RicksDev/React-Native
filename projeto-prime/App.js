import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Prime from "./Src/Telas/Prime";

export default function App() {
  return (
    <ScrollView>
      <Prime></Prime>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
