import React,{useState} from 'react';
import firebase from '../firebase';


export const WordStatus =({word, statusTrain, nameButton})=>{
   // console.log("word=",word)

    //const [statusTrain, setStatusTrain]=useState();
    const onStatus=()=>{
        console.log('word', word)
        //setStatusTrain(status);
        const db=firebase.firestore();
        const trainDate1=new Date();
       db.collection('words').doc(word.id).set({...word,statusTrain,trainDate1})
    }

  //  const onDelete=()=>{
    //    const db=firebase.firestore();
      //  db.collection('words').doc(word.id).delete();
    //}

    return (
        <>


        <button onClick={onStatus}>  {nameButton}</button>


        </>
    )
}