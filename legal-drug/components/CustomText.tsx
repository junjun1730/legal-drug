import { Text } from "react-native";

const FONT_MAP = {
  regular: "GothicA1-Regular",
  bold: "GothicA1-Bold",
  light: "GothicA1-Light",
};

type FontWeight = keyof typeof FONT_MAP;

export function CustomText({
  children,
  weight = "regular",
  style,
}: {
  children: React.ReactNode;
  weight?: FontWeight;
  style?: object;
}) {
  return (
    <Text
      style={[
        {
          fontFamily: FONT_MAP[weight],
          fontSize: 16,
          color: "#000",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
