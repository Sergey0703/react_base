import React, {useState, useEffect} from 'react';
import firebase from '../firebase'

export const WordsToday=()=>{

    const [words,setWords]=useState([]);
    const [knowWords,setKnowWords]=useState([]);
    const [studyWords, setStudyWords]=useState([])

    const _start = new Date();
    _start.setHours(0,0,0,0);
    const _end = new Date();
    _end.setHours(23,59,59,999);



    const fetchData = async () => {
        const db = firebase.firestore();
        const data= await db.collection("words")
            //  .where('trainDate1', {isGreaterThanOrEqualTo: start})
            //   .where('trainDate1', 'isLessThanOrEqualTo', _now)
            .where('trainDate1','>', _start)
            .where('trainDate1','<', _end)
            .get();

         const data2 = data.docs.map(doc => doc.data());
        setWords(data.docs.map(doc => ({ ...doc.data(),id: doc.id })))
        //   console.log('data2=',data2);
       // const allT=data2.length;
      //  setWords(allT);
      //  console.log('allT=',allT)
        const studyW = data2.filter(function(data2) {
           return data2.train1 === false;
//            setWordsFalse(newArr.length);
        })
        setStudyWords(studyW);

        const knowW = data2.filter(function(data2) {
            return data2.train1=== true;
//            setWordsFalse(newArr.length);
        })
        setKnowWords(knowW);

    }
    useEffect(()=>{
        fetchData()
    },[]);

        return(
        <div>


            {new Date().toLocaleDateString()}:
            <hr/>
                {studyWords.map(studyWord=>(
                    <span> {studyWord.word},</span>
                   ))}
                   <hr/>
            {knowWords.map(knowWord=>(
                <span> {knowWord.word},</span>
            ))}

        </div>

    )

}