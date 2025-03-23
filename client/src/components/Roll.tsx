import { Box, Container } from '@mui/material'
import Dice from 'react-dice-roll'

export function Roll() {
    return (
        <Container>
            <Dice size="64" onRoll={(value : number) => console.log(value)} />
        </Container>


    )

}