
type displayProps = {
    currentOperand:string;
    prevOperand:string;
    operator:string,
}

const Display = (props:displayProps) => {
  return (
    <div className="user-input">
        <div className="prev-operand">
            {props.prevOperand} {props.operator}
        </div>
        <div className="curr-operand">
            {props.currentOperand}
        </div>
    </div>
  )
}

export default Display