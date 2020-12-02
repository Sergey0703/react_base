import React, {useEffect,useState} from 'react';
import firebase from '../firebase';
import {WordInput} from '../components/WordInput'


export const Add=()=>{
    const [words,setWords]=useState([]);
    const [newWordName,setNewWordName]=useState('');
    let i=0;
    useEffect(()=>{
      /*
      const fetchData = async ()=>{
       const db= firebase.firestore();
       const data= await db.collection("words").get()
          console.log("data=",data)
       setWords(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
       }
        fetchData()
        */
        const  _now = new Date().getTime();
        const db= firebase.firestore();
         const unsubscribe=db.collection("words")
             //.where('trainDate1','<', _now)
             .orderBy('trainDate1', 'asc') //desc asc
             .limit(5)
             .onSnapshot(snapshot=>{
             const wordsData=[];
             snapshot.forEach(doc=>wordsData.push({...doc.data(), id:doc.id}));
             setWords(wordsData);
             });

         return unsubscribe;

    },[])

    //console.log("words=",words)
    const onCreate=()=>{
        const db= firebase.firestore();
        db.collection('words').add({
            word:newWordName,
           // addDae: Date(timeIntervalSince1970: 0)
             addDate: new Date(),
            trainDate1: new Date('1970-01-01T00:00:00Z')
        })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        setNewWordName('');
    }
    return(
        <>
            Add
            <input value={newWordName} onChange={(e)=>setNewWordName(e.target.value)}/>
            <button onClick={onCreate}>Create</button>
            All:{words.length}
        <ul className="list-group">
            {words.map(word=>(

              <li key={word.id}> <WordInput word={word}/>

                {word.id}
              </li>
                ))}
        </ul>
            </>
    )
}