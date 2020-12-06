import React, {useEffect,useState,Fragment} from 'react';
import firebase from '../firebase';
import {WordStatus} from '../components/WordStatus';
import {WordsAllToday} from '../components/WordsAllToday'

export const TrainWords2=()=>{
    const [words,setWords]=useState([]);
    const [statusTrain,setStatus]=useState();

    useEffect(()=>{
/*
        const fetchData = async ()=>{
         const db= firebase.firestore();
         const data= await db.collection("words")
             .orderBy('trainDate1', 'desc') //desc asc
             .limit(1)
             //.get()
             //.then(querySnapshot => {
             //    const data = querySnapshot.docs.map(doc => doc.data());
             //    setWord(data[0]);
             //    console.log(data[0]); // array of cities objects
             //});
             .onSnapshot(snapshot=>{
                     const wordsData=[];
                     snapshot.forEach(doc=>wordsData.push({...doc.data(), id:doc.id}));
                     setWord(wordsData[0]);
             });
         //   console.log("data=",data)
         //setWords(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
         }
          fetchData()
*/

        const fetchData = async () => {
            const db = firebase.firestore();
            const unsubscribe = await db.collection("words")
                .orderBy('trainDate1', 'asc') //desc asc
                .limit(1)
                .onSnapshot(snapshot=>{
                    const wordsData=[];
                   // console.log('size=',snapshot.size);
                    console.log('in snapshot')
            snapshot.forEach(doc=>wordsData.push({...doc.data(),id:doc.id}));
                    setWords(wordsData);
                    setStatus(wordsData[0].statusTrain)
                    console.log('setStatus ')
                    }
                )
               // .then(documentSnapshot => {
               //     console.log('User exists: ', documentSnapshot.exists);
               //     if (documentSnapshot.exists) {
               //         console.log('User data: ', documentSnapshot.data());
               //     }
               // });
                //.then(querySnapshot => {
                //    querySnapshot.forEach(
                //      console.log('response')
                 //   )
                //const data = doc.data();
               // console.log('ddd=',data.docs.map(doc=>{})); // LA city object with key-value pair
               //});

                //setWords(data.docs.map(doc => ({ ...doc.data(),id: doc.id })));
                };
            fetchData()
        //statusTr=word.statusTrain1;
        //return unsubscribe;
        console.log('words3',words)


    },[])

//console.log('words2',words);
 //const   kk=Object.keys(words).length;
  //  console.log('wordsL0=',kk)
   // setStatus(words[0].statusTrain);
//    {words.map(word=>(
//      ))}
//    {word.trainDate1.seconds>0?
  //      Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(word.trainDate1[0])
    //    :""}
   // <span className={statusTr?' circlegreen ':'circlered'} ></span>
    //{setStatus(word.statusTrain)}
    return (
        <>

                All words today: <WordsAllToday/>
                 <ul>
            {words.map(word=>(



                         <li key={word.id}>
                             {console.log('statusTrainspan',statusTrain)}
                             <span className={statusTrain?' circlegreen ':'circlered'} ></span>
                            {//console.log('d=',word.trainDate1.toDate())
                                 }
                            {word.trainDate1.seconds>0?
                                      Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(word.trainDate1.toDate())
                                    :""}
                                    <br/>
                            {word.word}
                        <br/>
                            <WordStatus word={word} statusTrainF={false} nameButton={'Study'}/>
                            <WordStatus word={word} statusTrainF={true} nameButton={'I know'}/>

                       </li>
            ))}

                 </ul>
        </>
    )

}