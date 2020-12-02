import React,{useState} from 'react';
import firebase from '../firebase';


export const WordInput =({word})=>{
   // console.log("word=",word)

    const [name, setName]=useState(word.word);
    const onUpdate=()=>{
        const db=firebase.firestore();
       db.collection('words').doc(word.id).set({...word,word})
    }

    const onDelete=()=>{
        const db=firebase.firestore();
        db.collection('words').doc(word.id).delete();
    }

    return (
        <>


           <input value={name} onChange={e=>setName(e.target.value)}/>

        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>

        </>
    )
}