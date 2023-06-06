import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './renderer.js';
import Widget from "./Widget";

// function WidgetApp() {
//   return (
//     <div className="widget-container">
//       <div>
//         <p>New Tab</p>
//       </div>
//       <div className="addNewWidget">+</div>
//     </div>
//   );
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Widget />} />
      </Routes>
    </Router>
  );
}
