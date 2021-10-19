import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function TokenCumul({ssoId, ssoToken, ssoUserId, getToken=() => alert("error"), data=null, items=[], change= () => alert("error")}) {
    return <>
        <Container>
            <Row style={{color: 'blue'}}>
                <Col md="2">SSO ID</Col>
                <Col md="2">SSO Token</Col>
                <Col md="2">SSO UserID</Col>
                <Col md="6">integration ID</Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="2" style={{wordBreak: 'break-all'}}>{ssoId}</Col>
                <Col md="2" style={{wordBreak: 'break-all'}}>{ssoToken ? ssoToken : '---------------'}</Col>
                <Col md="2" style={{wordBreak: 'break-all'}}>{ssoUserId}</Col>
                <Col md="6" style={{wordBreak: 'break-all'}}>{data.integration_id }</Col>
            </Row>
            <Row style={{color: 'blue'}}>
                <Col md="6">Dashboards</Col>
                <Col md="6">Datasets</Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="6" style={{wordBreak: 'break-all'}}>
                    <ol>
                    {
                        items.filter(i => i.type == 'dashboard').map( (i, k) => <li key={k}>
                            Name: <strong>{i.name[Object.keys(i.name)[0] ]}</strong><br/>
                            Linked Datasets: {Object.keys(i.contents.datasetLinks).map((ii, kk) => <strong key={kk}>{ii}&nbsp;</strong> )}<br/>
                            <button  type="button"  onClick={() => change(i.id)} >
                                Mostrar {i.id}
                            </button>
                        </li> )
                    }
                    </ol>
                </Col>
                <Col md="6" style={{wordBreak: 'break-all'}}>
                    <ol>
                    {
                        items.filter(i => i.type == 'dataset').map( (i, k) => <li key={k}><strong>{i.name[Object.keys(i.name)[0] ]}</strong><br/>{i.id}</li> )
                    }
                    </ol>
                </Col>
            </Row>
        </Container>
        {
            !ssoToken ? <button 
            type="button" 
            onClick={getToken}
            >
            Obtener Token de Cumul.io
            </button> : null
        }
    </>
}

export default TokenCumul;