import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./ProductCard.style";

const ProductCard = ({ products }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: products.imgURL }} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        <Text style={styles.stock}>{products.inStock ? " " : "STOK YOK"}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
