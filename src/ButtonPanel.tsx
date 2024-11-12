
 type ButtonPanelProps={
    addNumber:(num:string)=>void;
    deleteOperand:()=>void;
    reset:()=>void;
    operationSelection:(operator:string)=>void;
    calculatorOperation:()=>void
}


const ButtonPanel = (props:ButtonPanelProps) => {
  return (
    <div className="grid-container">
        {['7', '8', '9', 'DEL','4', '5', '6', '+','1', '2', '3', '-', '.', '0', '/', '*', 'RESET', '='].map((symbol,index)=>(
            <button key={index} onClick={()=>{
                if (symbol==='Del') return props.deleteOperand();
                if (symbol==='Reset') return props.reset();
                if (symbol==='=') return props.calculatorOperation();
                if (['+', '-', '/', '/'].includes(symbol)) return props.operationSelection(symbol);
                return props.addNumber(symbol)        
            }}>{symbol}</button>
        ))}
    </div>
  )
}

export default ButtonPanel