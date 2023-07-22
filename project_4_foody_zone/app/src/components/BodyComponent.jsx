import styled from "styled-components";
import { Button } from "./NavBar";
import { BASE_URL } from "../utils";

const Body = styled.section`
  min-height: calc(100vh - 243px);
  background-image: url("/images/bg.png");
  background-size: cover;
  margin-top: -4px;
  padding-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;

const Card = styled.div`
  padding: 18px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    )
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  display: flex;
  gap:17px;
  align-items: center;
  width: 340px;
  height: 155px;
  border-radius: 20px;
  color: white;
  background: url(.png),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  h3{
    font-size: 16px;
    font-weight: 600;
  }
  p{
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 59px;
  }
  .food_info{
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30px;
    .info{
      display: flex;
      flex-direction: column;
      gap:8px;
    }
  }
`;

const BodyComponent = ( {data, loading, error} ) => {

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;

  return (
    <Body>
      <CardContainer>
        {data?.map(({ name, image, price, text }) => (
          <Card key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text.length>80? text.substring(0,65)+"...": text}</p>
              </div>
              <div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </div>
          </Card>
        ))}
      </CardContainer>
    </Body>
  );
};

export default BodyComponent;
