import { Link } from "react-router-dom"
import Forms from "./components/Forms.js"
import "./css/App.css"

function App() {
  return (
    <div className="page-container">
      <h1 className="has-text-centered is-size-3-desktop is-size-3-tablet is-size-4-mobile">Number Base Converter</h1>

      <div className="content">
        <blockquote>When we think of numbers, we often think of their decimal representation using a combination of digits 0-9. But numbers can be represented and used in other ways as well. This simple tool uses JavaScript to convert numbers that you input into their different representations. Try it!</blockquote>
      </div>

      <div className="forms-container">
        <Forms />
      </div>

      <p className="footer has-text-centered is-size-6-desktop is-size-6-tablet is-size-7-mobile">
        Made with React and Bulma • <Link to="https://www.github.com/k3nsah" target="_blank" rel="noopener noreferrer" >@k3nsah</Link>
      </p>
    </div>
  )
}
export default App;