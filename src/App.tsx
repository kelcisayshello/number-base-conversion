import { Link } from "react-router-dom"
import Forms from "./components/Forms.js"
import "./css/App.css"

function App() {
  return (
    <div>
      <h1 className="has-text-centered is-size-3-desktop is-size-3-tablet is-size-4-mobile">Number Representation Converter</h1>

      <div className="content">
        <blockquote>When we think of <i>numbers</i>, we often think of their 0-9 digit decimal representation. But numbers can be represented and used in many more ways. This tool converts decimal representation to binary.</blockquote>
      </div>

      <div className="forms-container">
        <Forms />
      </div>

      <p className="footer has-text-centered">
        Made with React and Bulma • <Link to="https://www.github.com/k3nsah" target="_blank" rel="noopener noreferrer" >@k3nsah</Link>
      </p>
    </div>
  )
}
export default App;