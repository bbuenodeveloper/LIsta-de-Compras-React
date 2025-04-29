import { useRef } from "react"

function App() {
  const inputRef = useRef()


  function cliqueiNoBotao(){
    console.log(inputRef.current.value)
  }


  return (
    <div className="">
      <h1 className="text-red-700 p-4 font-bold text-lg">Lista de Compras</h1>
      <input ref={inputRef}  placeholder="Produto..." className="outline-none  bg-gray-300 text-white px-2 py-2 m-4 " />
      <button onClick={cliqueiNoBotao} className="bg-gray-300 px-4 py-2 rounded-full hover:bg-blue-300 cursor-pointer">Adicionar</button>
    </div>
  )
}

export default App
