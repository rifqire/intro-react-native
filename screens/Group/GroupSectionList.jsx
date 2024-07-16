import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Title 1",
    data: ["item 1", "item 2"],
  },
  {
    title: "Title 2",
    data: ["item 1", "item 2", "item 3"],
  },
  {
    title: "Title 31",
    data: ["item 1", "item 2", "item 3", "item 4", "item 5"],
  },
];

const GroupSectionList = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.item}>{item}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text>SectionList</Text>
      <SectionList
        sections={DATA}
        keyExtrators={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default GroupSectionList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      paddingHorizontal: 10
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: 'center'
    },
    header: {
      fontSize: 20,
      backgroundColor: '#f8f8f8',
      padding: 10,
      fontWeight: 'bold'
    },
    item: {
      padding: 20,
      fontSize: 18,
      backgroundColor: 'lightgray',
      marginBottom: 2
    }
  });
  