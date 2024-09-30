import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Prime from "./Src/Telas/Prime";
import Texto from "./Src/Components/Texto";
import Contador from "./Src/Components/Contador";
import CadNews from "./Src/Components/CadNews";

export default function App() {
  return (
    <ScrollView>
      <Prime></Prime>
      <Texto />
      <CadNews />
      <Contador />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
