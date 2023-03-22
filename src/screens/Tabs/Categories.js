import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,

 
  FlatList
} from "react-native";
import CategorieItem from "../../components/CategorieItem";

const Categorie = () => {
  const dataa = [
    {
      title: "robe",
      image: "image",
    },
    {
      title: "Manteau",
      image: "image1",
    },
    {
      title: "Pantalon",
      image: "image2",
    },
    {
      title: "Basket",
      image: "image2",
    },
    {
      title: "chemise",
      image: "image2",
    },
    {
      title: "Pul",
      image: "image2",
    },
    {
      title: "botte",
      image: "image2",
    },
    {
      title: "Top",
      image: "image2",
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
      data={dataa}
      renderItem={(item) => <CategorieItem data={item.item} />}
    />
  </View>
    
  );
};
export default Categorie;

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
