import Layout from "@/components/layout";
import Link from "next/link";


export default function Pagina404() {
  return (
    <div>
      <Layout
        title="Pagina no encontrada"
      >
        <p className="error">Página No encontrada</p>
        <Link
            href="/"
            className="error-enlace"
        >
            Ir a inicio
        </Link>
      </Layout>
    </div>
  )
}
