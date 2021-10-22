import React, { useState, useEffect, Usuarioeducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function TokenMultitenancyCumul({u1=[], u2=[], u3=[], getToken1=() => alert("error"), getToken2=() => alert("error"), getToken3=() => alert("error"), data=null}) {
    var areas1 = [];
    var areas2 = [];
    var areas3 = [];

    const select = (area, id) => {
        switch (id) {
            case 1:
                areas1.push( area)
                break;
            case 2:
                areas2.push( area)
                break;
            case 3:
                areas3.push( area)
                break;
            default:
        }
    }

    return <>

        <Container>
            <Row style={{color: 'blue'}}>
                <Col md="12"><h3>MULTITENANCY</h3></Col>
                <Col md="4" style={{wordBreak: 'break-all'}}>

                    <ul>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("AREA BANCA EMPRESA LIMA 4", 1)}}/> AREA BANCA EMPRESA LIMA 4
                        </li>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("AREA BANCA EMPRESA LIMA 4 Y PROVINCIAS", 1)}}/> AREA BANCA EMPRESA LIMA 4 Y PROVINCIAS
                        </li>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("AREA BANCA EMPRESA LIMA(1)", 1)}}/> AREA BANCA EMPRESAS LIMA(1)
                        </li>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("AREA BANCA EMPRESA LIMA(3)", 1)}}/> AREA BANCA EMPRESAS LIMA(3)
                        </li>
                    </ul>
                    <button type="button" onClick={() => getToken1(areas1)}>
                    Usuario 1 - filtrado por area en metadata
                    </button>
                </Col>
                <Col md="4" style={{wordBreak: 'break-all'}}>

                    <ul>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("Selección y Capacitación", 2)}}/> Selección y Capacitación
                        </li>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("Finanzas", 2)}}/> Finanzas
                        </li>
                        <li className="element selected" >
                        <input type="checkbox" onClick={()=>{select("TI", 2)}}/> TI
                        </li>
                    </ul>
                    <button type="button" onClick={() => getToken2(areas2)}>
                    Usuario 2 - filtrando por area en tenant Stark
                    </button>
                </Col>
                <Col md="4" style={{wordBreak: 'break-all'}}>
                    <ul>
                        <li className="element selected" >
                        Este Tenant no tiene datos
                        </li>
                    </ul>
                    <button type="button" onClick={getToken3}>
                    Usuario 3 - Sin filtrado con otro tenant
                    </button>
                </Col>
            </Row>
        </Container>
    </>
}

export default TokenMultitenancyCumul;