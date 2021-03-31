import styled from 'styled-components'
import Cabecalho from '../src/components/commons/Cabecalho'
import Capa from '../src/components/commons/Capa'
import Footer from '../src/components/commons/Footer'
import WrapperProjetos from '../src/components/commons/WrapperProjetos'

export default function Home() {
  return ( 
    <div>
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <Footer />
    </div>
  )
}
