import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";

// StaticRoutes | RelativePathString;
interface Props {
   title: string;
   urlBack?: Href<string>;
   isSecondaryPage: boolean;
}

const HeaderCustom = ({ title, urlBack, isSecondaryPage }: Props) => {
   const colorScheme = useColorScheme();

   return (
      <View
         style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
            backgroundColor: Colors[colorScheme ?? "light"].containerHeader,
            padding: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
         }}
      >
         {isSecondaryPage && (
            <TouchableOpacity
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  backgroundColor: "#0000003f",
                  marginRight: 10,
               }}
               onPress={() => router.replace(urlBack ?? "..")}
            >
               <Ionicons
                  style={{
                     fontSize: 18,
                     color: Colors[colorScheme ?? "light"].textTitle,
                  }}
                  name={"arrow-back-outline"}
               />
            </TouchableOpacity>
         )}

         <Text
            style={{
               fontSize: 15,
               color: "#fff",
               fontFamily: "Poppins700",
            }}
         >
            {title}
         </Text>
      </View>
   );
};

export default HeaderCustom;
