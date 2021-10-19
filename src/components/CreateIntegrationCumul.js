import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function CreateIntegrationCumul({newIntegration, newIntegrationId, createIntegration=() => alert("error"), ssoId, ssoToken, data=null}) {
    return <>
        <Container>
            <Row style={{color: 'blue'}}>
                <Col md="12"><h3>Create Integration</h3></Col>
                <Col md="2">Sended Data: </Col>
                <Col md="10" style={{color: 'black', wordBreak: 'break-all', fontSize: '13px'}}>
                    {JSON.stringify({
                        key: ssoId,
                        token: ssoToken
                    })}
                </Col>
            </Row>
            <Row style={{color: 'blue'}}>
                <Col md="6">New Integration Data</Col>
                <Col md="6">New Integration Id</Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="6" style={{wordBreak: 'break-all'}}>{newIntegration}</Col>
                <Col md="6" style={{wordBreak: 'break-all'}}>{newIntegrationId}</Col>
            </Row>
        </Container>
      <button 
        type="button" 
        onClick={createIntegration}
      >
        Crear Integracion
      </button>

    </>
}

export default CreateIntegrationCumul;