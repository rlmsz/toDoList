"use client"
import styles from '../todo.module.scss';
import trash from '../trash.svg'
import Image from 'next/image'
import AddTarefa from './AddTarefa';    
import { useTarefas } from './ContextoTarefas';
import Link from 'next/link';



//Exibe as tarefas de Hoje
const TarefasHoje: React.FC<{ index:number,nome: string; status: boolean; mudarStatus: () => void }> = ({ index,nome, status, mudarStatus }) => {
    const {setTarefaAtiva} = useTarefas();

    return (
        <div className={styles.tarefaBorda}>
            <div className={styles.tarefaConteudo}>
            <label className={styles.checkbox}>
            <input 
                type="checkbox"
                id={nome}
                name={nome}
                checked={status}
                onChange={mudarStatus} />
            <span className={styles.checkmark}></span>
            </label>
            <label className={styles.nomeTarefaHoje} htmlFor={nome}>{nome}</label>
            <Link className={styles.excluir} onClick={()=> setTarefaAtiva(index)}  href={"/ApagarTarefa"}><Image src={trash} width={24} height={24} alt="excluir"></Image></Link>
            </div>
        </div>
    );
};
//Exibe as tarefas já finalizadas
const TarefasFinalizadas: React.FC<{ index:number,nome: string; status: boolean; mudarStatus: () => void }> = ({ index,nome, status, mudarStatus }) => {
    const {setTarefaAtiva} = useTarefas();
    return (
        <div className={styles.tarefaBorda}>
            <div className={styles.tarefaConteudo}>
            <label className={styles.checkbox}>
            <input
                type="checkbox"
                id={nome}
                name={nome}
                checked={status}
                onChange={mudarStatus} />
            <span className={styles.checkmark}></span>
            </label>
            <label className={styles.nomeTarefaFinalizada} htmlFor={nome}>{nome}</label>
            <Link className={styles.excluir} onClick={()=> setTarefaAtiva(index)}  href={"/ApagarTarefa"}><Image src={trash} width={24} height={24} alt="excluir"></Image></Link>
            </div>
        </div>
    );
};


function Tarefas(){
    //Recupera o estado atraves do uso do contexto
    const { tarefas, setTarefas} = useTarefas();
    //Muda o status da tarefa quando ela é clicada
    const mudarStatus = (nome: string) => {
        const updatedTarefas = tarefas.map(tarefa =>
            tarefa.nome === nome ? { ...tarefa, status: !tarefa.status } : tarefa
        );
        setTarefas(updatedTarefas)
        localStorage.setItem('tarefas',JSON.stringify(updatedTarefas))};
    // Retorna as duas listas, filtrando cada tarefa
    return (
        <div className={styles.colunaCentral}>
            <div className={styles.tarefasContainer}>
                <text>Suas tarefas de hoje</text>
                <div className={styles.tarefasLista}>
                {tarefas?.filter(tarefa => !tarefa.status).map((tarefa, index) => (
                        <TarefasHoje
                            key={index}
                            index={index}
                            nome={tarefa.nome}
                            status={tarefa.status}
                            mudarStatus={() => mudarStatus(tarefa.nome)} // Pass toggle function
                        />
                    ))}
                </div>
                <text>Tarefas finalizadas</text>
                {tarefas?.filter(tarefa => tarefa.status).map((tarefa, index) => (
                        <TarefasFinalizadas index={index} key={index} nome={tarefa.nome} status={tarefa.status} mudarStatus={() => mudarStatus(tarefa.nome)} />
                    ))}
            </div>
            <AddTarefa/>
        </div>
    );
}

export default Tarefas