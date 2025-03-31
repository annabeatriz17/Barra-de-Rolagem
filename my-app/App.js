import React from "react";
import { StyleSheet, Text, FlatList, ScrollView, SafeAreaView, View } from "react-native";


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

const sectionListData = [
  {
    title: "Sorvetes Cremosos",
    data: ["Chcolate Belga", "Pisache", "Cookies & Cream", "Baunilha de Madagascar", "Napolitano"],
  },
  {
    title: "Sorvetes Refrescantes",
    data: ["Manga", "Limão Siciliano", "Maracujá", "Frutas Vermelhas", "Coco"],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title01}> Welcome to Gelatto & Cia</Text>
        <Text style={styles.subtitle}>The best place to buy your ice cream</Text>
        <Text style={styles.title02}>Menu</Text>
        <FlatList
          data={sectionListData}
          renderItem={({ item }) => (
            <Text style={styles.sectionTitle}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.title}
        />
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