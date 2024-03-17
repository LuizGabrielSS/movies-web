import React from 'react'
import Lottie from 'react-lottie';

export default function LottieFunction({Caminho_Lottie}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Caminho_Lottie,
    };

    return(
        <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
    )

}