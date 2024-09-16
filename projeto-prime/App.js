import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Prime from "./Src/Telas/Prime";
import Texto from "./Src/Components/Texto";
import Contador from "./Src/Components/Contador";

export default function App() {
  return (
    <ScrollView>
      <Prime></Prime>
      <Texto />
      <Contador />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
