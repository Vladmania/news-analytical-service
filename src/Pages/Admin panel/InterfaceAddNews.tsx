import { useState } from "react"
import { addNews } from "../../Api/ServerRequests"

export const InterfaceAddNews = () =>{
    const [header, setHeader] = useState("")
    const [date, setDate] = useState("")
    const [cover, setCover] = useState("")
    const [textNews, setTextNews] = useState("")
    const [source, setSource] = useState("")
console.log(header);

    return(
        <div>
            <div>
                <p>Заголовок новости</p>
                <input onChange={e => setHeader(e.target.value)} value={header}/>
            </div>
            <div>
                <p>Дата новости</p>
                <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
            </div>
            <div>
                <p>Абложка новости</p>
                <input onChange={e => setCover(e.target.value)} value={cover}/>
            </div>
            <div>
                <p>Текст новости</p>
                <textarea onChange={e => setTextNews(e.target.value)} value={textNews}/>
            </div>
            <div>
                <p>Источник новости</p>
                <input onChange={e => setSource(e.target.value)} value={source}/>
            </div>
            <div className="admin_panel__button" onClick={()=>{
                addNews(header, textNews, cover, source, date)
                setHeader("")
                setDate("")
                setCover("")
                setTextNews("")
                setSource("")
            }
            }>Добавить новость</div>
        </div>
    )
}