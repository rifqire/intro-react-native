import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../../shared/components/ProfileCard";
import FloatingActionButton from "../../shared/components/FloatingActionButton";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const GroupFlatList = ({ navigation }) => {
  // 4. Initialize the list, the empty states of the input, as well as dispatch
  const list = useSelector((state) => state.list.list);

  return (
    <View style={styles.container}>
      {list.length === 0 ? (
        <View>
          <LottieView
            autoPlay
            loop
            style={styles.lottieContainer}
            source={require("../../assets/empty.json")}
          />
        </View>
      ) : (
        <FlatList
          style={{ paddingHorizontal: 5, paddingTop: 10}}
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtrators={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ProfileCard
              empName={item.empName}
              empPosition={item.empPosition}
              empEmail={item.empEmail}
            />
          )}
        />
      )}
      <FloatingActionButton
        onPress={() => {
          navigation.navigate("AddMember");
        }}
      />
    </View>
  );
};

export default GroupFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieContainer: {
    alignSelf: "center",
    width: 400,
    height: 400,
  },
});
