import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../../shared/components/ProfileCard";
import FloatingActionButton from "../../shared/components/FloatingActionButton";

const DATA = [
  { id: 1, empName: "Donald J. Trump", empPosition: "Full Stack Developer", empEmail: "donald@gmail.com" },
  { id: 2, empName: "Joe Biden", empPosition: "Back End Developer", empEmail: "joe@gmail.com" },
  { id: 3, empName: "Rishi Sunak", empPosition: "Front End Developer", empEmail: "rishi@gmail.com" },
  { id: 4, empName: "Keir Starmer", empPosition: "Database Administrator", empEmail: "keir@gmail.com" },
  { id: 5, empName: "Vlad Putin", empPosition: "Chief Technology Officer", empEmail: "putin@gmail.com" },
  { id: 6, empName: "Kim Jong-Un", empPosition: "Defense Officer", empEmail: "kim@gmail.com" },
  { id: 7, empName: "Zelensky", empPosition: "Finance Officer", empEmail: "zelensky@gmail.com" },
];

const GroupFlatList = ({navigation}) => {
  const renderItem = ({ item }) => (
    <ProfileCard empName={item.empName} empPosition={item.empPosition} empEmail={item.empEmail}/>
  );

  return (
    <View style={styles.container}>
      <Text>Group Members</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtrators={(item) => item.id}
      />
      
      <FloatingActionButton onPress={() => {navigation.navigate("AddMember")}}/>
    </View>
  );
};

export default GroupFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
