import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../src/components/Itens/styles';

var list = []
var idGerar = 1

FlatListUpdate = () => {

    const [myNotes, setMyNotes] = useState("");
    const [myNotesArray, setMyNotesArray] = useState([]);
    const renderListItem = ({item}) => {
        return(
            <View style={styles.containerFlatList}>
                <Image 
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    style={styles.image}
                />
                <TouchableOpacity onPress={() => {
                    const myNotesObject = {
                        id: new Date(),
                        contar: item.contar += 1 
                    }
                    setMyNotesArray(list['contar'])
                    console.log(item.contar)
                }}>
                    <Text style={styles.text} >+</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{item.contar}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} >-</Text>
                </TouchableOpacity>
                <Text style={styles.textCurrency}>R$</Text>
                <Text style={styles.text}>12</Text>
            </View>
        )
    }

    const submit = () => {
        const myNotesObject = {
            id: idGerar,
            contar: 1 
        }
        idGerar += 1
        list.unshift(myNotesObject)
        setMyNotesArray(list)
        console.log(list)
    }

    return(
        <View>
            <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 20}}>
                Notas
            </Text>
            <TextInput 
                value={myNotes}
                onChangeText={char => setMyNotes(char)}
                style={{width: 300, height: 50, backgroundColor: '#ee0'}}
            />
            <Button title="sla" onPress={submit}></Button>
            <FlatList
                data={myNotesArray}
                renderItem={renderListItem}
                keyExtractor={item => item.id}
                extraData={myNotesArray}
            />
        </View>
    );
}

export default FlatListUpdate;