import './App.css';
import MealSummary from './components/meal-summarry/MealSummary';
import Meals from './components/meals/Meals';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
<Header/>    
<MealSummary/>
<Meals/>

</div>
  );
}

export default App;
