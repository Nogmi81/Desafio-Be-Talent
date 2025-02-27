import React from 'react';
import { useState } from "react";
import styles from './Main.module.css'; // Importa estilos CSS Modules
import { SlArrowDown, SlArrowUp } from "react-icons/sl"; // Importa ícones de seta do site: https://react-icons.github.io/react-icons/
import { FiUser } from "react-icons/fi"; // Importa ícone de usuário

export default function Main({ funcionarios }) {
    // Estado para controlar quais linhas de detalhes estão expandidas
    const [expanded, setExpanded] = useState({});

    // Função para alternar a expansão de uma linha de detalhes
    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <main>
            <section className={styles.container}>
                <div className={styles.listaFuncionarios}>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>FOTO</th>
                                <th>NOME</th>
                                <th className={styles.hideOnMobile}>CARGO</th> {/* Oculto em telas menores */}
                                <th className={styles.hideOnMobile}>DATA DE ADMISSÃO</th> {/* Oculto em telas menores */}
                                <th className={styles.hideOnMobile}>TELEFONE</th> {/* Oculto em telas menores */}
                                <th className={styles.showOnMobile}><FiUser /></th> {/* Exibido em telas menores */}
                            </tr>
                        </thead>
                        <tbody>
                            {funcionarios.map((funcionario) => (
                                // Fragmento para evitar a criação de um elemento DOM extra
                                <React.Fragment key={funcionario.id}>
                                    <tr>
                                        <td>
                                            <img
                                                src={funcionario.image}
                                                alt={`Foto de ${funcionario.name}`}
                                                width="50"
                                                height="50"
                                            />
                                        </td>
                                        <td>{funcionario.name}</td>
                                        <td className={styles.hideOnMobile}>{funcionario.job}</td>
                                        <td className={styles.hideOnMobile}>{new Date(funcionario.admission_date).toLocaleDateString()}</td>
                                        <td className={styles.hideOnMobile}>{funcionario.phone}</td>
                                        <td className={styles.showOnMobile}>
                                            {/* Botão para expandir/recolher detalhes */}
                                            <button onClick={() => toggleExpand(funcionario.id)}>
                                                {expanded[funcionario.id] ? <SlArrowUp /> : <SlArrowDown />}
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Linha de detalhes expandida */}
                                    {expanded[funcionario.id] && (
                                        <tr className="details">
                                            <td colSpan={3}>
                                                <p><strong>Cargo:</strong> {funcionario.job}</p>
                                                <p><strong>Data de Admissão:</strong> {new Date(funcionario.admission_date).toLocaleDateString()}</p>
                                                <p><strong>Telefone:</strong> {funcionario.phone}</p>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}