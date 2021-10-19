import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function TokenMultitenancyCumul({u1=[], u2=[], u3=[], getToken1=() => alert("error"), getToken2=() => alert("error"), getToken3=() => alert("error"), data=null}) {
    return <>

        <Container>
            <Row style={{color: 'blue'}}>
                <Col md="12"><h3>MULTITENANCY</h3></Col>
            </Row>
            <Row style={{color: 'blue'}}>
                <Col md="4">User</Col>
                <Col md="8">Columns</Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="2" style={{wordBreak: 'break-all'}}>
                    <button type="button" onClick={getToken1}>
                    User 1
                    </button>
                </Col>
                <Col md="8" style={{wordBreak: 'break-all'}}>
                    <ol>{u1.map((i, k) => <li key={k}>{i.name['es']}</li>)}</ol>
                </Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="2" style={{wordBreak: 'break-all'}}>
                    <button type="button" onClick={getToken2}>
                    User 2
                    </button>
                </Col>
                <Col md="8" style={{wordBreak: 'break-all'}}>
                    <ol>{u2.map((i, k) => <li key={k}>{i.name['es']}</li>)}</ol>
                    </Col>
            </Row>
            <Row style={{fontSize: '13px'}}>
                <Col md="2" style={{wordBreak: 'break-all'}}>
                    <button type="button" onClick={getToken3}>
                    User 3
                    </button>
                </Col>
                <Col md="8" style={{wordBreak: 'break-all'}}>
                    <ol>{u3.map((i, k) => <li key={k}>{i.name['es']}</li>)}</ol>
                    </Col>
            </Row>
        </Container>
    </>
}

export default TokenMultitenancyCumul;