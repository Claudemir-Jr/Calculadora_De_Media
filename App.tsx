import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  const [av1, setAv1] = useState('2');
  const [av2, setAv2] = useState('8');
  const [media, setMedia] = useState('0');

  useEffect(() => {
    const total =(Number(av1) + Number(av2)) / 2;
    setMedia(String(total));
  }, [av1, av2]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo da Média</Text>
      <View style={styles.box}>
        <Text style={styles.text}>AV1</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAv1}
          value={String(av1)}
          />
    </View>
    <View style={styles.box}>
      <Text style={styles.text}>AV2</Text>
      <TextInput
      style={styles.input}
      onChangeText={setAv2}
      value={String(av2)}
      />
    </View>
    <View style={styles.box}>
      <Text style={styles.title}>
        Média {media} {Number(media) >= 7 ? 'Aprovado!' : Number(media) < 4 ? 'Reprovado!' : 'Prova final'}
      </Text>
    </View>
    {(Number(media) >= 4) && (Number(media) < 7) && (
      <View style={styles.box}>
        <Text style={styles.text}>Precisa tirar no mínimo: {10 - Number(media)}</Text>
      </View>
    )}
    </View>
  )
}
  const styles = StyleSheet.create({
    container:{
      marginTop: 25,
      flex: 1,
      width:'100%',
      padding: 10,
      backgroundColor: '#325',
    },
    title: {
      color: '#fff',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 24,
    },
    box:{
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 10,
    },
    text:{
      marginRight: 15,
      color: '#fff',
      fontSize: 18,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#333',
      color: '#fff',
      fontSize: 18,
    }
  })