import { useState } from "react/cjs/react.development";


const SearchBar = (props) => {

    const [confirmation, setConfirmation] = useState("")
    
    const updateConfirmation = (e) => {
        let typed = e.currentTarget.value
        let searchCard = props.cards.filter(card => card.name == typed)
        if(searchCard.length <= 0){
            setConfirmation("No")
        }else{
            setConfirmation("Yes")
            console.log(searchCard)
        }
    }

  return <div className="input-group mb3">
      <p className="confirmation">{confirmation}</p>
      <input className="form-control" type="text" onChange={updateConfirmation}/>
  </div>;
};

export default SearchBar;
