import '../../Carnival-Buttom/carnival-button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Microfront-ends Check</h1>
        <carnival-button onClick={ ()=>console.log(' react click!')}><span slot="Text">The Button!</span></carnival-button>
      </header>
    </div>
  )
}

export default App
