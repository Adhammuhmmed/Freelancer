import { useEffect } from "react"

export function Home() {
    useEffect(()=>{
        document.title = 'Home'
    },[])
    return <>
    <section className="home d-flex justify-content-center align-items-center py-5">
            <div className="home-content text-white d-flex justify-content-center align-items-center flex-column gap-3">
                    <div className="image ">
                    </div>
                    <div className="text mt-2">
                        <h1 className="h2">START FRAMEWORK</h1>
                        <div className="star-shape d-flex justify-content-center align-items-center">
                            <div className="line bg-white"></div>
                            <div><i className="fa-solid fa-star mx-3"></i></div>
                            <div className="line bg-white"></div>
                        </div>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
            </div>
    </section>
    </>
}