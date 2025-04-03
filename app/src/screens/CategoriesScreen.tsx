import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES, CategoryInterface} from '../constants/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';
import {NavigationProps} from '../navigation/types';

function renderCategoryItem(item: CategoryInterface, onPress: () => void) {
  return (
    <CategoryGridItem title={item.title} color={item.color} onPress={onPress} />
  );
}

function CategoriesScreen({navigation}: NavigationProps<'Categories'>) {
  function onPressHandler(categoryId: string) {
    navigation.navigate('MealOverview', {categoryId: categoryId});
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
        renderCategoryItem(item, () => onPressHandler(item.id))
      }
      numColumns={2}
      contentContainerStyle={styles.contentList}
      horizontal={false}
      // ListEmptyComponent={() => }
      // columnWrapperStyle={styles.columnSpacing}
    />
  );
}

const styles = StyleSheet.create({
  contentList: {
    // flexGrow: 1,
    alignItems: 'center',
  },
  // columnSpacing: {
  //   justifyContent: 'space-between',
  // },
});

export default CategoriesScreen;
