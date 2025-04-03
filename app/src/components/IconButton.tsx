
import {Button, Pressable, StyleSheet} from 'react-native';


function IconButton({onPress, title}: {onPress: () => void, title: string}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Button title={title} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
