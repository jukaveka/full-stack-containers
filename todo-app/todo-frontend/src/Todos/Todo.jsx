const Todo = ({ todo, onClickComplete, onClickDelete }) => {

  const statusInfo = (isDone) => {
    if (isDone) {
      return (
          <>
            <span>This todo is done</span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
          </>
      )
    } else {
      return (
          <>
            <span>
              This todo is not done
            </span>
            <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
          </>
      )
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {statusInfo(todo.done)}
    </div>
  )
}

export default Todo