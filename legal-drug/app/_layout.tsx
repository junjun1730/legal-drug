// "GothicA1-Bold": require("../assets/fonts/GothicA1-Bold.ttf"),
// "GothicA1-Light": require("../assets/fonts/GothicA1-Light.ttf"),
// "GothicA1-Regular": require("../assets/fonts/GothicA1-Regular.ttf"),
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function assetPrepare() {
      try {
        Font.loadAsync({
          "GothicA1-Bold": require("../assets/fonts/GothicA1-Bold.ttf"),
          "GothicA1-Light": require("../assets/fonts/GothicA1-Light.ttf"),
          "GothicA1-Regular": require("../assets/fonts/GothicA1-Regular.ttf"),
        });
      } catch (e) {
        console.warn("Error loading assets", e);
      } finally {
        setAppIsReady(true);
      }
    }
    assetPrepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack />
    </View>
  );
}
