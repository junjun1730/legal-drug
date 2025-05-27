import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "GothicA1-Bold", fontSize: 30 }}>
        Asset is Ready
      </Text>
      <Text style={{ fontFamily: "GothicA1-Light", fontSize: 30 }}>
        Asset is Ready2
      </Text>
      <Text style={{ fontFamily: "GothicA1-Regular", fontSize: 30 }}>
        Asset is Ready3
      </Text>
    </View>
  );
}
