import React, { useState } from "react";
import { StyleSheet ,View,Image,Text,Button, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import  ProduitBoutique  from  "../components/ProduitBoutique";
const BoutiqueItem = (props) => {
     const [quantity1, setQuantity1] = useState(0);
     
    
    
      
return (
    
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={{}} >
        <Image
          style={styles.productImage} source={{ uri: props.data.image }} />
       
        </TouchableOpacity>
       
        <View style={styles.productDetails}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: "black" }}>
          {props.data.title}
        </Text>
      </View>
        
  </View>
  
);
};



const styles = StyleSheet.create({
  
   productContainer:{
     marginBottom:50,
   },
    productImage: {
      width: 80,
      height: 60,
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
  });
  export default BoutiqueItem;
  