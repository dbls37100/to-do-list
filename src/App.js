import React, {useState} from 'react';
import "./App.css";
import Item from './components/Item';



function App() {
  const [valueInput,changeValueInput] = useState("");
  const [list=[],changeList] = useState([]);

  const renderList = () => {
    return list.map((item,index) => {
      return <Item content={item} id={index} deleteItem={deleteItem} />
    })
  }
  
  const addList = (event,valueInput) => {
    event.preventDefault()
    changeList([...list, valueInput])
    changeValueInput("")
  }

  const deleteItem = (event) => {
    event.preventDefault();
    const array = list;
    array.splice(event.target.id,1);
    changeList([...array])
  }

  

  return (
    <div className="App">
      <div className="App_Block">
      <h3>To Do List</h3>
      <form className="App_Form--decoration">
        <input className="App_form-input" 
          type="text" 
          name="input" 
          value={valueInput} 
          onChange={e => changeValueInput(e.target.value)}/>
        <button className="btn_btn-dark" onClick={event => addList(event,valueInput)}>
          <div className="App_Button--Margin">
            <i class="fas fa-arrow-alt-circle-right">
            </i>
          </div>
        </button>
      </form>
      {renderList()}
      </div>
    </div>
  );
}

export default App;
