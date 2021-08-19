import React from "react";
import Banner from "../../assets/Img/frankfurt-skyline-germany.svg";
import Header from "../../assets/Img/frontpage-header.svg";
import { News } from "../../components/News/News";
import { Rooms } from "../../components/rooms/Rooms";
import Style from "./frontpage.module.scss"

export function FrontPage() {
    return (
        <>
            <header>
                <img className={Style.Banner} src={Banner} alt=""></img>
                <img className={Style.Header} src={Header} alt=""></img>
            </header>
            <main className={Style.Maincontent}>
                <div className={Style.News}>
                    <News />
                </div>
                <div className={Style.Rooms}>
                    <Rooms />
                </div>
            </main>
        </>
    )
}
