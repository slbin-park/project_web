import './assets/css/project.scss';
import React, { useState, useEffect } from "react";
import Fristpage from './activities/activities'
import Secondpage from './activitylist/activitylist'
import Modal from './modal/modal'
import { Route, Switch } from 'react-router-dom';



function App({ match, history }) {
    const [modal, setmodal] = useState(false)

    // 'http://172.30.1.18:8000/api/v1/activity/detail/' + id

    return (
        <div className="App">
            {modal == true ? <Modal setmodal={setmodal} /> : ''}
            <Route render={({ match, history }) => (
                <React.Fragment>
                    <Route exact path={'/mainpage'} component={Fristpage} >
                        <Fristpage history={history} />
                    </Route>
                    <Route path={'/mainpage/:id'} component={Secondpage}>
                        <Secondpage history={history} match={match} setmodal={setmodal} />
                    </Route>
                </React.Fragment>
            )
            } >
            </Route>
            <button onClick={() => setmodal(true)}>모달띄우기</button>
        </div>
    );
}

export default App;