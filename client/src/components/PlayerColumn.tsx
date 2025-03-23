import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import svg from "../assets/react.svg"
import { useState } from "react"
import { Bid } from "../App"

export interface PlayerColumnProps {
    name: string
    id: number
    startingWillpower: number
    bid: Bid | null
}

export function PlayerColumn(props: PlayerColumnProps) {

    let [willpower, setWillpower] = useState(props.startingWillpower)
    let [bidAmount, setBidAmount] = useState(0)

    function handlePlus(bidAmount: number) {
        if (bidAmount < willpower) {
            setBidAmount(bidAmount + 1)
        }
    }

    function handleMinus(bidAmount: number) {
        if (bidAmount > 0) {
            setBidAmount(bidAmount - 1)
        }

    }

    function handleSubmitBid(bidAmount: number) {
        // if bidAmount > willpower, cannot submit bid
        // what show when can't submit bid.
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

                    <Button onClick={() => { handleMinus(bidAmount) }}>-</Button>
                    <Typography>{bidAmount}</Typography>
                    <Button onClick={() => { handlePlus(bidAmount) }}>+</Button>
                    <Box>
                        <Button>Submit Bid</Button>
                    </Box>

                </CardActionArea>) : <></>}
        </Card>

    )
}