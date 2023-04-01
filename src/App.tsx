
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  const PersonName = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  const nameList = [
    {
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      firstName: 'Wonder',
      lastName: 'Woman'
    },
  ]

  return (
    <div className="App">
     <Greet name = 'Robbie' messageCount={20} isLoggedIn={false}/>
     <Person name={PersonName}/>
     <PersonList names= {nameList}/>
     <Status status= 'loading'/>
    </div>
  )
}

export default App
