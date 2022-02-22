import Button from './Button';
import Snowy from '../types/Snowy'

const None = ({name,setName,search,city,cod,getTime}) => {
    return ( 
        <section>
            <Button/>
            <div className="search-box">
            <input 
                className="search-bar"
                placeholder="Search country..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={search}
            />
        </div>
        <div className="box">
            <div className="location-box">
                <div className="location">
                    <h1>
                        {city}
                    </h1>  
                </div>
                <div className="date">
                <h3>Today is: {getTime(new Date())}</h3>
                </div>
            </div> 
            <div className="weather-box">
                <div className="weather">
                    <p>{cod}</p>               
            </div>
            </div>  
            <div className="information">
                <hr />
                <div className="text">
                    <p>
                        Weather information
                    </p>
                </div>
                <hr />
               <div className="temp">
                    <p>Temp: Nothing to show</p>
                    <p>Feels like: Nothing to show</p>
               </div>
               <hr />
               <div className="temp">
                    <p>Wind: Nothing to show</p>
                    <p>Humidity: Nothing to show</p>
               </div>
            </div> 
        </div>
        <Snowy/>
        </section>
     );
}
 
export default None;