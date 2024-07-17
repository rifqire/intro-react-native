import React from "react";
import { Appbar } from "react-native-paper";

export default function MyAppBar({title}) {
  return (
    <Appbar.Header style={{elevation: 3}}>
      <Appbar.Content title={title} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
}
