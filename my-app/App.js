import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";


const sorvetesCremosos = [
  { id: "1", name: "Chocolate Belga" },
  { id: "2", name: "Pisache" },
  { id: "3", name: "Cookies & Cream" },
  { id: "4", name: "Baunilha de Madagascar" },
  { id: "5", name: "Napolitano" },
];

const sorvetesRefrescantes = [
  { id: "1", name: "Manga" },
  { id: "2", name: "Limão Siciliano" },
  { id: "3", name: "Maracujá" },
  { id: "4", name: "Frutas Vermelhas" },
  { id: "5", name: "Coco" },
];

const sectionListData1 = [
  {
    title: "SORVETES CREMOSOS",
    data: ["Chcolate Belga", "Pisache", "Cookies & Cream", "Baunilha de Madagascar", "Napolitano"],
  },
];

const sectionListData2 = [
  {
    title: "SORVETES REFRESCANTES",
    data: ["Manga", "Limão Siciliano", "Maracujá", "Frutas Vermelhas", "Coco"],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title01}> WELCOME TO GELATTO & CIA</Text>
        <Text style={styles.subtitle}>The best place to buy your ice cream</Text>
        <Text style={styles.title02}>MENU</Text>
        <div style={styles.cards }>
        <div style={styles.card1}>
        <FlatList
          data={sectionListData1}
          renderItem={({ item }) => (
            <Text style={styles.sectionTitle}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.title}
        />
        </div>
        <div style={styles.card2}>
        <FlatList
          data={sectionListData2}
          renderItem={({ item }) => (
            <Text style={styles.sectionTitle}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.title}
        />
        </div>
        </div>
        <Text style={styles.title02}>SORVETES</Text>
        <FlatList
          data={sorvetesCremosos}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
        
        <FlatList
          data={sorvetesRefrescantes}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Arial",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    padding: 30,
  },
  title01: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    color: "#c15b78",
  },
  subtitle: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
    color: "#f6c8cc",
  },
  title02: {
    padding:60,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#c15b78",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  card1: {
    width: "25%",
    height: 60,
    backgroundColor: "#f6c8cc",
    borderRadius: 10,
  },
  card2: {
    width: "25%",
    height: 60,
    backgroundColor: "#f6c8cc",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 25,
    padding: 10,
    color: "#000000",
    textAlign: "center",
  },
  item: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
    justifyContent: "space-between",
    color: "#000000",
  },
});