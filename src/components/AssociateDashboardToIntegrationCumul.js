import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function AssociateDashboardToIntegrationCumul({newIntegrationId, assoccIntegrationDashboard, assoccIntegrationDashboardId="", assocIntegrationDash=() => alert("error"), items=[] }) {
    const [id, setId] = useState(null)

    return <>
        <Container>
            <Row style={{color: 'blue'}}>
                <Col md="12"><h3>Associate Dashboard</h3></Col>
                <Col md="2">Sended Data: </Col>
                <Col md="10" style={{color: 'black', wordBreak: 'break-all', fontSize: '13px'}}>
                {JSON.stringify({
                    integration_id: newIntegrationId,
                    dashboard_id: id
                })}
                </Col>
            </Row>
            <Row style={{color: 'blue'}}>
                <Col md="4">dataset:</Col>
                <Col md="4">Action</Col>
                <Col md="4">Associate Id</Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                {
                    items.map( (i, k ) => {
                        return <>
                        <Col key={k + '.1'} md="4" style={{wordBreak: 'break-all'}}><strong>{i.name[Object.keys(i.name)[0] ]}</strong><br/> ({i.id})</Col>
                        <Col key={k + '.2'} md="4" style={{wordBreak: 'break-all'}}>
                            <button 
                                type="button" 
                                onClick={() => { 
                                    setId(i.id)
                                    assocIntegrationDash(i.id)
                                }}
                            >
                            Crear Asociacion de Dashboard {i.id}
                            </button>
                        </Col>
                        <Col key={k + '.3'} md="4" style={{wordBreak: 'break-all'}}>{i.id == assoccIntegrationDashboardId.split(':')[0] ? assoccIntegrationDashboardId.split(':')[1] : null}</Col>
                    </>
                    })
                }
            </Row>
        </Container>

    </>
}

export default AssociateDashboardToIntegrationCumul;