import Card from "../components/card/Card"

function Cards({cards,onDelete,onCopy}){

    return(
        <div className="App__Cards">
            {cards.map((card)=>{
                return(   
                    <div>
                        <Card
                        onCopy={()=>onCopy(card.id)}
                        onDelete={()=>onDelete(card.id)}
                        key={card.id} 
                        colorCode={card.colorCode}/>
                    </div> 
                    )}
             )}
        </div>

    )
}

export default Cards;
