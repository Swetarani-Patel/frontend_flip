import React from "react";
import { useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { emptyCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
const CenteredContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  dispatch(emptyCart());
  const navigate = useNavigate();


  return (
    <Box>
      <CenteredContainer>
        <Typography variant="h4" style={{ textTransform: "uppercase" }}>
          Order Successful
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: "1rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Continue Shopping
        </Button>
      </CenteredContainer>
    </Box>
  );
};

export default PaymentSuccess;
