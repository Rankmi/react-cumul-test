import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import {
  CumulioContext,
  initialState,
  CumulioComponent,
  reducer
} from "react-cumulio";

import TokenMultitenancyCumul from '../components/TokenMultitenancyCumul';
import Dashboard from '../components/Dashboard';

function App() {
    const [ data, setData] = useState([]);
    const [ dataMultitenancy, setDataMultitenancy ] = useState([]);
    
    const [ u1, setU1] = useState([]);
    const [ u2, setU2] = useState([]);
    const [ u3, setU3] = useState([]);
   
    const [ssoId1, setSsoId1] = useState(null);
    const [ssoToken1, setSsoToken1] = useState(null);
    const [ssoId2, setSsoId2] = useState(null);
    const [ssoToken2, setSsoToken2] = useState(null);
    const [ssoId3, setSsoId3] = useState(null);
    const [ssoToken3, setSsoToken3] = useState(null);

    const [ssoDashboard1, setSsoDashboard1] = useState(null);
    const [ssoDashboard2, setSsoDashboard2] = useState(null);
    const [ssoDashboard3, setSsoDashboard3] = useState(null);


    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        ( async () => {
        
        })();
    }, [])


    const getTokenMultitenancy1 = ( areas ) => {
        var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user1";
        axios.post(url, {areas: areas})
        .then(res => {
            setSsoToken1( res.data.sso_token );
            setSsoId1( res.data.sso_id );
            setSsoDashboard1( res.data.dashboard_id );
        })
    }

    const getTokenMultitenancy2 = (areas) => {
        var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user2";
        axios.post(url, {areas: areas})
        .then(res => {
            console.log(res.data)
            setSsoToken2( res.data.sso_token );
            setSsoId2( res.data.sso_id );
            setSsoDashboard2( res.data.dashboard_id );
        })
    }

    const getTokenMultitenancy3 = () => {
        var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user3";
        axios.post(url, {})
        .then(res => {
            setSsoToken3( res.data.sso_token );
            setSsoId3( res.data.sso_id );
            setSsoDashboard3( res.data.dashboard_id );
        })
    }

    return ( <CumulioContext.Provider value={{ state, dispatch }}>
        <TokenMultitenancyCumul u1={u1} u2={u2} u3={u3} getToken1={getTokenMultitenancy1}  getToken2={getTokenMultitenancy2}  getToken3={getTokenMultitenancy3} data={dataMultitenancy}/>

        <Container style={{ maxWidth: "2000px"}}>
            
            <Row style={{marginTop: '30px'}}>

                <Col xl="4" lg="12">
                    <h3>Usuario 1 -  Tenant 255</h3>
                    <Row>
                        <Col xl="12" lg="12">
                            {
                                ssoDashboard1 ? <Dashboard ssoId={ssoId1} ssoToken={ssoToken1} dashboardId={ssoDashboard1}/> :null
                            }
                        </Col>
                    </Row>
                </Col>
                <Col xl="4" lg="12">
                    <h3>Usuario 2 - Tenant 112</h3>
                    <Row>
                        <Col xl="12" lg="12">
                            {
                                ssoDashboard2 ? <Dashboard ssoId={ssoId2} ssoToken={ssoToken2} dashboardId={ssoDashboard2}/> :null
                            }
                        </Col>
                    </Row>

                </Col>

                <Col xl="4" lg="12">
                    <h3>Usuario 3 - Tenant 114</h3>
                    <Row>
                        <Col xl="12" lg="12">
                            {
                                ssoDashboard3 ? <Dashboard ssoId={ssoId3} ssoToken={ssoToken3} dashboardId={ssoDashboard3}/> :null
                            }
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row style={{marginTop: '30px'}}></Row>      
        
        </Container>
    </CumulioContext.Provider> );
}

export default App;
