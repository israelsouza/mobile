import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [selectedValue, setSelectedValue] = useState("Soma");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("Adição");
  const [items, setItems] = useState([
    { label: "Adição", value: "adi" },
    { label: "Divisão", value: "div" },
    { label: "Multiplicação", value: "mul" },
    { label: "Subtrair", value: "sub" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Picker nativo</Text>
      <Text style={styles.Subtitle}>Escolha uma operação aritmética:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Adição" value="somar" />
        <Picker.Item label="Divisão" value="dividir" />
        <Picker.Item label="Multiplicação" value="Mult" />
        <Picker.Item label="Subtrair" value="sub" />
      </Picker>
      <View style={styles.selectedValueContainer}>
        <Text style={styles.selectedValue}>
          Linguagem Selecionada: {selectedValue}
        </Text>
      </View>
      <Text style={styles.title}>DropDown Picker personalizavel</Text>
      <Text style={styles.title}>DropDown Picker personalizavel</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Selecione uma operação" // <-- aqui
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
      <Text style={styles.result}>Escolhida: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ADD8E6",
  },
  title: {
    fontSize: 21,
    marginTop: 50,
    marginBottom: 10,
    color: "#F0F",
  },
  Subtitle: {
    fontSize: 17,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    backgroundColor: "#CCC",
  },
  selectedValueContainer: {
    marginTop: 20,
    borderColor: "#00F",
  },
  selectedValue: {
    fontSize: 18,
    borderColor: "#00F",
  },
  dropdown: {
    borderTopColor: "#F0F",
    marginTop: 25,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 8,
  },
  result: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
