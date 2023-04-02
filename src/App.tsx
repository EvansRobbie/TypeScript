
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Login from './components/state/Login'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
// import User from './components/state/User'
import Counter from './components/Counter'

import Box from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import UserContextProvider from './components/context/UserContext'
import User from './components/context/User'
import MutableRef from './components/ref/MutableRef'
import Lists from './components/generic/Lists'

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
     <Greet name = 'Robbie' messageCount={20} isLoggedIn={true}/>
     <Person name={PersonName}/>
     <PersonList names= {nameList}/>
     <Status status= 'loading'/>
     <Heading>PlaceHolder</Heading>
     <Oscar>
      <Heading>Leonardo de Capri won the Oscars this Year</Heading>
     </Oscar>
     <Button handleClick={(event, id)=> console.log('Button Clicked', event, id)}/>
     <Input handleChange={(event)=> console.log('event Change', event)} value=''/>
     <Container styles={{border: '1px solid black', padding: '1rem',}}/>
     <Login/>
     {/* <User/> */}
     <Counter/>
     <ThemeContextProvider>
        <Box/>
     </ThemeContextProvider>
     <UserContextProvider>
        <User/>
     </UserContextProvider>
     <MutableRef/>
     <Lists 
     items = {['Batman', 'Superman', 'Wonder Woman']}
     onClick = {(item) =>console.log(item)}
     />
      <Lists 
     items = {[1, 2, 3]}
     onClick = {(item) =>console.log(item)}
     />
      <Lists 
     items = {[
      {
        firstName: 'Batman',
        lastName: 'Wayne'
      },
      {
        firstName: 'Clark',
        lastName: 'Kent'
      },
      {
        firstName: 'Princess',
        lastName: 'Diana'
      },
     ]}
     onClick = {(item) =>console.log(item)}
     />
    </div>
  )
}

export default App
