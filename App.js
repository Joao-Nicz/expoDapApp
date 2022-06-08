import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
        
        
        {/* Diary Page */}
        <view>
          <Text style={styles.Dtitle}>Todays Entry</Text>

          <view>
            {/* This is where the different modules go */}
            <Task />
            <Task />
          </view>

        </view>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Dpage: {
    paddingTop: 80,
    paddingHorizontal: 20
  },

  Dtitle: {
    fontSize: 24,
  },
  Ditems: {},
});
