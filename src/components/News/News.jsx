import React, { useEffect, useState } from 'react'
import Style from './news.module.scss'
import { doFetch } from '../Fetch/fetch'


export function News() {

    const [news, setNews] = useState([])

    const url = 'https://api.mediehuset.net/overlook/news'

    const getNews = async () => {
        let res = await doFetch(url)
        setNews(res)
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <section className={Style.news}>
            <h2>Sidste nyt</h2>'
            <div className={Style.newsGrid}>
                {news.items && news.items.map((item, i) => {
                    if (i < 3) {
                        return (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title}></img>
                                <h4>{item.title}</h4>
                            </div>
                        )
                    }
                    else {
                        return null
                    }
                })
                }
            </div>
        </section>
    )

}