import styled from "styled-components";
import { popularProducts } from "../data/data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
