import React, { useState, useEffect, useReducer } from 'react';

import {
  CumulioComponent,
} from "react-cumulio";

function Dashboard({ssoId, ssoToken, dashboardId=null}) {
    return  ssoToken ? <CumulioComponent
        dashboardId={dashboardId}
        authKey={ssoId}
        authToken={ssoToken}

        loaderBackground="rgb(238, 243, 246)"
        loaderFontColor="rgb(0, 45, 112)"
        loaderSpinnerColor="rgb(0, 54, 136)"
        loaderSpinnerBackground="rgb(194, 209, 233)"

      /> : null 
}

export default Dashboard;