
import './css/App.css';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
function App() {
  return (
    <div className="dash">
      <div className="sectionA">
        <SectionA/>
      </div>
      <div className="sectionB">
        <SectionB/>
      </div>
      <div className="sectionC">
        <SectionC/>
      </div>
    </div>
  );
}

export default App;
