import { useState } from "react"
import { addAdvertising } from "../../Api/ServerRequests"

export const InterfaceAddad = () =>{
    const [offer, setOffer] = useState("")
    const [cover, setCover] = useState("")
    const [link, setLink] = useState("")
    
    return(
        <div>
            <div>
                <p>Оффер</p>
                <input onChange={e => setOffer(e.target.value)} value={offer}/>
            </div>
            <div>
                <p>Абложка</p>
                <input onChange={e => setCover(e.target.value)} value={cover}/>
            </div>
            <div>
                <p>Ссылка</p>
                <input onChange={e => setLink(e.target.value)} value={link}/>
            </div>
            <div className="admin_panel__button" onClick={()=> {
                addAdvertising(offer, link, cover,)
                setOffer("")
                setCover("")
                setLink("")
            }}>Добавить рекламу</div>
        </div>
    )
}