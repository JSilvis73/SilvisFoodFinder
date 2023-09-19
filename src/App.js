import { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import FoodItem from './components/FoodItem';
import RngItem from './components/RngItem';
import Heading from './components/Heading';
import QuickList from './components/QuickList';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

function addItem(inputText){
  if (inputText==='' || inputText===null) {
    // Skip
    alert("You entered nothing!")

  } else {
    // Setting max amount of list items to 10.
    if (foodList.length >= 10) {

      alert('Too many items!')
    } else {

      // Check if item is in list
      if (foodList.includes(inputText)) {

        alert(`${inputText} is already included on the list!`)
      }
      else {

     setFoodList(prevItems => {
        return [...prevItems, inputText]
      })
    }
   }
}
}

function addCommonItem(event){
  const newFoodItem = event.target.value
  
  // Setting max amount of list items to 10.
  if (foodList.length >= 10) {
    alert('Too many items!')
  } else {
    // Check if item is in list
    if (foodList.includes(newFoodItem)) {
      alert(`${newFoodItem} is already on the list!`)
    }
    else {

    setFoodList(prevItems => {
      return [...prevItems, newFoodItem]
    })
  }
  }
}

function deleteItem(id){
  setFoodList(prevItems => {
    return prevItems.filter((item, index) => {
      return index !== id;
    })
  })
}

function clearList(){
  setFoodList([]);
  setSelectedItem('')
}

function randomizeFoodChoice(){
  const rng = Math.floor(Math.random() * foodList.length);
  const rngItem = foodList[rng];
  setSelectedItem(`You are going to ${JSON.stringify(rngItem)}!`)
  //return alert(JSON.stringify(rngItem));
}


  return (
    <div className="App">
      <div className='ShowRestaurant'>
      <h1>{selectedItem}</h1>
      </div>
      <div className='AppDisplay'>
        <div className='AppDisplayTop'>
         <Heading />
         <InputArea
         name='Add Item'
         onClickFunc={addItem}
         />
         <div className='ActionBar'>
          <button className='ClearList' onClick={clearList}>Clear List</button>
        

         <RngItem 
         onRngAction={randomizeFoodChoice}
         />
         </div>
         </div>

         <div className='AppDisplayCenter'>
      <div className='FoodListDisplay'>
       <h3>Food Options (max 10):</h3>
       <p>Click item to remove it from list</p>
          <ol>
           {foodList.map((item, index) => (
               <FoodItem 
                key={index}
                id={index}
                 text={item}
                onDelete={deleteItem}
              />
          ))}
         </ol>
      </div>
      </div>
      <div className='AppDisplayBottom'>
      <div className='QuickList'>
      <div className='QuickListHeader'>
      <h3>Quick List:</h3>
      </div>
      <QuickList  onClickAdd={addCommonItem} />
     </div>
     </div>
     </div>
    </div>
  );
}

export default App;
