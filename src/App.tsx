import { useState } from "react"
import Header from "./components/Header"
import Display from "./components/Display"
import ButtonPanel from "./ButtonPanel"

function App() {
  const [theme, setTheme] = useState('0')

  const[currentOperand, setCurrentOperand] = useState('')
  const[prevOperand, setPrevOperand] = useState('')
  const[operator, setOperator] = useState('')
  
  const addNumber = (number:string)=>{
    if (number === '.' && currentOperand.includes('.')) return;
    setCurrentOperand(currentOperand+number)
  }

  const deleteOperand = ()=>{
    setCurrentOperand(currentOperand.slice(0,-1))
  }

  const reset = ()=>{
    setPrevOperand('');
    setCurrentOperand('')
    setOperator('')
  }

  const operationSelection = (operate:string)=>{
    if(currentOperand==='')return;
    if (prevOperand!=='') {
      calculatorOperation()
    }
    setOperator(operate);
    setPrevOperand(currentOperand)
    setCurrentOperand('')
  }

  const calculatorOperation =()=>{
    const prev=parseFloat(prevOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev)||isNaN(current)) return
      
    let result;
    switch(operator){
      case '+':
      result = prev + current;
      break;
      case '-':
      result = prev - current;
      break;
      case '*':
      result = prev * current;
      break;
      case '/':
      result = prev / current;
      break;
      default:
      return;
    }
    setCurrentOperand(result.toString())
    setOperator('')
    setPrevOperand('')
  }

  const handleThemeChange = (t:string)=>{
    setTheme(t)
    const linkElement = document.getElementById('theme-link') as HTMLLinkElement;
    linkElement.href = `./src/styles/theme${t}.css`;
  }
  
  return (
    <div className={`calculator theme${theme}`}>
      <Header themeChange={handleThemeChange}></Header>
      <Display currentOperand={currentOperand} prevOperand={prevOperand} operator={operator}></Display>
      <ButtonPanel addNumber={addNumber}
       calculatorOperation={calculatorOperation}
       deleteOperand={deleteOperand}
       reset={reset}
       operationSelection={operationSelection}>
       </ButtonPanel>
    </div>
  )
}

export default App
