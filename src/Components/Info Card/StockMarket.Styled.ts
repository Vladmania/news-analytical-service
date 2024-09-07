import styled from "styled-components";

export const StockCardStyled = styled.div<{
  $pictureColor: string
}>`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 24px;
  box-sizing: border-box;
  color: black;
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
  .priceСhange{
    color: ${(props) => props.$pictureColor};
  }
`
export const InfoCardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  font-size: 15px;
  line-height: 10px;
  border-bottom: 1px #cbc9c9 solid;
  padding: 16px 0;
  img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 20px 0 0;
  }
  .infocard_name{
    display: flex;
    align-items: center;
    grid-column-start: 1;
  }
  .company__div__chart{
    width: 142px;
    height: 71px;
    grid-column-start: 7;
}
.infocard_price{
  grid-column-start: 3;
}
.infocard_changes_per_day{
  grid-column-start: 5;
}
.infocard_changes_per_day_up{
  color: #00CC00;
}
.infocard_changes_per_day_down{
  color: #FF0000;
}
.infocard_price__p{
  font-weight: 500;
}
`
