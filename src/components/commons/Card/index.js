import React from 'react'
import { CardWrapper } from './styles/CardWrapper'
import Image from 'next/image'
import { fill } from 'lodash'
import Text from '../../fundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import styled, { css } from 'styled-components'
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes'


export default function Card(){
    return (
        <CardWrapper>
            {/* <Grid.Container>
                <Grid.Row>
                    <Grid.Col>
                        
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>   */}
                <CardWrapper.CardDestaque>
                    <CardWrapper.Image variant='destaque' src='/ffff.jpg' alt='Minha Figura'/>
                    <CardWrapper.Title variant='destaque'>
                        <Text tag="h3" variant="paragraph1">Instalura</Text>
                        {/* <Text tag="p" variant="paragraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}
                    </CardWrapper.Title>  
                </CardWrapper.CardDestaque>  
                <CardWrapper.CardCenter>
                    <CardWrapper.Image src='/ffff.jpg' alt='Minha Figura'/>
                    <CardWrapper.Title>
                        <Text tag="h3" variant="paragraph1">Projeto Center</Text>
                    </CardWrapper.Title> 
                </CardWrapper.CardCenter>    
                <CardWrapper.CardRight>
                    <CardWrapper.Image src='/ffff.jpg' alt='Minha Figura'/>
                    <CardWrapper.Title><Text tag="h3" variant="paragraph1" >Alura Quiz</Text></CardWrapper.Title> 
                </CardWrapper.CardRight>     
                <CardWrapper.CardFinal>
                    <CardWrapper.Image src='/ffff.jpg' alt='Minha Figura'/>
                    <CardWrapper.Title><Text tag="h3" variant="paragraph1">Projeto Final</Text></CardWrapper.Title> 
                </CardWrapper.CardFinal> 
            
        </CardWrapper>
    )
}