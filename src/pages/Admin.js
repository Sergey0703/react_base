import React, { Component } from 'react';
import Papa from 'papaparse';
import firebase from '../firebase';

class FileReader extends React.Component {
    constructor() {
        super();
        this.state = {
            csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: false
        });
        //console.log('csv:',csvfile[0])
    };

    CSVtoFirebase =()=> {
        //  console.log('data0=',this.data[0][0])
        // for (var i=0, len=data.length; i<len; i++) {
    //}
     }





    updateData(result) {
        const db= firebase.firestore();
        var data = result.data;
        console.log(data);
       // console.log('csv:',data[0]);
        for (var i=0, len=data.length; i<len; i++) {
                  var d=data[i];
                  console.log('d=',d[0])

            db.collection('words').add({
                word:d[0],
                // addDae: Date(timeIntervalSince1970: 0)
                addDate: new Date(),
                trainDate1: new Date('1970-01-01T00:00:00Z'),
                translate: d[1],
                transcript: d[3],
                sound: d[5],
                train1: false


            })

        }
    }

    render() {
        console.log(this.state.csvfile);
        return (
            <div className="App">
                <h2>Import CSV File!</h2>
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload now!</button>

            </div>
        );
    }
}

export default FileReader;
