'use client'
import { useRouter } from "next/navigation";
import Tarefas from "../Componentes/tarefas";

export default function Page() {
  const router = useRouter()
    router.push('/')
    return (<Tarefas/>)
  }
  