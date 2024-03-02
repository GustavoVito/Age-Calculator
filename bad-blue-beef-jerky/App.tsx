import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentDate = new Date();
    const birthdateArray = birthdate.split("/");

    if (birthdateArray.length === 3) {
      const day = parseInt(birthdateArray[0], 10);
      const month = parseInt(birthdateArray[1], 10);
      const year = parseInt(birthdateArray[2], 10);

      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        const birthDate = new Date(year, month - 1, day);

        // Calculate the age
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        const ageYears = Math.floor(ageInYears);
        const ageMonths = Math.floor((ageInYears - ageYears) * 12);
        const ageDays = Math.floor(
          (ageInYears - ageYears) * 365.25 - ageMonths * 30.44
        );

        setAge(
          `Sua idade é: ${ageYears} anos, ${ageMonths} meses e ${ageDays} dias.`
        );
        return;
      }
    }

    setAge("Por favor, insira uma data válida no formato: dd/mm/yyyy");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="(dd/mm/yyyy)"
        onChangeText={(text) => setBirthdate(text)}
      />
      <Button title="Calcular Idade" onPress={calculateAge} />
      <Text style={styles.result}>{age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default AgeCalculator;
