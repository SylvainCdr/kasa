import "./style.css"
import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Rental() { 
    const {logementId} = useParams()
    const [rental, setRental] = useState([]
    )
    useEffect(() => {
      fetch(`https://titi.startwin.fr/logements`)
        .then((res) => res.json())
        .then((data) => {
          setRental(data)
        })
        }, [])

const logement = rental.find((logement) => logement.id === logementId)
console.log(logement)
return (
    <div className="rental">
        <div className="rental__container">
            <div className="rental__container__img">
                <img src={logement && logement.cover} alt="logement"/>
            </div>
            <div className="rental__container__text">
                <h1>{logement && logement.title}</h1>
                <p>{logement && logement.location}</p>
                <p>{logement && logement.host.name}</p>
                <p>{logement && logement.description}</p>
            </div>
        </div>
    </div>
)


    
        
     
}



    
export default Rental;