import './PageWithTable.css';

import { v4 as uuidv4 } from 'uuid';
import MyDemoTableV6 from './MyDemoTableV6';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let sampleData = [
 {
    pkSeqNo : 1,
    queuedAt : '2020-11-30T23:59:59Z',
    ContractTargetAmount: 69555.44,
    CAPTitle: "Some description goes here",
    CAPID: uuidv4(),
    CreationDateTime: "2020-11-30T23:59:59Z",
    RFQID: uuidv4(),
 },
 {
    pkSeqNo : 2,
    queuedAt : '2020-11-30T23:59:59Z',
    ContractTargetAmount: 88444.88,
    CAPTitle: "Another description goes here",
    CAPID: uuidv4(),
    CreationDateTime: "2020-11-30T23:59:59Z",
    RFQID: uuidv4(),
 },
];


const PageWithTable = () => {

    console.log('sampleData:', sampleData);

    //pass FN down to child, so we get get the selected row;
    const getRowCallback = (action, rowId) => {
        alert(`selected-Row: ${rowId}\n\n...etc.. Do stuff with selection...\naction: ${action} `)
    }

    return <div>

        <h4>My Demo Table-Component (v6)</h4>

        <MyDemoTableV6 
            dataToDisplay   ={sampleData} 
            getRowCallback  = {getRowCallback}
        />

        <hr style={{border:'1px solid purple'}}/>

        <section className="section">
            <h2>A Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt
                voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis
                voluptatibus corporis. Voluptate, cumque?</p>
        </section>

        <section className="section">
            <h2>A Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt
                voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis
                voluptatibus corporis. Voluptate, cumque?</p>
        </section>

    </div>
}

export default PageWithTable;