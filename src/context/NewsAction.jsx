export const getNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-03-20&sortBy=publishedAt&apiKey=295d4abbb0e5421c9c55761dce0e49c3
    `)
    const data = await response.json()
    return data.articles
}