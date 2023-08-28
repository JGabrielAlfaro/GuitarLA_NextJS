import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, guitarLA, tienda de música"}
    >
     
     <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" priority={true}/>

            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem laudantium, autem itaque eaque, sapiente veritatis accusamus ad non similique quod iste consequatur dolorum quae quas reprehenderit impedit recusandae qui rem inventore sint. Ipsam accusantium repudiandae id! Veritatis excepturi at dignissimos ut inventore doloribus pariatur aspernatur autem totam, eos facilis?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem laudantium, autem itaque eaque, sapiente veritatis accusamus ad non similique quod iste consequatur dolorum quae quas reprehenderit impedit recusandae qui rem inventore sint. Ipsam accusantium repudiandae id! Veritatis excepturi at dignissimos ut inventore doloribus pariatur aspernatur autem totam, eos facilis?</p>
            </div>
        </div>
     </main>

    </Layout>
  )
}
