import Image from "next/image";
import Link from "next/link";
import styles from '../styles/blog.module.css'
import {formattearFecha} from '../utils/helpers'

export default function Post({post}) {

    const {contenido,imagen,titulo,url,publishedAt} = post;
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formattearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link 
          href={`/blog/${url}`} 
          className={styles.enlace}
        >
          Leer Post</Link>
      </div>
    </article>
  )
}
