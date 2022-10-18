import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useFonts } from 'expo-font';

import colors from '../../config/colors';
import SPACING from '../../config/SPACING';
import Header from '../../components/UIComponents/Header';
import SearchBar from '../../components/UIComponents/SearchBar';
import Categories from '../../components/Categories';
import coffees from '../../config/coffees';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Rottweiler: require('../../../assets/fonts/Rottweiler.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const menuPressMenu = () => {
    console.warn('Menu Pressed');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const addToFavorites = () => {
    console.warn('Added to Favorites');
  };
  return (
    <>
      <Header />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.tagline}>
            <Text style={styles.taglineText}>Find the best Coffee for you</Text>
          </View>
          {/* Searchbar */}
          <SearchBar />
          {/* Categories */}
          <Categories onChange={(id) => setActiveCategoryId(id)} />
          <View style={styles.imgWrapper}>
            {coffees
              .filter((coffee) => {
                if (activeCategoryId === null) {
                  return true;
                }
                return coffee.categoryId === activeCategoryId;
              })
              .map((coffee) => (
                <View key={coffee.id} style={styles.coffeeDetails}>
                  <BlurView
                    tint='dark'
                    intensity={95}
                    style={styles.imageContainer}
                  >
                    <TouchableOpacity
                      style={{
                        height: 150,
                        width: '100%',
                      }}
                    >
                      <Image source={coffee.image} style={styles.images} />
                      <View style={styles.starContainer}>
                        <BlurView
                          tint='dark'
                          intensity={70}
                          style={styles.star}
                        >
                          <Ionicons
                            style={styles.icon}
                            name='star'
                            color={colors.primary}
                            size={SPACING * 1.7}
                          />
                          <Text
                            style={{
                              color: colors.white,
                              marginLeft: SPACING / 2,
                            }}
                          >
                            {coffee.rating}
                          </Text>
                        </BlurView>
                      </View>
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={styles.coffeeText}>
                      {coffee.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.coffeeDescription}>
                      {coffee.included}
                    </Text>
                    <View style={styles.bottomRow}>
                      <View style={styles.bRow}>
                        <Text style={styles.dollarSign}>$</Text>
                        <Text style={styles.price}>{coffee.price}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={addToFavorites}
                        style={styles.addButton}
                      >
                        <Ionicons
                          name='add'
                          size={SPACING * 2}
                          color={colors.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                </View>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING * 2,
    backgroundColor: colors['dark'],
  },
  headerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    borderRadius: SPACING,
    overflow: 'hidden',
    width: SPACING * 4,
    height: SPACING * 4,
  },
  menu: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING / 2,
    borderRadius: SPACING,
  },
  user: {
    width: SPACING * 4,
    height: SPACING * 4,
    overflow: 'hidden',
    borderRadius: SPACING,
  },
  userAvatar: {
    height: '100%',
    padding: SPACING / 2,
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: SPACING,
  },
  tagline: {
    width: '90%',
    marginVertical: SPACING * 3,
  },
  taglineText: {
    color: colors.white,
    fontSize: SPACING * 5.5,
    fontWeight: '600',
    fontFamily: 'Rottweiler',
    paddingLeft: SPACING,
  },
  imgWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  coffeeDetails: {
    width: width / 2 - SPACING * 2,
    marginBottom: SPACING,
    borderRadius: SPACING * 2,
    overflow: 'hidden',
  },
  imageContainer: {
    padding: SPACING,
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: SPACING * 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SPACING * 2,
  },
  starContainer: {
    position: 'absolute',
    right: 0,
    borderBottomStartRadius: SPACING * 3,
    borderTopEndRadius: SPACING * 2,
    overflow: 'hidden',
  },
  star: {
    flexDirection: 'row',
    padding: SPACING - 2,
  },
  icon: {
    marginLeft: SPACING / 2,
  },
  ratingNumber: {
    color: colors.white,
    marginLeft: SPACING / 2,
  },
  coffeeText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: SPACING * 1.7,
    marginTop: SPACING,
    marginBottom: SPACING / 2,
  },
  coffeeDescription: {
    color: colors.secondary,
    fontSize: SPACING * 1.2,
  },
  bottomRow: {
    marginVertical: SPACING / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bRow: { flexDirection: 'row' },
  dollarSign: {
    color: colors.primary,
    marginRight: SPACING / 2,
    fontSize: SPACING * 1.6,
  },
  price: {
    color: colors.white,
    fontSize: SPACING * 1.6,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: SPACING / 2,
    borderRadius: SPACING,
  },
});
