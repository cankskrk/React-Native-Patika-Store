import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#27374D",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  text_container: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  price: {
    color: "#718096",
  },
  stock: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
});
