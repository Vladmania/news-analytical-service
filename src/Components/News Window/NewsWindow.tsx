import { Link } from "react-router-dom";
import { StyledNewsWindow } from "./AllNews.Style";

interface IitNews {
  key: number;
  titleNews: string;
  coverNews: string;
  dateNews: string;
  serialNumber: number;
  link: string;
}

export const NewsWindow = (props: IitNews) => {
  let [start, end] = [0, 0];


  if (props.serialNumber === 0 || props.serialNumber === 8) {
    start = 1;
    end = 7;
  } else if (props.serialNumber === 1 || props.serialNumber === 6) {
    start = 1;
    end = 4;
  } else if (props.serialNumber === 2 || props.serialNumber === 7) {
    start = 4;
    end = 7;
  } else if (props.serialNumber === 3) {
    start = 1;
    end = 3;
  } else if (props.serialNumber === 4) {
    start = 3;
    end = 5;
  } else if (props.serialNumber === 5) {
    start = 5;
    end = 7;
  }

  return (
    <StyledNewsWindow
      $pictureBackground={props.coverNews}
      $startgrid={start}
      $endgrid={end}
      $size={props.serialNumber}
    >
      <Link to={props.link} >
        <div className="it_News_plast">
          <div className="it_News">
            <p dangerouslySetInnerHTML={{__html: props.titleNews}}></p>
            <p className="it_News__p__date">новость: {props.dateNews}</p>
          </div>
        </div>
      </Link>
    </StyledNewsWindow>
  );
};
