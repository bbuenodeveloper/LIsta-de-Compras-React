import { useRef, useState } from "react"
import { v4 } from "uuid"

function App() {
  const inputRef = useRef()

  const [produtos, setProdutos] = useState([])



  // função para pegar os dados que foi enviado pelo botão
  function cliqueiNoBotao() {

    //verificação de campo vazio
    if (inputRef.current.value === "") return

    //recebendo os produtos pelo id usando o v4 e os produtos colocando como nome e usando o useState para colocar na tela
    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value
      }, ...produtos])

    inputRef.current.value = ""

  }


  //função para deletar o produto que foi adcionado na lista
  function deletar(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }




  return (
    <div className="max-w-md mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
      <div className="flex-col flex">
        <h1 className="text-red-700 p-4 font-bold text-3xl mb-4">Lista de Compras</h1>
        <input ref={inputRef} placeholder="Produto..." type="text" className="outline-none bg-gray-300 text-black px-2 py-2 m-4 rounded-full" />
        <button onClick={cliqueiNoBotao} className="bg-gray-300 px-4 py-2 ml-4 mr-4 mb-10 rounded-full hover:bg-blue-300 cursor-pointer">Adicionar</button>
      </div>

      {/* usando o map para passar pelos produtos e colocar na tela */}
      {produtos.map((produto) => (
        <div key={produto.id} className="ml-4 pb-4 flex">
          <p className="pr-4">{produto.nome}</p>
          <button onClick={() => deletar(produto.id)}>🗑️</button>
        </div>
      ))}

    </div>

  )
}

export default App
