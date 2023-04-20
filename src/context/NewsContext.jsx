import { useReducer } from "react";
import { createContext } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    
    const initialState = {
        allNews : [{
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Boosted spirit of enterprise our people are blessed with: PM Modi on 7 years of Stand Up India",
            "description": "The scheme aims to encourage all bank branches in extending loans to borrowers from SC, ST and women in setting up their own greenfield enterprises. \"Today we mark #7YearsofStandUpIndia and acknowledge the role this initiative has played in empowering the SC/…",
            "url": "https://economictimes.indiatimes.com/news/india/boosted-spirit-of-enterprise-our-people-are-blessed-with-pm-modi-on-7-years-of-stand-up-india/articleshow/99266673.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-99266741,width-1070,height-580,imgsize-24128,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-04-05T10:10:50Z",
            "content": "Prime Minister Narendra Modi on Wednesday hailed the Stand Up India campaign on the completion of its seven years and pointed out that the initiative had played a role in empowering the SC/ST communi… [+1155 chars]"
            }],
    }
    

    const [state , dispatch] = useReducer( NewsReducer , initialState)
    
    return (
        <NewsContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext