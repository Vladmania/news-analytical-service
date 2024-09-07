import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { PanelStyling } from "./Panel_Styling"
import { InterfaceAddNews } from "./InterfaceAddNews"
import { InterfaceAddad } from "./InterfaceAddad"

export const AddingItNews = () => {
    const param = useParams()
    
    return(
        <PanelStyling>
        <div className="admin_panel">
            <ul>
                <li><Link to="/admin/add-news">Добавить новость</Link></li>
                <li><Link to="/admin/remove-news">Изменить новость</Link></li>
                <li><Link to="/admin/add-ad">Добавить рекламу</Link></li>
                <li><Link to="/admin/remove-ads">Изменить рекламу</Link></li>
            </ul>
        </div>
        {param.action === "add-news" ? <InterfaceAddNews/> 
        : param.action === "remove-news" ? "remove-news" 
        : param.action === "add-ad" ? <InterfaceAddad/> 
        : param.action === "remove-ads" ? "remove-ads" : ""}
        
        </PanelStyling>
    )
}