import React, {useEffect,useState,Fragment} from 'react';
import firebase from '../firebase';
import {WordStatus} from '../components/WordStatus';
import {WordsAllToday} from '../components/WordsAllToday'

export const TrainWords=()=>{
    const [words,setWords]=useState([]);
    const [statusTrain,setStatus]=useState();
    const [showDiv,setShowDiv]=useState(false);

    useEffect(()=>{
        console.log('useEffect')
            fetchData();
        console.log('EndUseEffect')
     },[])


    const fetchData = async () => {
        const db = firebase.firestore();
        console.log('fetchData=',words)
        const data = await db.collection("words")
            .orderBy('trainDate1', 'asc') //desc asc
            .limit(1)
            .get();
           // .then((docRef) => { console.log(docRef.data) }
       // data.docs.map(doc=>({...doc.data(),id: doc.id }));

        // console.log('ddd=',data.docs.map(doc=>{})); // LA city object with key-value pair
        setWords(data.docs.map(doc => ({ ...doc.data(),id: doc.id })))
        //console.log('data=',data);
         // );
        //setWords(data.docs);
        console.log('EndfetchData=',words)
    };

    const onStatus=(word,statusTrainF)=>{
       // console.log('word', word)
        setShowDiv(false);
        console.log('onStatusStart')
        const db=firebase.firestore();
        const trainDate1=new Date();
        db.collection('words').doc(word.id).set({...word,train1:statusTrainF,trainDate1})
            .then(documentReference => {
                console.log('document reference ID')
                fetchData();
            })
            .catch(error => {
                console.log(error.message)
            })
        //onToggle(word.id);
        console.log('onStatusFinish')


    }
   //const showHide=()=>{
   //    setShowDiv(false );
   //}

    return (
        <>

                 <WordsAllToday/>
                 <ul>
            {words.map(word=>(
                         <li key={word.id}>
                             {console.log('word=',word)}
                             <span className={word.train1?' circlegreen ':'circlered'} ></span>

                            {word.trainDate1.seconds>0?
                                      Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(word.trainDate1.toDate())
                                    :""}
                                    <br/>
                            {word.word}
                                     <br/>
                             {showDiv ? <div>{word.translate}</div> : null}

                             <button id="button" onClick={() => setShowDiv(!showDiv)} className="btn btn-success">Show/Hide
                                 Translate
                             </button>
                            <WordStatus word={word} statusTrainF={false} nameButton={'Study'} onToggle={onStatus}/>
                            <WordStatus word={word} statusTrainF={true} nameButton={'I know'} onToggle={onStatus}/>

                       </li>
            ))}

                 </ul>
        </>
    )

}