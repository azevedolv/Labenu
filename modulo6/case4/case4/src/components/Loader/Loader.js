import React from 'react'
import { Border, LoadContainer } from './styled'

const Loader = () => {
    
        return(
            <Border>
                <LoadContainer>
                    <img 
                        src={'https://louisville.edu/advising/testing/index_videolb/loading.gif/image_preview'} 
                        alt="Loading GIFs"
                    />
                </LoadContainer>
            </Border>
        )
}

export default Loader