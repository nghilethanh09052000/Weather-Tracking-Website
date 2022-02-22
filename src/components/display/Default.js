
const Default = ({name,setName,search,getTime}) => {
    return (
    <section>
        <div className="search-box">
            <input 
                className="search-bar"
                placeholder="Search country..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={search}
                required="required"
            />
        </div>
        <div className="box">
            <div className="location-box">
                <div className="location">
                    <h1>
                        Welcome to our website
                    </h1>  
                </div>
                <div className="date">
                    <h3>Today is: {getTime(new Date())}</h3>
                </div>
            </div> 
            <div className="weather-box">
                <div className="weather">
                    <p>The country's temperature will show here</p>
                </div>
            </div>  
            <div className="information">
                <hr />
                <div className="text">
                    <p>
                        The weather information will show here
                    </p>
                </div>
                <hr />
               <div className="temp">
                    <p>Temp:</p>
                    <p>Feels like:</p>
               </div>
               <hr />
               <div className="temp">
                    <p>Wind :</p>
                    <p>Humidity:</p>
               </div>
            </div> 
        </div>
    </section>
        
    );
}
 
export default Default;