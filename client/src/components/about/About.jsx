
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1507738978512-35798112892c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box style={{backgroundColor:"#EDE4FF"}} >
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text style={{color:"black"}} variant="h5">

Unleash the Power of Words - Your Passport to Infinite Adventures! <br /><br />

Welcome to WriteVerse, where words come alive and ideas dance on the pages. Immerse yourself in a symphony of creativity, where curiosity knows no bounds, and inspiration awaits at every turn. Whether you're a seasoned explorer of literature or a curious wanderer seeking fresh perspectives, our digital haven is tailored just for you.

<br/><br />

But it doesn't stop there – WriteVerse is more than just a destination; it's a thriving community. Engage with fellow intellects, share your voice, and connect with like-minded souls. Let the magic of language transport you to places you've never been and unlock the doors to unexplored worlds.

So, fasten your seatbelt, and let the journey begin – an expedition where the wonders of words await!

Thank you for being a part of our journey. We hope you enjoy exploring our blog and find value in the content we create. If you have any questions, suggestions, or would like to contribute to our blog, feel free to reach out to us.
<br/><br/>
Happy reading!
<br />
                    
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;