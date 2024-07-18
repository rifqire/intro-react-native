import { FlatList, StyleSheet, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import LottieView from "lottie-react-native"
import GroupProfileCard from "../../components/GroupProfileCard"
import FloatingActionButton from "../../components/FloatingActionButton"
import { router } from "expo-router"

// Groups == GroupFlatList
const Groups = () => {
  const list = useSelector((state) => state.list.list)
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
          style={{ paddingHorizontal: 5, paddingTop: 10 }}
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtrators={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <GroupProfileCard
              empName={item.empName}
              empPosition={item.empPosition}
              empEmail={item.empEmail}
            />
          )}
        />
      )}
      <FloatingActionButton
        onPress={() => {
          router.navigate("(groups)/add_member")
        }}
      />
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieContainer: {
    alignSelf: "center",
    width: 400,
    height: 400,
  },
})
