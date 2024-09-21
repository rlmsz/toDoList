import Link from "next/link";
import Image from 'next/image'
import trash from '../trash.svg'
import styles from '../todo.module.scss';
//Botao para apagar a tarefa 
export default function ApagarTarefa() {
    return(
        <Link className={styles.excluir} href={"/ApagarTarefa"}><Image src={trash} width={24} height={24} alt="excluir"></Image></Link>
    )
}