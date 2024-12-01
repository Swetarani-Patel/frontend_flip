import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import {
  Box,
  Button,
  Modal,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RemoveModal({ item, isModalOpen, setIsModalOpen }) {
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
    setIsModalOpen(false);
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 370,
            height: 170,
            bgcolor: "white",
            boxShadow: 24,
            p: 3,
            pb: 6,
            textAlign: "center",
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              m: 1,
            }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
          <Typography variant="h6" textAlign="left">
            Remove Item
          </Typography>
          <Typography textAlign="left" marginTop="18px" color="#878787">
            Are you sure you want to remove this item?
          </Typography>

          <Button
            onClick={handleCloseModal}
            sx={{
              fontSize: "16px",
              mt: 6,
              color: "#000",
              fontWeight: "600",
              bgcolor: "#fff",
              border: "1px solid #C2C2C2",
              mr: "20px",
              p: "13px 45px",
              "&:hover": {
                bgcolor: "white",
                color: "rgb(40, 116, 240)",
              },
            }}
          >
            CANCEL
          </Button>

          <Button
            onClick={() => {
              removeItemFromCart(item.id);
            }}
            sx={{
              fontSize: "16px",
              mt: 6,
              color: "#fff",
              fontWeight: "600",
              bgcolor: "rgb(40, 116, 240)",
              p: "13px 45px",
              "&:hover": {
                bgcolor: "rgb(40, 116, 240)",
              },
            }}
          >
            REMOVE
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        style={{ zIndex: 9999, width:'44%' , padding:'15px 10px'}}
      >
        <SnackbarContent
          message={
            <span style={{ display: "flex", alignItems: "center", fontSize:'16px' }}>
              <CheckCircleIcon style={{ marginRight: "8px", color: "green" }} />
              {`Successfully removed ${item.title.longTitle} from your cart`}
            </span>
          }
        />
      </Snackbar>
    </div>
  );
}

export default RemoveModal;
