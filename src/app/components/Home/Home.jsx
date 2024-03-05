import { Stack, Typography } from "@mui/material";
import React from "react";
import Slide from "../Slide/Slide";
import { Card, CardContent, AspectRatio } from "@mui/joy";

// Custom CSS
import "./Home.css";

// Custom Icons
import ShoesIcon from "../../assets/img/Vectorcategory-shoe-test.svg";
import JacketIcon from "../../assets/img/category-jacket-img.svg";

function Home() {
    return (
        <section id="home-section">
            <Slide />
            <div className="categories-heading-div flex">
                <Typography
                    variant="h4"
                    id="categories-heading"
                    component={"div"}
                >
                    Categories
                </Typography>
                <Typography variant="h5" id="view-all-categories">
                    View All
                </Typography>
            </div>
            <div className="category-cards-div">
                <Stack direction="row" spacing={2}>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={JacketIcon}
                                srcSet={JacketIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={ShoesIcon}
                                srcSet={ShoesIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={ShoesIcon}
                                srcSet={ShoesIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={ShoesIcon}
                                srcSet={ShoesIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={ShoesIcon}
                                srcSet={ShoesIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                    <Card
                        sx={{
                            width: 150,
                        }}
                    >
                        <div className="card-icon-div">
                            <img
                                className="card-icon"
                                src={ShoesIcon}
                                srcSet={ShoesIcon}
                                loading="lazy"
                                alt="My Shoe Icon"
                            />
                        </div>
                    </Card>
                </Stack>
            </div>
            <div className="categories-heading-div flex">
                <Typography
                    variant="h4"
                    id="categories-heading"
                    component={"div"}
                >
                    New Arrivals
                </Typography>
                <Typography variant="h5" id="view-all-categories">
                    View All
                </Typography>
            </div>
        </section>
    );
}

export default Home;
