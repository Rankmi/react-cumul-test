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

import TokenCumul from '../components/TokenCumul';
import TokenMultitenancyCumul from '../components/TokenMultitenancyCumul';
import CreateIntegrationCumul from '../components/CreateIntegrationCumul';
import AssociateDatasetToIntegrationCumul from '../components/AssociateDatasetToIntegrationCumul';
import AssociateDashboardToIntegrationCumul from '../components/AssociateDashboardToIntegrationCumul';
import Dashboard from '../components/Dashboard';


function App() {
  const [ data, setData] = useState([]);
  const [ dataMultitenancy, setDataMultitenancy ] = useState([]);
  const [ ssoId, setSsoId] = useState('---------------');
  const [ ssoToken, setSsoToken] = useState(null);
  const [ ssoUserId, setSsoUserId] = useState('---------------');
  const [ ssoMultitenancyId, setSsoMultitenancyId] = useState('---------------');
  const [ ssoMultitenancyToken, setSsoMultitenancyToken] = useState(null);
  const [ ssoMultitenancyUserId, setSsoMultitenancyUserId] = useState('---------------');
  const [ newIntegration, setNewIntegration] = useState('---------------');
  const [ newIntegrationId, setNewIntegrationId] = useState(null);
  const [ assoccIntegrationDataset, setAssocIntegrationDataset] = useState('--');
  const [ assoccIntegrationDatasetId, setAssocIntegrationDatasetId] = useState('--');
  const [ assoccIntegrationDashboard, setAssocIntegrationDashboard] = useState('--');
  const [ assoccIntegrationDashboardId, setAssocIntegrationDashboardId] = useState('--');
  const [ itemsSingular, setItemsSingular] = useState([]);
  const [ showedDashboardId, setShowedDashboardId] = useState(null);
  
  const [ u1, setU1] = useState([]);
  const [ u2, setU2] = useState([]);
  const [ u3, setU3] = useState([]);
  

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
    ( async () => {
    
    })();
  }, [])


  const getToken = () => {
    const url = "http://127.0.0.1:5000/api/v1/cumul/token";
      axios.post(url, {})
      .then(res => {
        setSsoId( res.data.sso_id )
        setSsoToken( res.data.sso_token )
        setSsoUserId( res.data.sso_user_id )
        setData(res.data.full)
        setItemsSingular(res.data.items.rows)
      })
  }
  const createIntegration = () => {
    /*slug integracion hrdemofinancialadmincopy*/
    const url = "http://127.0.0.1:5000/api/v1/cumul/create/integration";
      axios.post(url, {
        key: ssoId,
        token: ssoToken
      })
      .then(res => {
        setNewIntegration( JSON.stringify( res.data ) )

        setNewIntegrationId( res.data.id )
      })
  }
  const assocIntegration = (id) => {
    /*slug integracion hrdemofinancialadmincopy*/
    const url = "http://127.0.0.1:5000/api/v1/cumul/associate/integration/dataset";
      axios.post(url, {
        integration_id: newIntegrationId,
        dataset_id: id
      })
      .then(res => {
        setAssocIntegrationDataset( JSON.stringify( res.data ) )
        setAssocIntegrationDatasetId( id + ':' + res.data.id )
      })
  }

  const assocIntegrationDash = (id) => {
    /*slug integracion hrdemofinancialadmincopy*/
    const url = "http://127.0.0.1:5000/api/v1/cumul/associate/integration/dashboard";
      axios.post(url, {
        integration_id: newIntegrationId,
        dashboard_id: id
      })
      .then(res => {
        setAssocIntegrationDashboard( JSON.stringify( res.data ) )
        setAssocIntegrationDashboardId( id + ':' + res.data.id )
      })
  }

  const getTokenMultitenancy1 = () => {
    var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user1";
      axios.post(url, {})
      .then(res => {
        console.log(res.data)
        setU1(res.data.columns.rows[0].columns)
      })
  }

  const getTokenMultitenancy2 = () => {
    var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user2";
      axios.post(url, {})
      .then(res => {
        console.log(res.data)
        setU2(res.data.columns.rows[0].columns)
      })
  }

  const getTokenMultitenancy3 = () => {
    var url = "http://127.0.0.1:5000/api/v1/cumul/token/multitenancy/user3";
      axios.post(url, {})
      .then(res => {
        console.log(res.data)
        setU3(res.data.columns.rows[0].columns)
      })
  }

  return ( <CumulioContext.Provider value={{ state, dispatch }}>
    <Container style={{ maxWidth: "2000px"}}>
      
    <Row>
        <Col xl="6" lg="12">
          
          <Row>
            <Col md="12">
              <TokenCumul ssoId={ssoId} ssoToken={ssoToken} ssoUserId={ssoUserId} getToken={getToken} data={data} items={itemsSingular} change={
                (x) => setShowedDashboardId(x)
              }/>
            </Col>
          </Row>
          {ssoToken ? <Row style={{marginTop: '20px'}}>
            <Col md="12">
              <CreateIntegrationCumul newIntegration={newIntegration} newIntegrationId={newIntegrationId} ssoId={ssoId} ssoToken={ssoToken} createIntegration={createIntegration}/>
            </Col>
          </Row> : null }
          {newIntegrationId ? <Row style={{marginTop: '20px'}}>
            <Col md="12">
              <AssociateDatasetToIntegrationCumul newIntegrationId={newIntegrationId} assoccIntegrationDataset={assoccIntegrationDataset} assoccIntegrationDatasetId={assoccIntegrationDatasetId} assocIntegration={assocIntegration} items={itemsSingular.filter(i => i.type == 'dataset')}/>
            </Col>
          </Row> : null }
          {newIntegrationId ? <Row style={{marginTop: '20px'}}>
            <Col md="12">
              <AssociateDashboardToIntegrationCumul newIntegrationId={newIntegrationId} assoccIntegrationDashboard={assoccIntegrationDashboard} assoccIntegrationDashboardId={assoccIntegrationDashboardId} assocIntegrationDash={assocIntegrationDash}  items={itemsSingular.filter(i => i.type == 'dashboard')}/>
            </Col>
          </Row> : null }

        </Col>

        <Col xl="3" lg="12">

          <Row style={{marginTop: '20px'}}>
            <Col md="12" style={{color: 'blue'}}>
              Dashboards must be showed when SSO Id and Token Exists
            </Col>
            <Col lg="12" md="6">
              Custom Dashboard ({showedDashboardId})
            </Col>
            <Col lg="12" md="6">
              {ssoToken && showedDashboardId ? <Dashboard ssoId={ssoId} ssoToken={ssoToken} dashboardId={showedDashboardId}/> : null }
            </Col>

          </Row>

        </Col>

          <Col xl="3" lg="12">

            <Row style={{marginTop: '20px'}}>
              <Col md="12"  style={{color: 'blue'}}>
                Dashboards must be showed when SSO Id and Token Exists
              </Col>
              <Col lg="12" md="6">
                Example Dashboard provided by  npm cumul.io page
                <br/>
                <pre style={{fontSize: '12px'}}>{'<CumulioComponent dashboardId="035c0304-0bfe-4b7c-8c10-a4acb8eb9d76"/>'}</pre>
              </Col>
              <Col lg="12" md="6">
                <Dashboard ssoId={ssoId} ssoToken={ssoToken} dashboardId={"035c0304-0bfe-4b7c-8c10-a4acb8eb9d76"}/>
              </Col>

            </Row>

          </Col>

      </Row>

      <Row style={{marginTop: '30px'}}></Row>      
      
    </Container>
  </CumulioContext.Provider> );
}

export default App;
