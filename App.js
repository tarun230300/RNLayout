
import { StyleSheet, View } from 'react-native';
import Box from './components/Box';
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', flexShrink: 1}}>Box1</Box>
      <Box style={{backgroundColor: '#b65d1f', flexGrow: 1}}>Box2</Box>
      <Box style={{backgroundColor: '#1c4c56', flexShrink: 1 }}>Box3</Box>
      <Box style={{backgroundColor: '#ab9156', flexShrink: 1}}>Box4</Box>
      <Box style={{backgroundColor: '#6b0803', flexShrink: 1}}>Box5</Box>
      <Box style={{backgroundColor: '#1c4c56', flexShrink: 1}}>Box6</Box>
      <Box style={{backgroundColor: '#b65d1f', flexShrink: 1}}>Box7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection: 'row',
   alignItems:'flex-start',
   width:300,
   borderWidth: 7,
   borderColor: "seagreen"
  },
});
