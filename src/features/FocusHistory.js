import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We haven't focused on anything yet</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: spacing.lg,
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },

  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
