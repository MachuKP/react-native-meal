import {ReactNode} from 'react';
import {Platform, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Card({children, style}: CardProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    // for android ripple effect
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
});

export default Card;
