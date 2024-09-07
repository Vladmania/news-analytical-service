import { Link, useParams } from "react-router-dom";
import { StyledSwitching } from "./Styled_Switching"

interface ISwitchingPages {
    arrayOfPages: any
    linkFlipPages: string
}

export const SwitchingPages = (props: ISwitchingPages) =>{
    const param = useParams()
    const page = []
    let curentPage = param.page
    console.log(curentPage);
    
    for (let i = 0; i < Math.ceil(props.arrayOfPages.length/9); i++) {
      page.push(i)
    };

    return(
        <StyledSwitching>
          {/* <Link className="switching_add_more" to={props.linkFlipPages + 1 + `/${curentPage}/${Number(curentPage) + 9}`}>Показать еще</Link> */}
          <div className="switching_pagination">
            {page.map((p, i) =>(
              <Link key={p} to={props.linkFlipPages + Number(p + 1) + `/${i + 1 === 1 ? 0 : i * 9}/${i + 1 === 1 ? 9 : i * 9 + 9}`}
                className={curentPage === String(p + 1) ? "curentPage" : ""}>{p + 1}</Link>
            ))}
            </div>
         </StyledSwitching>
    )
}