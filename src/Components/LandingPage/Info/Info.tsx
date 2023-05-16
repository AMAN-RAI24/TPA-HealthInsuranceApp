import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container } from "@mui/material";
import "./info.scss";
import image from "../../../Assets/Images/image2.jpg";

const Info = () => {
  return (
    <Container>
      <div className="heading">What do we offer?</div>
      <Box className="wrapper">
        <div className="info-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Create Group Policy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Customize the plan and design the best suited plan for your
                  organization.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  View Policy Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View the details of the policy from the various sources.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Compare Polices
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Make comparison between policies and deduce insights.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <Container
          className="second-row"
          sx={{ display: "flex", justifyContent: "center", gap: " 3%" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top Up Plans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add top up coverage to the Group Policy provided by your
                  organization.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Family Friendly
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Include Family members under the protection and cover of the
                  Group Policy.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box>
    </Container>
  );
};

export default Info;
