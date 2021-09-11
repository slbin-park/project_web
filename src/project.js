import './App.css';
import './component/assets/css/project.css';
import logo from './logo.svg';
import fire from './kcal.jpg'


function App() {
    const Print_box = () => {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(
                <div className='large_box'>
                    <img src={fire} className='img_box'></img>
                    <div className='text_box'>
                        1기
                    </div>
                </div>
            )
        }
        return (
            <>
                {arr}
            </>
        )
    }
    return (
        <>
            <h1>
                Project x midasit
            </h1>
            <div className="main_box">
                <Print_box />
            </div>
        </>
    );
}

export default App;
