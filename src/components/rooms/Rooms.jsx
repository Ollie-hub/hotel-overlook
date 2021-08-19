import React, { useEffect, useState } from 'react'
import Style from './rooms.module.scss'
import { doFetch } from '../Fetch/fetch'


export function Rooms() {

    const [rooms, setRooms] = useState([])

    const url = 'https://api.mediehuset.net/overlook/rooms/by_hotel/1'

    const getRooms = async () => {
        let res = await doFetch(url)
        setRooms(res)
    }

    useEffect(() => {
        getRooms()
    }, [])

    return (
        <section className={Style.Rooms}>
            <h2>Se vores udvalg af værelser</h2>
            <div className={Style.roomGrid}>
                {rooms.items && rooms.items.map((item, i) => {
                    if (i < 3) {
                        return (
                            <div className={Style.roomItems} key={item.id}>
                                <img src={item.images[0].image} alt={item.room_title}></img>
                                <h4>{item.room_title}</h4>
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