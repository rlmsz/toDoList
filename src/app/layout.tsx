import { Inter_Tight } from "next/font/google";
import "./global.css";
import styles from "./todo.module.scss";

import Image from "next/image";
import logo from "./logo.svg";
import TarefasProvider from "./Componentes/ContextoTarefas";
const inter_Tight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({
  children,
  add,
  excluir
}: Readonly<{
  children: React.ReactNode;
  add: React.ReactNode;
  excluir: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter_Tight.className}>
      <body className={styles.bodyBlur}>
          <div className={styles.headerContainer}>
            <div className={styles.headerConteudo}>
              <Image src={logo} width={150} height={36} alt="logo"></Image>
              <text className={styles.bemvindo}>Bem-vindo de volta, Marcus</text>
              <text className={styles.data}>
                Segunda, 01 de dezembro de 2025
              </text>
            </div>
          </div>
        <TarefasProvider>
          <>
        {children}
        {add}
        {excluir}
        </>
        </TarefasProvider>
      </body>
    </html>
  );
}
