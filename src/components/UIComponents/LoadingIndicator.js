import React from 'react';
import {
  useWindowDimensions,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../config/colors';

export const LoadingIndicator = ({ visible = false }) => {
  return (
    visible && (
      <View style={[styles.container, { backgroundColor: colors.dark }]}>
        <View
          style={[styles.container, { backgroundColor: colors['white-smoke'] }]}
        >
          <ActivityIndicator size='large' color={colors.primary} />
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
  },
});
