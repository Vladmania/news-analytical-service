import styled from "styled-components";

export const StockCardStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 24px;
  box-sizing: border-box;
  color: var(--tui-text-primary);
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  min-width: 128px;
  padding: 8px 12px;
  font-family: "Montserrat";
  font-size: 13px;
  margin: 0 5px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 16px;
  }
  p {
    margin: 0;
  }
`;

export const StockMarketNewsPageStyled = styled.div`
  overflow: hidden;
  .StockMarket_allParticipantX {
    display: flex;
    width: 100%;
    display: flex;
    transition: transform .5s ease-out;
    margin-bottom: 10px;
  }
  h2{
    max-width: 1240px;
    margin: 30px auto;
    font-family: "Montserrat";
  }
  .StockMarket_allParticipantY {
    display: flex;
    width: 100%;
   
    animation: stockY 20s linear infinite;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-duration: 300s;
    color: black;
  }
  .StockMarket_allParticipantX__half{
    display: flex;
    animation: stockX 20s linear infinite;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-duration: 900s;
    color: black;
    }
  @keyframes stockX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes stockY {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
