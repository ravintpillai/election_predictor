import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactSpeedometer from 'react-d3-speedometer'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {constituency_data} from './resources/2017_overview_table'
import {DataTable} from './DataTable'

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
                        <DataTable />
                    </div>    
                </div>
            }
            />
        </div>
    </Router>
    ,document.getElementById('root')
);
registerServiceWorker();
