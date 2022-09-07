import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function product() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 500,
          m: 2,
        },
      }}
    >
      <Paper variant="outlined">
        <Card sx={{
              display:"flex" ,
              minWidth:"70%",
              height:"300px",
             m:2,
        
        }}>
          <CardActionArea 
           sx={{
            display:"flex" ,
        
      
      }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
             
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body2" color="text.secondary">
             <Box>
                 قیمت :۲۰۰۰ تومان 
             </Box>
              </Typography>
            </CardContent>

            

          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
}
