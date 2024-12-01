import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { useStateContext } from "../../context/DataProvider";

function LoginDialog({ open, setOpen }) {
  const { setAccount } = useStateContext();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("user_name");
    if (userName) {
      setAccount(userName);
    }
  }, []);

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) {
      return;
    }

    setSignup({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
    setIsLogin(true);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      setLogin({
        email: "",
        password: "",
      });
      handleClose();
      setAccount(response.data.data.name);
      localStorage.setItem("user_name", response.data.data.name);
    } else {
      setError(true);
    }
  };
  const toggleSignup = () => {
    setIsLogin(!isLogin);
  };

  const imgUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box display="flex" height="67vh">
        <Box
          bgcolor="#2874f0"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="30px 35px"
          width="45%"
        >
          {isLogin ? (
            <Box>
              <Typography
                variant="h5"
                marginBottom="1rem"
                color="white"
                fontWeight="600"
              >
                Login
              </Typography>
              <Typography color="white">
                Get access to your orders, Wishlist and Recommendations
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography
                variant="h5"
                marginBottom="1rem"
                color="white"
                fontWeight="600"
              >
                Looks like you're new here!
              </Typography>
              <Typography color="white">
                Sign up with your mobile number to get started
              </Typography>
            </Box>
          )}

          <Box>
            <img src={imgUrl} alt="" width="100%" />
          </Box>
        </Box>
        {isLogin ? (
          <Box
            display="flex"
            flexDirection="column"
            padding="25px 35px"
            gap="0.9rem"
          >
            <TextField
              variant="standard"
              label="Enter Email/Mobile number"
              onChange={onValueChange}
              name="email"
              value={login.email}
            />
            {error && (
              <Typography
                color="#ff6161"
                fontSize="10px"
                lineHeight="0"
                fontWeight="600"
                marginTop="8px"
              >
                Please enter valid email or password
              </Typography>
            )}
            <TextField
              variant="standard"
              label="Enter Password"
              onChange={onValueChange}
              name="password"
              value={login.password}
            />
            <Typography sx={{ color: "#878787", fontSize: "13px" }}>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              onClick={() => {
                loginUser();
              }}
              sx={{
                textTransform: "none",
                background: "#FB641B",
                color: "#fff",
                padding: "0.5rem",
                borderRadius: "2px",
                "&:hover": {
                  background: "#e15215",
                },
              }}
            >
              Login
            </Button>
            <Typography textAlign="center" color="#878787">
              OR
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#fff",
                color: "#2874f0",
                padding: "0.5rem",
                borderRadius: "2px",
                boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
              }}
            >
              Request OTP
            </Button>
            <Typography
              onClick={toggleSignup}
              sx={{
                textAlign: "center",
                color: "#2874f0",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "3rem",
              }}
            >
              New to Flipkart? Create an account
            </Typography>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            padding="25px 35px"
            gap="0.9rem"
          >
            <TextField
              variant="standard"
              name="name"
              label="Enter Full Name"
              onChange={onInputChange}
              value={signup.name}
            />
            <TextField
              variant="standard"
              name="email"
              label="Enter Email"
              onChange={onInputChange}
              value={signup.email}
            />
            <TextField
              variant="standard"
              name="mobile"
              label="Enter Mobile Number"
              onChange={onInputChange}
              value={signup.mobile}
            />
            <TextField
              variant="standard"
              name="password"
              label="Enter Password"
              onChange={onInputChange}
              value={signup.password}
            />
            <Typography sx={{ color: "#878787", fontSize: "13px" }}>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              onClick={signupUser}
              sx={{
                textTransform: "none",
                background: "#FB641B",
                color: "#fff",
                padding: "0.5rem",
                borderRadius: "2px",
                "&:hover": {
                  background: "#e15215",
                },
              }}
            >
              Signup
            </Button>
            <Typography
              onClick={toggleSignup}
              sx={{
                textAlign: "center",
                color: "#2874f0",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Existing User? Log in
            </Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
}

export default LoginDialog;
