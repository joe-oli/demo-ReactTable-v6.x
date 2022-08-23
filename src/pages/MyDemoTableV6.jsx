/*
    MyDemoTableV6 Component:
        data to display is an array

    child component:
        TBA
*/

import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

import PropTypes from 'prop-types';

import './MyDemoTableV6.css';

class MyDemoTableV6 extends Component{

  //format money
  toCurrency = (numStr) => {
    let number = parseFloat(numStr);
    // return number.toLocaleString('AUD'); //2865743.6 becomes 2,865,743.6; missing 2 dec places.
    let money = number.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    return money.substr(1); //chop of the $ sign.
  }

  //format Date/time 2018-11-22T14:43:27 ==> 2018-11-22 14:43
  toDateTimeHHmm = (dateTime) => {
    let dtArray = dateTime.split("T")
    //dtArray[0] = 2018-11-22, dtArray[1] = 14:43:27

    let dtHHmm = dtArray[0] + " " + dtArray[1].substr(0,5);
    return dtHHmm;
  }

    render() {

      const colsDefinition = [
        {
          Header: "RFQ-ID",
          accessor: "RFQID",
          width: 120
        },
        {
          Header: "Creation Date",
          accessor: "CreationDateTime",
          width: 150,
          Cell: currRow => <React.Fragment>{this.toDateTimeHHmm(currRow.value)}</React.Fragment>
        },
        {
          Header: "CAP ID",
          accessor: "CAPID",
          width: 130
        },
        {
          Header: "CAP Title",
          accessor: "CAPTitle",
          width: 150
        },
        {
          Header: "Target Amt (AUD)",
          accessor: "ContractTargetAmount",
          width: 150,
          headerStyle: {textAlign: "right"},
          style: {textAlign: "right" },
          Cell: currRow => <React.Fragment>{this.toCurrency(currRow.value)}</React.Fragment>
        },
        {
          Header: "Queued at",
          accessor: "queuedAt",
          //Cell: ({row}) => { console.log(row._original.woSeqNo); console.log(row) },
          Cell: currRow => <React.Fragment>{ currRow.value? currRow.value.substr(0,19) : ''}</React.Fragment>
        },
        {
          Header: "Select",
          accessor: 'pkSeqNo',
          maxWidth: 80,
          //id: 'links', IF YOU USE this, row.links will be the object rather than row.woSeqNo
          Cell: ({row}) => (<a href='#/' onClick={() => this.props.getRowCallback('readOne', row.pkSeqNo)} className='simple-btn'>
                                View
                            </a>
                            )
        }      
      ]
      


      //  const { props } = this;
       var rowsDataArray = this.props.dataToDisplay;

      //  console.log(props); //{propRFxReqArray: Array(4), changeAppMode: ƒ}

       if ( rowsDataArray === undefined )
        return null;


        //else we have data, continue below...
        return (

            (typeof rowsDataArray === "undefined") 
            ? <div className='alert alert-warning'>Fetching data...</div>
            : (
                !rowsDataArray.length 
                ? <div className='alert alert-danger'>No results found.</div>
                : <div>
                    <ReactTable
                            data    = {rowsDataArray}
                            columns = {colsDefinition}
                            className = "-striped -highlight"
                            sortable  = {false}
                            defaultPageSize = { rowsDataArray.length > 20 ? 20 : rowsDataArray.length}
                            showPagination  = { rowsDataArray.length > 20 ? true : false}
                            showPageSizeOptions = {false}
                    />
                </div>
			        )
      ); //end-return
    } //end-render
}


MyDemoTableV6.propTypes = {
  getRowCallback     : PropTypes.func,
  dataToDisplay   : PropTypes.array,
};


export default MyDemoTableV6;