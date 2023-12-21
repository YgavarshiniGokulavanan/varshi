import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to our gardening wonderland! 🌸 At Nature's Nurturers, we are passionate about helping you cultivate your green oasis and bring your outdoor spaces to life. 🌼 With a wide selection of high-quality seeds, plants, tools, and accessories, we are your one-stop shop for all things garden-related. 🛒 Whether you're a seasoned green thumb or a budding enthusiast, our knowledgeable staff is here to offer expert advice and guidance, ensuring your gardening experience is both successful and enjoyable. 🌱 Visit us today and let's grow something beautiful together! 🌻
        </p>
        <br />
        <p>
        At Nature's Nurturers, we are passionate about providing high-quality gardening tools and equipment to help you nurture the perfect garden oasis. Whether you're a seasoned green thumb or just starting out, we have everything you need to make your gardening experience a success. From durable shovels and rakes to state-of-the-art gardening machinery, we've got you covered.

Our commitment to quality means that we only offer products from trusted brands known for their reliability and performance. We understand that each garden and gardener is unique, so we strive to provide a diverse range of tools and equipment to suit individual needs and preferences.

Not sure what you need or looking for expert advice? Our team of gardening enthusiasts is here to provide guidance and support, ensuring that you find the perfect tools to bring your vision to life.

Join the Nature's Nurturers community and let's grow together! 🌻🔧
        </p>
      </Box>
    </Layout>
  );
};

export default About;