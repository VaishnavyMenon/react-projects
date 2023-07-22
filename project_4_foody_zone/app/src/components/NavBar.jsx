import styled from "styled-components";

const NavContainer = styled.div`
  padding: 50px 120px 30px 120px;
  background-color: #323334;
`;

const TitleContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  input {
    border: 1px solid #ff0909;
    font-size: 16px;
    background-color: #323334;
    color: #ffffff;
    border-radius: 5px;
    padding: 11px 157px 10px 15px;
    max-width: 120px;
    height: 20px;
  }
  input::placeholder {
    color: white;
  }

  @media (0 < width < 800px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Category = styled.div`
  margin-top: 54px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  padding: 6px 12px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: ${({isSelected}) => (isSelected? "600": "400")};
  border: ${({isSelected}) => (isSelected? "1px solid white": "none")};
  cursor: pointer;
  background: ${({isSelected}) => (isSelected? "#f22f2f": "#ff4343")};
  color: white;
  &:hover {
    background-color: #f22f2f;
    color: white;
  }
`;

const NavBar = ({ searchData, categoryFilter, selectedBtn }) => {
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];

  return (
    <NavContainer>
      <TitleContainer>
        <div>
          <img src="/images/Foody Zone.svg" />
        </div>
        <div className="test">
          <input onChange={searchData} placeholder="Search Food" />
        </div>
      </TitleContainer>
      <Category>
        {categories.map((category, i) => (
          <Button
            isSelected={selectedBtn === category}
            onClick={categoryFilter}
            value={category}
            key={i}
          >
            {category}
          </Button>
        ))}
      </Category>
    </NavContainer>
  );
};

export default NavBar;
