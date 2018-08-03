import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactSpeedometer from 'react-d3-speedometer'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {constituency_data} from './resources/2017_overview_table'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" render={() =>
                <div>
                    <div className="centered">
                        <ReactSpeedometer
                            fluidWidth={true}
                            value={258}
                            minValue={0}
                            maxValue={650}
                            startColor={"blue"}
                            endColor={"red"}
                            currentValueText={"Number of Labour MPs: ${value}"}
                            segments={10}
                        />
                    </div>
                    <div>
                        <ReactTable 
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
                    </div>    
                </div>
            }
            />
        </div>
    </Router>
    ,document.getElementById('root')
);
registerServiceWorker();
