import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const ShoppingLists = ({ db }) => {
  const [lists, setLists] = useState([]);

  const fetchShoppingLists = async () => {
    const listsDocuments = await getDocs(collection(db, "shoppinglists"));
    let newLists = [];
    listsDocuments.forEach(docObject => {
      newLists.push({ id: docObject.id, ...docObject.data() })
    });
    setLists(newLists);
  }

  useEffect(() => {
    fetchShoppingLists();
  }, [`${lists}`]);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item }) =>
        <Text>{item.name}: {item.items.join(", ")} </Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default ShoppingLists;