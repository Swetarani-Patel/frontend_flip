import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from "@mui/icons-material";
import styled from "@emotion/styled";
import { BsCalendarCheck, BsFillCircleFill } from "react-icons/bs";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 18px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

function ProdDescription({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <div>
      <Typography fontSize="19px">{product.title.longTitle}</Typography>
      <Typography
        marginTop="5px"
        color="#878787"
        fontSize="14px"
        fontWeight="600"
      >
        1,178 Ratings & 79 Reviews
        <span>
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </span>
      </Typography>
      <Typography color="#388e3c" fontSize="14px" fontWeight="600">
        Special price
      </Typography>
      <Typography>
        <span style={{ fontSize: 28, marginRight: "10px" }}>
          ₹{product.price.cost}
        </span>
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        <span
          style={{ color: "#388E3C", marginLeft: "10px", fontWeight: "600" }}
        >
          {product.price.discount} off
        </span>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          {" "}
          <StyledBadge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          {" "}
          <StyledBadge />
          Special PriceGet extra 24% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Extra 10% Off On Computer Accessories on Bought TogetherT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferSign-up for Flipkart Pay Later & get free Times Prime
          Benefits worth ₹10,000 Know More
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferPurchase now & get 1 surprise cashback coupon in
          FutureKnow More
        </Typography>
        <Typography>
          <BsCalendarCheck
            style={{ marginRight: "10px", color: "#00CC00", fontSize: "16px" }}
          />
          No cost EMI ₹1,050/month. Standard EMI also availableView Plans
        </Typography>
      </SmallText>
      <Table sx={{ overflowX: "auto" }}>
        <TableBody>
          <ColumnText>
            <TableCell sx={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40{" "}
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell sx={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell sx={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box color="#2874f0"> SuperComNet</Box>
              <Typography marginTop="12px">
                <BsFillCircleFill
                  style={{
                    marginRight: "10px",
                    fontSize: "6px",
                    color: "#c2c2c2",
                  }}
                />
                10 Days Return Policy
              </Typography>
              <Typography marginTop="10px">
                {" "}
                <BsFillCircleFill
                  style={{
                    marginRight: "10px",
                    fontSize: "6px",
                    color: "#c2c2c2",
                  }}
                />
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell
              colSpan={2}
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <img src={adURL} alt="flipkartpoints" width="390px" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell sx={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </div>
  );
}

export default ProdDescription;
