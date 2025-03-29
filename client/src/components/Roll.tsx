import { Box } from '@mui/material'
import Dice from 'react-dice-roll'

export function Roll() {
    return (
        <Box sx={{ml: 1, mt: 1}}>
            <Dice size={64} onRoll={(value : number) => console.log(value)} />
        </Box>
    )
}