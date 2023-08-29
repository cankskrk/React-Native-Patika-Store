import { StyleSheet, Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import ProductCard from "./components/ProductCard/";
import CustomInput from "./components/CustomInput/";

// data
import products_data from "./products.json";

export default function App() {
  const renderProducts = ({ item }) => <ProductCard products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => <CustomInput />}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={products_data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
