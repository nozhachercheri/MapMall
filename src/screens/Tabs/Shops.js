import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,

 
  FlatList
} from "react-native";
import BoutiqueItem from "../../components/BoutiqueItem";

const Shops = () => {
  const dataa = [
    {
      title: "Bershka",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "Dior",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "Exist",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "Zara",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
 
    {
      title: "HA",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "HM",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "RAWAA",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
    {
      title: "STRANO",
      image: "https://img.freepik.com/free-photo/assortment-t-shirts_23-2147669600.jpg?w=360&t=st=1679447534~exp=1679448134~hmac=990b3efa3faf2b61f87af20f2e07353fffb98a1e4de1372a1a52768add8a0d9b",
    },
  ];
  const [data,setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
 

  useEffect(() => {
    fetchData(
      "https://947d-102-169-30-23.eu.ngrok.io/theshopp/api/v1/all-shops"
    );
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name.first
          ? item.name.first.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <View>
    <FlatList
        numColumns={4}
      data={dataa}
      renderItem={(item) => <BoutiqueItem data={item.item} style={{ width: 100, height: 100 }}/>}
   
   
   
   />
  </View>
    
  );
};




const styles = StyleSheet.create({
  textFriends: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    fontWeight: "light",
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  rectangle: {
    backgroundColor: "#D7BDE2",

    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  rectangleText: {
    color: "white",
    fontWeight: "light",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 3,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },

  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
});
export default Shops;
