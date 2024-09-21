'use client'
import styles from '../../todo.module.scss'
import React from "react";
import { useTarefas } from "@/app/Componentes/ContextoTarefas";
import { useRouter } from "next/navigation";

export default function Page(){
    const [novaTarefa, setNovaTarefa] = React.useState("");
    const { tarefas, setTarefas } = useTarefas();
    const router = useRouter()

    
    function handleNovaTarefa() {
      const updatedTarefas = [...tarefas, {nome:novaTarefa,status:false}];
      setTarefas(updatedTarefas);
      localStorage.setItem('tarefas',JSON.stringify(updatedTarefas))
      setNovaTarefa("");
      router.back()
    }
    const onNovaTarefa = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNovaTarefa(event.target.value)
    }


    return (
    <>
    <div className={styles.blur}>
      </div>
      <div className={styles.modal}>
      <text>Nova tarefa</text>  
      <label className={styles.input}>Título
      <input className={styles.input} onChange={onNovaTarefa} name="NovaTarefa" type='text' placeholder='Digite'/>
      </label>
      <div className={styles.botoesModal}>
      <button
      className={styles.cancelar}
        onClick={() => {
          router.back()
        }}
      >
        Cancelar
      </button>
      <button className={styles.botaoAdicionar} onClick={handleNovaTarefa}>Adicionar</button>
      </div>
      </div>
    </>
  )
}