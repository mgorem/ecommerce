import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data/data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
