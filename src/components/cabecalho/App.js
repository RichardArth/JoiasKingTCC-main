
import './App.scss';

export function App() {
  return (
    <div className="App">
      <div className='cabecalho'>
          
          <div className='cabecalho-esquerda'>
          <input type="text" id="search-input" placeholder="Pesquise sua Joia"/>

          <img src='./assets/images/lupa.png'></img>
          </div>

          <div className='cabecalho-meio'>
          <img src='./assets/images/logo.png'/>
          </div>

        <div className='cabecalho-direita'>
          <img className='img-perfil' src='./assets/images/pessoacadastro.png'></img>
          <button>Cadastre-se</button>

          <img src='./assets/images/carrinho.png'></img>
        </div>     
      </div>
    </div>
  );
}

export default App;
