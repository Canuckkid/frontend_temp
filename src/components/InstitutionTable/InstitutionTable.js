import React, { Component } from "react";
import axios from 'axios';
import './institutiontable.css'
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import ReactTable from "react-table";
import "react-table/react-table.css";
//import SortableTbl from "react-sort-search-table";
import FilterableTable from "react-filterable-table"
//gotta do the acios thing when we get the api


/*class InstitutionTable extends Component {


  constructor(props) {
    super();
    this.state = {

      data: [
        {
            certificateNo: 1,
            firstName: 'Nicholas',
            lastName: 'Chan',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g',
            ethAdd: "1234"
      },
      {
        certificateNo: 2,
        firstName: 'cahe',
        lastName: 'angus',
        certificate: 'Bachelor of Commerce',
        notes: 'nope',
        ethAdd: "1234"
  },
    ]
    };

  }


  render() {
    const { data } = this.state;
    return (

        <SortableTbl
          tblData={data}
          tHead = {tHead}
          dKey={col}
          />
    );
  }
}


let col = [
  "firstName",
  "lastName",
  "certificate",
  "notes",
  "ethAdd"
];
let tHead = [
  "First Name",
  "Last Name",
  "Certificate",
  "Notes",
  "Etherium Address"
];
*/


//other filterable table


class InstitutionTable2 extends Component {


  constructor(props) {
    super();
    this.state = {

      data: [
        {
            firstName: 'Nicholas',
            lastName: 'Chan',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a p',
            ethAdd: "1234"
      },
      {
        firstName: 'cache',
        lastName: 'angus',
        certificate: 'Bachelor of Commerce',
        notes: 'nope',
        ethAdd: "1234"
  },
  {
    firstName: 'cache',
    lastName: 'angus',
    certificate: 'Bachelor of Commerce',
    notes: 'nope',
    ethAdd: "1234"
},
{
  firstName: 'cache',
  lastName: 'angus',
  certificate: 'Bachelor of Commerce',
  notes: 'nope',
  ethAdd: "1234"
},
{
  firstName: 'cache',
  lastName: 'angus',
  certificate: 'Bachelor of Commerce',
  notes: 'nope',
  ethAdd: "1234"
},
{
  firstName: 'cache',
  lastName: 'angus',
  certificate: 'Bachelor of Commerce',
  notes: 'nope',
  ethAdd: "1234"
},
{
  firstName: 'cache',
  lastName: 'angus',
  certificate: 'Bachelor of Commerce',
  notes: 'nope',
  ethAdd: "1234"
}
    ]
    };

  }


  render() {
    const { data } = this.state;
    return (
      // <Table data={ data }>
      //         <TableHeaderColumn dataField='firstName' isKey>First Name</TableHeaderColumn>
      //         <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
      //         <TableHeaderColumn dataField='certificate'>Certificate</TableHeaderColumn>
      //         <TableHeaderColumn dataField='notes'>Notes</TableHeaderColumn>
      //         <TableHeaderColumn dataField='ethAdd'>Eth Address</TableHeaderColumn>
      // </Table>

        <FilterableTable
          namespace = "people"
          <div>
            <table name="InstitutionTable">
        <FilterableTable
          namespace = "Database"

          initialSort="firstName"
          data = {data}
          fields = {field}
          autofocusFilter="true"
          tableClassName = "InstitutionTable"
          />
          </table>
      </div>
    );
  }
}


let field = [
  { name: 'firstName', displayName: "First Name", inputFilterable: true, sortable: true, thClassName: "firstname" },
  { name: 'lastName', displayName: "Last Name", inputFilterable: true, sortable: true, thClassName: "lastname" },
  { name: 'certificate', displayName: "Certificate", inputFilterable: true, sortable: true, thClassName: "certif"},
  { name: 'notes', displayName: "Notes", inputFilterable: true, sortable: true, thClassName: "noted" },
  { name: 'ethAdd', displayName: "Address", inputFilterable: true, exactFilterable: true, sortable: true, thClassName: "certid" }
];


export default InstitutionTable2;
