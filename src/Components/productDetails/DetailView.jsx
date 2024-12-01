import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, styled } from "@mui/material";
import Items from "./Items";
import ProdDescription from "./ProdDescription";

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector(
    (state) => state.getProductDetailReducer
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Box>
      {!loading && (
        <Container container spacing={2}> 
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Items product={product} />
          </Grid>
          {product.title && (
            <Grid item lg={8} md={8} sm={12} xs={12} marginTop="50px">
              <ProdDescription product={product} />
            </Grid>
          )}
        </Container>
      )}
    </Box>
  );
}

export default DetailView;
