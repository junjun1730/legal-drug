import { CustomText } from "@/components/CustomText";
import { TextInput, View } from "react-native";

export default function SigninScreen() {
  return (
    <View>
      <CustomText weight="bold" style={{ fontSize: 20, color: "blue" }}>
        로그인
      </CustomText>
      <TextInput></TextInput>
    </View>
  );
}
