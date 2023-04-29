
import "./App.css";
import TopBar from "./components/Topbar";

function App() {
  return (
    <>
      <TopBar />
      <div className="App">
        <header className="App-header">
          <div className="" >
             <button
             onClick={() => {console.log('click')}}
              style={
                {backgroundColor: '#0000ff',
                color: '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.2s ease-in-out',
                position: 'absolute',
                top: '65px',
                right: '10px',

                }
             } > + nueva </button>
          </div>
        
        </header>
      </div>
    </>
  );
}

export default App;


