import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const DATA = [
    { id: 1, title: "Group 1" },
    { id: 2, title: "Group 2" },
    { id: 3, title: "Group 3" },
    { id: 4, title: "Group 4" },
    { id: 5, title: "Group 5" },
    { id: 6, title: "Group 6" },
    { id: 7, title: "Group 7" },
    { id: 8, title: "Group 8" },
    { id: 9, title: "Group 9" },
    { id: 10, title: "Group 10" },
];

const GroupScrollView = () => {
  return (
    <View>
      <Text>ScrollView</Text>
      <ScrollView overScrollMode="never">
        {DATA.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default GroupScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f903ef",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
  },
});
