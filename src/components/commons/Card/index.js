import React from 'react'
import { CardWrapper } from './styles/CardWrapper'
import Image from 'next/image'

export default function Card(){
    return (
        <CardWrapper>
            <CardWrapper.CardDestaque>
                <Image
                    src='/ffff.jpg'
                    alt="Picture of the author"
                    width={290}
                    height={177}
                />
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title>  
            </CardWrapper.CardDestaque>  
            <CardWrapper.CardCenter>
                <Image
                    src='/ffff.jpg'
                    alt="Picture of the author"
                    width={290}
                    height={177}
                />
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardCenter>    
            <CardWrapper.CardRight>
                <Image
                    src='/ffff.jpg'
                    alt="Picture of the author"
                    width={290}
                    height={177}
                />
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardRight>     
            <CardWrapper.CardFinal>
                <Image
                    src='/ffff.jpg'
                    alt="Picture of the author"
                    width={290}
                    height={177}
                />
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardFinal>   
        </CardWrapper>
    )
}