import { memo } from "react";
const Input = ({name,setName,search}) => {
    return ( 
        <div className="search-box">
        {console.log(name)}
        <input 
            className="search-bar"
            placeholder="Search country..."
            value={name}
            onChange={(e)=>setName(e.target.value)}
            onKeyPress={search}
            required="required"
        />
    </div>
     );
}
 
export default memo(Input);