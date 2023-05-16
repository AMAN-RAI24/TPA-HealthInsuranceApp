import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import React from 'react'
import "./sf.css";
import carlogo from '../../Assets/Images/car.png';
import homelogo from '../../Assets/Images/home.png';
import insurance from '../../Assets/Images/life-insurance.png';
import homeCar from '../../Assets/Images/automobile.png';
import carSharing from '../../Assets/Images/car-sharing.png';
import healthInsure from '../../Assets/Images/health-insurance.png';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const SF = () => {
    return (
        <Box sx={{width:"60%",margin:"0 20%"}}>
            <Box sx={{ display: "flex", justifyContent: "center",marginBottom:"40px" }}><h1 className='service-heading'>Select A Product</h1></Box>
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={carlogo} alt=""/>
                            </Box>
                            <h2>Car Insurance</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={homeCar} alt=""/>
                            </Box>
                            <h2>Car + Home</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={homelogo} alt=""/>
                            </Box>
                            <h2>Home Insurance</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={carSharing} alt=""/>
                            </Box>
                            <h2>Car + Renters</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={insurance} alt=""/>
                            </Box>
                            <h2>Life Insurance</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Box>
                                <img id='service-img' src={healthInsure} alt=""/>
                            </Box>
                            <h2>Health Insurance</h2>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="flip-card-back">
                            <h2>Service is coming!</h2>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default SF

