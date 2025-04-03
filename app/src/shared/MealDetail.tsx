import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

function MealDetail({
  duration,
  complexity,
  affordability,
  style,
  styleText,
}: {
  duration: number;
  complexity: string;
  affordability: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, styleText]}>{duration}</Text>
      <Text style={[styles.detailItem, styleText]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, styleText]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});

export default MealDetail;
