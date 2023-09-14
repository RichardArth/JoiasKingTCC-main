import './index.scss';
import App from '../../components/cabecalho/App';

function Index() {
return(
    <div className='home'>
        <App/>
        
        <div className='cabecalho-home'>
            <div className='cabecalho-cima'>
            <h4>Alianças</h4>
            <h4>Anéis</h4>
            <h4>Brincos</h4>
            <h4>Correntes</h4>
            <h4>Namorados</h4>
            <h4>Pet</h4>
            </div>

            <div className='cb-baixo'>
            <img src='./assets/images/fotoconceito.png'/>
            </div>
        </div>

        <div className='secao-02'>
            <div className='s2-titulo'>
                <hr></hr>
                <h2>Categorias</h2>
                <hr></hr>
            </div>

            
        </div>      
    </div>
)



}

export default Index;