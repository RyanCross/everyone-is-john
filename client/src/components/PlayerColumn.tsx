import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import svg from "../assets/react.svg"
import { useState } from "react"
import { Bid } from "../App"

interface PlayerColumnProps {
    playerName: string
    playerId: number
    startingWillpower : number
    bid: Bid | null
}

export function PlayerColumn(props: PlayerColumnProps) {

    let [willpower, setWillpower] = useState(props.startingWillpower)
    let [bidAmount, setBidAmount] = useState(0)

    function handlePlus(bidAmount : number) {
        setBidAmount(bidAmount + 1)
    }

    function handleMinus(bidAmount : number) {
        setBidAmount(bidAmount - 1)
    }

    function handleSubmitBid(bidAmount : number) {
        // if bidAmount > willpower, cannot submit bid
        
    }



    return (
        <Card>
            <CardContent>
                <Typography>#Name</Typography>
                <CardMedia
                    component="img"
                    height="320px"
                    width="320px"
                    image={svg} >
                </CardMedia>
                <Box>
                    <Typography>{`Willpower: ${willpower}`}</Typography>
                </Box>
            </CardContent>
            {props.bid ? (
                <CardActionArea>
                    <Box>
                        <Typography>${bidAmount}</Typography>
                        <Button>-</Button>
                        <Button>+</Button>
                    </Box>
                    <Box>
                        <Button>Submit Bid</Button>
                    </Box>

                </CardActionArea>) : <></>}






        </Card>

    )
}