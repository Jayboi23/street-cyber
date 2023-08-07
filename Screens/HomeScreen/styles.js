import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: 'whitesmoke'
   },
   avatar:{
    width: 40,
    height: 40,
    borderRadius: 25
   },
   inputContainer:{
    flexDirection: "row",
    marginTop: 35,
    width: '100%',
    padding:5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between'
   },
   input:{
    fontSize: 15,
    width: '92%',
   },
   header:{
    flexDirection: "row",
    alignItems: 'center',
    margin: 10,
   },
   image:{
      width: 100,
      height: 100,
   },
   card:{
      backgroundColor: 'white',
      alignItems: 'center',
      height: "100%",
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      elevation: 5, 
   },
   button:{
      backgroundColor: '#121212',
      width: "100%",
      padding: 10
   },
   mostlyViewed:{
      width: '100%',
      backgroundColor: 'white', 
      padding: 6, 
      fontSize: 15,
   },
   cardContainer:{
      flex: 1, 
      height: '30%',
      padding: 5,
      marginVertical:5,
      justifyContent: 'center',
   },
   categories:{
      width: '100%',
      backgroundColor: 'white', 
      padding: 6, 
      fontSize: 15,
   } 
});

export default styles;