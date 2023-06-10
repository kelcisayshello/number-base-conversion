import { Link } from "react-router-dom"
import Forms from "./components/Forms.js"
import "./css/App.css"

function App() {
  return (
    <div className="page-container">
      <h1 className="has-text-centered is-size-3-desktop is-size-3-tablet is-size-4-mobile">Number Base Converter</h1>

      <p className="tool-description">When we think of numbers, we often think of their decimal representation using a combination of digits 0 through 9. But numbers can be represented and used in other ways as well. This simple tool uses JavaScript functionality to convert numbers into their different representations. Try it!
      </p>

      <div className="forms-container">
        <Forms />
      </div>

      <p className="footer has-text-centered is-size-6-desktop is-size-6-tablet is-size-7-mobile">
        Made with React and Bulma &nbsp; <i className="fa-solid fa-leaf"></i> &nbsp; <Link to="https://www.github.com/kelcisayshello" target="_blank" rel="noopener noreferrer" >@kelcisayshello</Link>
      </p>
    </div>
  )
}

export default App;