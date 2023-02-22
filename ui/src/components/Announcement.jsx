import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center; // center items horizontally
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Above KSH 5,000</Container>
  );
};

export default Announcement;
