'use client'
import styles from '../../todo.module.scss'
import React from "react";
import { useRouter } from 'next/navigation';
import { useTarefas } from '@/app/Componentes/ContextoTarefas';

export default function Page(){
    const { tarefas, setTarefas,tarefaAtiva,setTarefaAtiva } = useTarefas();
    const router = useRouter()

    
    function handleApagarTarefa() {
      const updatedTarefas = tarefas;
      console.log(tarefas)
      updatedTarefas.splice(tarefaAtiva,1)
      console.log(tarefaAtiva)
      console.log(updatedTarefas)
      console.log(tarefas)
      localStorage.setItem('tarefas',JSON.stringify(updatedTarefas))
      setTarefas(updatedTarefas);
      setTarefaAtiva(-1);
      router.back()
    }


    return (
    <>
    <div className={styles.blur}>
      </div>
      <div className={styles.modalApagar}>
      <text>Deletar Tarefa</text>  
      <label className={styles.label}>Tem certeza que você deseja deletar essa tarefa?</label>
      <div className={styles.botoesModal}>
      <button
      className={styles.cancelar}
        onClick={() => {
          router.back()
        }}
      >
        Cancelar
      </button>
      <button className={styles.apagar} onClick={handleApagarTarefa}>Deletar</button>
      </div>
      </div>
    </>
  )
}