import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react'


function App() {
    const [data, setdata] = useState()
    const [date, setdate] = useState()
    const [title, settitle] = useState()
    const [img, setimg] = useState()
    const [toggle, settoggle] = useState(false)
    useEffect(() => {
        if (data != undefined) {
            settoggle(true)
        }
    }, [data])
    const getapi = async () => {
        await Axios.get("http://172.30.1.18:8000/api/v1/activity/", {
        })
            .then((response) => {
                setdata(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const getproject = async (id) => {
        await Axios.get("http://172.30.1.18:8000/api/v1/activity/" + id, {
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const Showimg = () => {
        const arr = []
        if (toggle == true) {
            data.map((v) => {
                arr.push(
                    <div style={{ border: '2px solid grey', margin: '10px' }}>
                        <img onClick={() => getproject(v.id)} style={{ width: '150px', height: '100px' }} src={'http://172.30.1.18:8000' + v.thumbnail}></img>
                        <div>{v.title}</div>
                        <div>{v.year}년</div>
                        <div>{v.month}월</div>
                    </div>)
            })
            return (
                <div style={{ display: 'flex' }}>
                    {arr}
                </div>
            )
        }
        else {
            return (
                <div>

                </div>
            )
        }
    }

    return (
        <div className="App">
            <button onClick={() => getapi()}>Api 요청</button>
            <Showimg></Showimg>
        </div>
    );
}

export default App;
