import React, { useState } from "react";
import { StyleSheet ,View,Image,Text,Button} from "react-native";
const CategorieItem = (props) => {
    const [quantity1, setQuantity1] = useState(0);
    const incrementQuantity1 = () => {
        setQuantity1(quantity1 + 1);
      };
    
      const decrementQuantity1 = () => {
        if (quantity1 > 1) {
          setQuantity1(quantity1 - 1);
        }
      };
return (
    
        <View style={styles.productContainer}>
       
          <View style={styles.productDetails}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>
              {props.data.title}
            </Text>
           
          </View>
        
          <View style={{marginTop:10,marginBottom:10}}>
         
            </View>
          
            <View  style={{flexDirection: 'row', borderLeftWidth: 1, marginLeft: 10, paddingLeft: 10}} >

              <Image
                style={styles.productImage}
                source={{ uri: "https://via.placeholder.com/150" }}
              />
              
                <Image
                    style={styles.productImage}
                    source={{ uri: "https://via.placeholder.com/150" }}
                    />
                    <Image
                    style={styles.productImage}
                    source={{ uri: "https://via.placeholder.com/150" }}
                    />
        </View>
        </View>

);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    productContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    productImage: {
      width: 80,
      height: 80,
      resizeMode: "cover",
      marginRight: 10,
    },
    productDetails: {
      flex: 1,
     

    },
    productName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 16,
      color: "#888",
    },
    productQuantity: {
      fontSize: 18,
      fontWeight: "bold",
    },
    separator: {
      height: 1,
      backgroundColor: "#ccc",
      marginVertical: 10,
    },
    totalPrice: {
      fontSize: 24,
      fontWeight: "bold",
      alignSelf: "flex-end",
    },
  });
  export default CategorieItem;
  