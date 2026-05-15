// let likes = 0

// function darLike() {
//   likes = likes + 1
//   console.log(likes)
// }
import'./App.css'
import { useState } from "react";

function Card ({ titulo, descricao, imagem }) {
  const[likes, setLikes] = useState(0)

  function darLike(){
    setLikes(likes + 1)
  }

  return(
    <div className="card">
      <img src={imagem} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button onClick={darLike}>{'\u2764'}</button>
      <p>{likes} likes</p>
      
    </div>
  )
}

function App() {
  return (
    <>
      <main className="main">
        <Card titulo="Projeto 1" descricao="Meu primeiro componente" imagem="gambit.jpg" />
      </main>
    </>
  )
}
export default App