import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Img1 from "../../assets/k+p-logo 2.png";
import { Typography } from "@mui/material";
import PodCast2 from "../../assets/Podcasts_img2.png";
import PodCast from "../../assets/podcasts_img.png";
import Spotify from "../../assets/Spotify-logo 2.png";
import acc1 from "../../assets/acc-1.png";
import acc2 from "../../assets/acc-2.png";
import acc3 from "../../assets/acc-3.png";
import acc4 from "../../assets/acc-4.png";
import acc5 from "../../assets/acc-5.png";
import acc6 from "../../assets/acc-6.png";
import acc7 from "../../assets/acc-7.png";
import acc8 from "../../assets/acc-8.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const index = () => {
  return (
    <>
      <Stack
        sx={{
          width: { md: "100%", xs: "100%", lg: "100%" },
          height: { md: "440px", xs: "1500px" },
          background: { md: "#131131", xs: "#131131" },
        }}
      >
        <Stack
          sx={{
            width: { md: "75%", xs: "100%" },
            height: { md: "360px", xs: "auto" },
            margin: { md: "auto" },
          }}
          direction={{ md: "row", xs: "column" }}
          marginLeft={{ md: "0px", xs: "20px" }}
          display={{ md: "flex", xs: "flex" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ md: "center" }}
        >
          <Box mb={{ md: "80px" }}>
            <Box component="img" src={Img1} mt={{ md: "0px", xs: "40px" }} />
            <Box mt={{ md: "40px", xs: "40px" }}>
              <Typography
                variant="p"
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontWeight: { md: "800", xs: "800" },
                  fontFamily: { md: "Work Sans", xs: "Work Sans" },
                }}
              >
                Be Better Off Podcast
              </Typography>
            </Box>
            <Stack
              direction={{ md: "row", xs: "row" }}
              mt={{ md: "28px", xs: "20px" }}
              sx={{ width: { md: "140px", xs: "150px" } }}
              spacing={2}
            >
              <Box
                component="img"
                src={PodCast2}
                sx={{ width: { md: "32px", xs: "32px" } }}
              />
              <Box
                component="img"
                src={Spotify}
                sx={{ width: { md: "32px", xs: "32px" } }}
              />
              <Box
                component="img"
                src={PodCast}
                sx={{ width: { md: "32px", xs: "32px" } }}
              />
            </Stack>
          </Box>
          <Stack
            direction={{ md: "column", xs: "column" }}
            mt={{ md: "0px", xs: "40px" }}
          >
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontWeight: { md: "550", xs: "800" },
              }}
            >
              Company
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Our History
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Team
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Careers
            </Typography>
          </Stack>

          <Stack
            direction={{ md: "column", xs: "column" }}
            mt={{ md: "0px", xs: "40px" }}
          >
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontWeight: { md: "550", xs: "800" },
              }}
            >
              Resources
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Blog
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Podcast
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Events
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Media
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Calculators
            </Typography>
            <Typography
              variant="span"
              lineHeight={{ md: "40px", xs: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontSize: { md: "14px", xs: "14px" },
              }}
            >
              Resource Hub
            </Typography>
          </Stack>

          <Stack
            mt={{ md: "0px", xs: "40px" }}
            mb={{ md: "80px" }}
            sx={{
              width: { md: "240px", xs: "200px" },
              height: { md: "200px", xs: "200px" },
            }}
          >
            <Typography
              variant="span"
              lineHeight={{ md: "40px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontFamily: { md: "Work Sans", xs: "Work Sans" },
                fontWeight: { md: "550", xs: "800" },
              }}
            >
              Accreditations
            </Typography>
            <Stack
              direction={{ md: "row", xs: "row" }}
              mt={{ md: "12px", xs: "30px" }}
              spacing={3}
              sx={{ width: { md: "200px", xs: "200px" } }}
            >
              <Box
                component="img"
                src={acc1}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc2}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc3}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc4}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />
            </Stack>
            <Stack
              direction={{ md: "row", xs: "row" }}
              mt={{ md: "20px", xs: "30px" }}
              spacing={3}
              sx={{ width: { md: "200px", xs: "200px" } }}
            >
              <Box
                component="img"
                src={acc5}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc6}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc7}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />

              <Box
                component="img"
                src={acc8}
                sx={{
                  width: { md: "40px", xs: "40px" },
                  height: { md: "40px" },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{ color: { md: "#fff" } }}
          direction={{ md: "row", xs: "column" }}
          spacing={{ md: "40px", xs: "40px" }}
          width={{ md: "75%", xs: "100%" }}
          display={{ md: "flex", xs: "flex" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ md: "center" }}
          marginLeft={{ md: "0px", xs: "20px" }}
          margin={{ md: "auto" }}
        >
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={3}
            display={{ md: "flex", xs: "flex" }}
            justifyContent={{ md: "space-between" }}
            alignItems={{ md: "center" }}
            mt={{ xs: "40px", md: "0px" }}
          >
            <Typography color={{ md: "white", xs: "white" }}>
              @2022 kelly + Partners Chartered Accountants
            </Typography>
            <Typography color={{ md: "white", xs: "white" }}>
              Terms of Business
            </Typography>
            <Typography color={{ md: "white", xs: "white" }}    pb={{md:"7px"}}         
>
              Location{" "}
              <KeyboardArrowDownIcon
                sx={{ color: { md: "white", xs: "white" },marginLeft:{md:"2px"} }}
              />
            </Typography>
          </Stack>
          <Stack
            direction={{ md: "row", xs: "row" }}
            margin={{ xs: "auto" }}
            spacing={{ md: "20px", xs: "20px" }}
            width={{ md: "200px" }}
            height={{ md: "30px" }}
          >
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-youtube"></i>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default index;
