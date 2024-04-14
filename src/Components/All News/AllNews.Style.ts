import styled from "styled-components";

export const StyledAllNews = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-bottom: 90px;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

export const StyledNewsWindow = styled.div<{
  $pictureBackground: string;
  $startgrid: number;
  $endgrid: number;
  $size: number;
}>`
  grid-column-start: ${(props) => props.$startgrid};
  grid-column-end: ${(props) => props.$endgrid};

  .it_News_plast {
    display: inline-block;
    background-image: url(${(props) => props.$pictureBackground});
    border-radius: 21px;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;
    transition: 1s;
  }
  .it_News_plast:hover {
    transform: scale(1.02);
  }
  .it_News {
    display: flex;
    justify-content: end;
    flex-direction: column;
    border-radius: 21px;
    width: 100%;
    height: 100%;
    background: linear-gradient(-180deg, transparent, rgba(0, 0, 0, 0.65));
  }
  p {
    font-family: "Montserrat";
    font-weight: bold;
    font-size: ${(props) => (props.$size === 0 ? 30 : 20)}px;
    color: white;
    margin: 0;
    padding: 0 40px 20px;
  }
  .it_News__p__date {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 16px;
    padding: 0 0 40px 40px;
  }
`;
