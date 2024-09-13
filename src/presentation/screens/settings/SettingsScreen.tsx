/* eslint-disable react-hooks/exhaustive-deps */
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
// import { useProfileStore } from '../../store/profille-store';

export const SettingsScreen = () => {
  const count = useCounterStore( state => state.count);
  const incrementBy = useCounterStore( state => state.incrementBy);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`,
    });
  }, [count]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Count:{count} </Text>
        <Pressable
          style={styles.primaryButton}
          onPress={() => incrementBy(1)}
        >
          <Text>+1</Text>
        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={() => incrementBy(-1)}
        >
          <Text>-1</Text>
        </Pressable>
    </View>
  );
};
