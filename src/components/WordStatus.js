import React,{useState} from 'react';
import firebase from '../firebase';


export const WordStatus =({word, statusTrainF, nameButton,onToggle})=>{
   // console.log("word=",word)
    //const statusTrain=statusTrainF;
    //const [statusTrain, setStatusTrain]=useState();
    //const onToggle=(id)=>{
    //    return id;
    //}
    /*
    const onStatus=()=>{
        console.log('word', word)
        //setStatusTrain(status);
        const db=firebase.firestore();
        const trainDate1=new Date();
       db.collection('words').doc(word.id).set({...word,statusTrain:statusTrainF,trainDate1})
        onToggle(word.id);
    }
*/
  //  const onDelete=()=>{
    //    const db=firebase.firestore();
      //  db.collection('words').doc(word.id).delete();
    //}

    return (
        <>


        <button onClick={()=>onToggle(word,statusTrainF)}>  {nameButton}</button>


        </>
    )
}