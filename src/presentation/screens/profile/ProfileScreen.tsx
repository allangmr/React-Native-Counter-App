import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profille-store';

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name);
  const email = useProfileStore( state => state.email);
  const changeProfile = useProfileStore( state => state.changeProfile);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.title}>{ email }</Text>
        <Pressable
          style={styles.primaryButton}
          onPress={ () => useProfileStore.setState({name: 'Allan Montilla'})}
        >
          <Text>Change Name</Text>
        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={ () => useProfileStore.setState({email: 'allangmr10@gmail.com'})}
        >
          <Text>Change email</Text>
        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={ () => changeProfile('Jhon Doe', 'john.doe@google.com')}
        >
          <Text>Return to Default Values</Text>
        </Pressable>
    </View>
  );
};
