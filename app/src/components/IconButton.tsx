
import {Pressable, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

function IconButton({onPress, icon, color}: {onPress: () => void, icon: any, color: string}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
