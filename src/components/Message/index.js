import './index.css'

const Message = prop => {
  const {message} = prop

  return <h1 className="header">{message}</h1>
}

export default Message
