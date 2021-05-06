import styled from 'styled-components'
import Cabecalho from '../src/components/commons/Cabecalho'
import Capa from '../src/components/commons/Capa'
import Footer from '../src/components/commons/Footer'
import WrapperProjetos from '../src/components/commons/WrapperProjetos'
import get from 'lodash/get';

export default function Home() {
  return ( 
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <Footer />
    </div>
  )
}
