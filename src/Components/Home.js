import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"  
                rightBtnText="Existing Inventory"
            />
            
            <Section title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />



            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                backgroundImg="solar-panel.jpg"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roof costs less than a New Roof"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                backgroundImg="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                description=""
                leftBtnText="Shop Now"
                backgroundImg="accessories.jpg"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height : 100vh;

`