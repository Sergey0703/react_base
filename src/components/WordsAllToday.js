import React, {useState} from 'react';
import firebase from '../firebase';

export const WordsAllToday=()=> {
    //const WordsAll=0;
    const [wordsAll,setWords]=useState(0);
    const [wordsAllFalse,setWordsFalse]=useState(0);

   // useEffect(()=> {
        const  _now = new Date(); //.getTime();

        var _start = new Date();
        _start.setHours(0,0,0,0);
        const _end = new Date();
        _end.setHours(23,59,59,999);
   //     console.log('now=',_now);
   //     console.log('end=',_end);
        const fetchData = async () => {
            const db = firebase.firestore();
            const data= await db.collection("words")
              //  .where('trainDate1', {isGreaterThanOrEqualTo: start})
             //   .where('trainDate1', 'isLessThanOrEqualTo', _now)
                .where('trainDate1','>', _start)
                .where('trainDate1','<', _end)
                 .get();
               // .then(documentReference => {
               // console.log('document reference ID')
               //  })
               // .catch(error => {
               //     console.log(error.message)
               // });
               // .then(res => console.log('size=',res.size));

                //setWords(data.docs.map(doc => ({...doc.data(), id: doc.id})));
            //const   kk=Object.keys(data.docs).length;
           // setWords(kk);
          //  console.log('kk=',typeof data.docs)
            const data2 = data.docs.map(doc => doc.data());
         //   console.log('data2=',data2);
            const allT=data2.length;
            setWords(allT);
            console.log('allT=',allT)
            const newArr = data2.filter(function(data2) {
          //      console.log('train1',data2.train1);
                return data2.train1 === false;
            });

           // console.log('l2=',newArr.length);
            //const wordsAllfalse=newArr.length;
            setWordsFalse(newArr.length);
               //  data.docs.map();
                //return train1 === false;
                   // if(doc.)
              //  console.log('1111',alldoc);
              //  });

          //  var doubles = numbers.map(function(num) {
          //      return num * 2;
          //  });


            //    console.log('var=',train1arr.length)
                //data.docs.map(doc=>(doc.train1))
        }
        fetchData()
  //  },[])
//console.log('wordsAll=',wordsAll)
//console.log('wordsL=',words.lenght)
   // const   kk=Object.keys(words).length;
//const wordsAll=kk;
    return (
        <> Words today: {wordsAll}<br/>
           Bad today: {wordsAllFalse}
        </>

    )
}