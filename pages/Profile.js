import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Image } from "react-native-elements";


function Profile() {
  return (
    <ImageBackground
      source={require("../assets/backImage.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/1.png")}
          style={styles.profileImage}
        />
        <View style={styles.backgroundContainer}>
        <Text style={styles.headerText}>Hoga Cavan Afrinata</Text>
        <Text style={styles.id}>21120121130040</Text>
        </View>
        <View style={styles.backgroundContainer}>
        <Text style={styles.secondHeader}>Tentang saya</Text>
        </View>
        <View style={styles.desc}>
        <Text style={styles.baseText}>
          Saya adalah mahasiswa program studi S-1 Teknik Komputer di Universitas
          Diponegoro Semarang. Saya tertarik dengan bidang-bidang yang berkaitan
          dengan teknologi. Cita-cita saya membanggakan kedua orangtua.
        </Text>
        </View>
        <View style={styles.backgroundContainer}>
        <Text style={styles.secondHeader}>Pendidikan saya</Text>
        </View>
        <View style={styles.desc}>
        <Text style={styles.baseText}>• SD Islam Al-madina Semarang</Text>
        <Text style={styles.baseText}>• SMP Negeri 5 Semarang</Text>
        <Text style={styles.baseText}>• SMA Negeri 4 Semarang</Text>
        <Text style={styles.baseText}>• Universitas Diponegoro (Sekarang)</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Make it a circle
    marginBottom: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",

    borderWidth: 5, // Border width in pixels
    borderColor: "white", // Border color
    borderRadius: 10, // Border radius (optional)
    color: "white",
  },
  secondHeader:{
    
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 4, 
    borderColor: "white",
    borderRadius: 10,
    color: "white",
  },
  backgroundContainer: {
    backgroundColor: 'rgba(93, 154, 166, 0.8)', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom:10,
  }, desc: {
    marginTop:10,
    marginBottom:10,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: 10, 
    padding: 10,
  }, baseText: {
    fontWeight:"bold"
  },
  id: {
    color: "white",
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Profile;
