import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
  <>
    <ProfileCard name="Alice" age={23} isOnline={true} />
    {/* <ProfileCard name="Bob" age={21} isOnline={false} />
    <ProfileCard name="Carlos" age={25} isOnline={true} /> */}
  </>
  )
}

export default App
