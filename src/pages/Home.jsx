import Header from "../components/Header"
import { Wrench } from "lucide-react"

function Home() {
    return (
        <>
            <Header />
            <div className="grid items-center justify-center pt-20">
                <Wrench color="white" className="w-10 lg:w-20 h-10 lg:h-20 mx-auto" />
                <h1 className="font-quicksand text-xl lg:text-3xl text-white">In Progress...</h1>
            </div>
            
        </>
    )
}

export default Home