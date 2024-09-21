"use client"
import Link from 'next/link'
import styles from '../todo.module.scss'
//Botao para adiciona a tarefa e abrir o modal
export default function AddTarefa() {
    return(
        <Link className={styles.botaoAdicionar} href={"/AddTarefa"}>Adicionar nova tarefa</Link>
    )
}