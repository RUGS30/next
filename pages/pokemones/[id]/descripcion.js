import { useRouter } from "next/router"

const Desc = () => {
    const router = useRouter()
    console.log({router});
    return(
        <div>
            <p>Descripcion Pokemon</p>
        </div>
    )
}

export default Desc