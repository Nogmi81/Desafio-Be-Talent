import styles from './NavBusca.module.css'; // Importa estilos CSS Modules específicos para este componente
import Image from 'next/image'; // Importa o componente Image do Next.js para otimização de imagens
import Lupa from '/public/lupa.png'; // Importa a imagem da lupa do diretório público

export default function NavBusca({ textoBuscaDigitado, handleBusca }) {
    return (
        <section>
            <div className={styles.secao}>
                <p>Funcionários</p>
                <div className={styles.busca}>
                    {/* Input de texto para a busca */}
                    <input
                        type="text"
                        value={textoBuscaDigitado} // Valor do input controlado pelo estado
                        onChange={(event) => handleBusca(event.target.value)} // Chama a função handleBusca ao alterar o valor
                        placeholder="Pesquisar"
                        size="30"
                    />
                    {/* Wrapper para o ícone de lupa */}
                    <div className={styles.iconeWrapper}>
                        {/* Componente Image para exibir a lupa */}
                        <Image className={styles.icone} src={Lupa} alt="icone" />
                    </div>
                </div>
            </div>
        </section>
    );
}