import React, { useEffect, useState } from 'react'
import Style from './rooms.module.scss'
import { doFetch } from '../Fetch/fetch'


export function Rooms() {

    const [news, setRooms] = useState([])

    const url = 'https://api.mediehuset.net/overlook/rooms/by_hotel/{{id}}'

    const getRooms = async () => {
        let res = await doFetch(url)
        setRooms(res)
    }

    useEffect(() => {
        getRooms()
    }, [])

    return (
        <section className={Style.Rooms}>
            <h2>..</h2>'
            <div className={Style.roomGrid}>
                {news.items && news.items.map((item, i) => {
                    if (i < 1) {
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