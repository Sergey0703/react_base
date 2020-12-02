import React, {useEffect,useState} from 'react';
import firebase from '../firebase';

export const WordsAllToday=()=> {
    //const WordsAll=0;
    const [words,setWords]=useState(0);
    useEffect(()=> {
        const  _now = new Date(); //.getTime();

        //const _start = Date(_now.getFullYear(), _now.getMonth(), _now.getDate(), 0, 0);
        //const _end = Date(_now.getFullYear(), _now.getMonth(), _now.getDate(), 23, 59, 59);
        var _start = new Date();
        _start.setHours(0,0,0,0);
        const _end = new Date();
        _end.setHours(23,59,59,999);
        console.log('now=',_now);
        console.log('end=',_end);
        const fetchData = async () => {
            const db = firebase.firestore();
            const data= await db.collection("words")
              //  .where('trainDate1', {isGreaterThanOrEqualTo: start})
             //   .where('trainDate1', 'isLessThanOrEqualTo', _now)
                .where('trainDate1','>', _start)
                .where('trainDate1','<', _end)
            //.where('trainDate1'=
                .get();
           // setWordsAll(data.length);
            //  console.log("dataWWW=", data.docs)
             setWords(data.docs.map(doc => ({...doc.data(), id: doc.id})));

                //setWords(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchData()
    },[])
console.log('www=',words)
const wordsAll=1;
    return (
        <div> {wordsAll}</div>

    )
}