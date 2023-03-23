import HelloWorld from "./components/HelloWorld"
import ByeWorld from "./components/ByeWorld"
import GreetEveryone from "./components/GreetEveryone"

function App() {
  return (
    <div>
      {/* <HelloWorld /> */}
      <GreetEveryone
        personName="Ishaya"
        course="React"
        duration="4hrs"
        gender="male"
      />
      {/* <ByeWorld /> */}
    </div>
  )
}

export default App
