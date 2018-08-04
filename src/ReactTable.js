import ReactTable from 'react-table';
import "react-table/react-table.css";
import {constituency_data} from './resources/2017_overview_table'


export const dataTable = <ReactTable 
                            data = {constituency_data}
                            /*filterable
                            defaultFilterMethod={(filter, row) =>
                                String(row[filter.id]) === filter.value}*/
                            columns = {
                                [    //index,constituency_name,first_party,second_party,majority,electorate,percentage victory
                                    {
                                        Header: "index",
                                        accessor: "index",
                                        /*filterMethod: (filter, row) =>
                                        row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value)*/
                                    },
                                    {
                                        Header: "constituency_name",
                                        accessor: "constituency_name"
                                    },
                                    {
                                        Header: "first_party",
                                        accessor: "first_party"
                                    },
                                    {
                                        Header: "second_party",
                                        accessor: "second_party"
                                    },
                                    {
                                        Header: "majority",
                                        accessor: "majority"
                                    },
                                    {
                                        Header: "electorate",
                                        accessor: "electorate"
                                    },
                                    {
                                        Header: "percentage victory",
                                        accessor: "percentage victory"
                                    }
                                ]
                            }
                            /> 