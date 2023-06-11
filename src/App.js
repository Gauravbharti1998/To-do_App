import './App.css';
import {useState} from "react"
function App() {
  const [data, setData] = useState([]);
  const [input, setInput]  = useState("");
  const onChangeHandler=(e)=>{
    setInput(e.target.value);
  //  console.log(input);
  }
  const addValue=(e)=>{
    e.preventDefault()
    setData([...data , input]);
    
  }
  const remove=(i)=>{
   // console.log("rUN");
    setData(data.filter((element,index) => index !== i));
  }
  //console.log(data);
  return (
    <div className = 'body'>
      <h1 className = 'text2'> To Do Application</h1>
      <div> 
          <input  type = 'text1'  placeholder='Enter text here' onChange= {e => onChangeHandler(e)}/> <br/>
          <button className = 'addbtn' onClick = {e =>addValue(e)}>Add</button>
      </div>
      <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className= 'text'>
          {  data.map( (datas,i) => (
            <div key={i}>
              {datas}
              <button className= 'delbtn'  onClick = {e =>remove(i)}><i class="fa fa-trash"></i></button>
            </div>
          ))} 
          </div>
      </div>
    </div>
  );
}

export default App;
