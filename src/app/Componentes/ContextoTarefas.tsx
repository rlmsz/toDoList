'use client'
 
import { createContext, useContext, useEffect, useState } from 'react'


interface TarefaProps {
    nome: string;
    status: boolean;
}


interface TarefasContextoProps {
    tarefas: TarefaProps[];
    setTarefas: React.Dispatch<React.SetStateAction<TarefaProps[]>>;
    tarefaAtiva: number;
    setTarefaAtiva: React.Dispatch<React.SetStateAction<number>>;
  }



const TarefasContexto = createContext<TarefasContextoProps | undefined>(undefined);

export const useTarefas = () => {
    const context = useContext(TarefasContexto);
    if (!context) {
      throw new Error('useTarefas must be used within a TarefasProvider');
    }
    return context;
  };
  
export default function TarefasProvider({
    
    children,
  }: {
    children: React.ReactNode
  }) {
    //Define os states que serão utilizados por diferentes componentes
    const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
    const [tarefaAtiva,setTarefaAtiva] = useState(-1)
    //Pega os items do local storage
    useEffect(()=> {
        const storedTarefas = localStorage.getItem('tarefas');
        if (storedTarefas) {
            setTarefas(JSON.parse(storedTarefas));
        }},[])
    //Envelopa o conteudo no Provedor do Contexto
    return <TarefasContexto.Provider value={{tarefas,setTarefas,tarefaAtiva,setTarefaAtiva}}>
        {children}
        </TarefasContexto.Provider>
  }