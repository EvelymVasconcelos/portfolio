import React from 'react'
import { CardWrapper } from './styles/CardWrapper'
import Image from 'next/image'
import { fill } from 'lodash'

export default function Card(){
    return (
        <CardWrapper>
            <CardWrapper.CardDestaque>
                <div style={{
                    position: "relative",
                    height: "177px",
                    width: "100%",
                }}>
                    <Image
                        src='/ffff.jpg'
                        alt="Picture of the author"
                        layout="fill"
                    />
                </div>
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title>  
            </CardWrapper.CardDestaque>  
            <CardWrapper.CardCenter>
                <div style={{
                    position: "relative",
                    height: "177px",
                    width: "100%",
                }}>
                    <Image
                        src='/ffff.jpg'
                        alt="Picture of the author"
                        layout="fill"
                    />
                </div>
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardCenter>    
            <CardWrapper.CardRight>
                <div style={{
                    position: "relative",
                    height: "177px",
                    width: "100%",
                }}>
                    <Image
                        src='/ffff.jpg'
                        alt="Picture of the author"
                        layout="fill"
                    />
                </div>
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardRight>     
            <CardWrapper.CardFinal>
                <div style={{
                    position: "relative",
                    height: "177px",
                    width: "100%",
                }}>
                    <Image
                        src='/ffff.jpg'
                        alt="Picture of the author"
                        layout="fill"
                    />
                </div>
                <CardWrapper.Title>
                <CardWrapper.Text>Projeto Report</CardWrapper.Text>
                </CardWrapper.Title> 
            </CardWrapper.CardFinal>   
        </CardWrapper>
    )
}