import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
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
    <ScrollView>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
           
         
            color: "black",
          }}
        >
          WOMEN MEN KIDS CURVE+PLUS HOME{" "}
        </Text>
      </TouchableOpacity>

      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>Buy 2 GET 1 OF THEM 50% OFF</Text>
      </View>
      <Image
        source={require("../../../assets/o.jpg")}
        style={[styles.image, { alignSelf: "center" }]}
      />
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
       
            color: "black",
          }}
        >
          Shop by Brand
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/louis.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
       
            color: "black",
          }}
        >
          Shop by Categorie
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/b.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/living.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/kids.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/a.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/b.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/living.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/a.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/R.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/women.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Image
          source={require("../../../assets/c.jpg")}
          style={{
            marginRight: 10,
            marginLeft: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>

      {filteredData.map((item, index) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item.picture.large }} style={styles.image} />
            <View>
              <Text style={styles.textName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.textEmail}>{item.login.username}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default Home;

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
