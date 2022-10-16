import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import categories from '../config/categories';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
export default function Categories({ onChange }) {
  const [activeCategoryId, setActiveCategoryId] = useState();
  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{
            marginRight: SPACING * 2,
            marginVertical: SPACING * 2,
            alignItems: 'center',
          }}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: SPACING,
                width: SPACING,
                backgroundColor: colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
{
  /* <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      horizontal={true}
      renderItems={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={styles.categoriesButton}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View style={styles.activeCategory} />
          )}
        </TouchableOpacity>
      )}
    /> */
}
const styles = StyleSheet.create({
  categoriesButton: {
    marginRight: SPACING * 2,
    alignItems: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: SPACING * 2,
  },
  activeCategory: {
    height: SPACING,
    width: SPACING,
    backgroundColor: SPACING / 2,
    borderRadius: SPACING / 2,
    marginTop: SPACING / 2,
  },
});
