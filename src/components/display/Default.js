const Default = ({name,setName,search}) => {
    return (
    <section>
        <div className="search-box">
            <input 
                className="search-bar"
                placeholder="Search country"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={search}
            />
        </div>
        <div className="box">
            <div className="location-box">
                <div className="location">...</div>
                <div className="date">...</div>
            </div> 
            <div className="weather-box">
                <div className="weather">How is the weather today</div>
            </div>  
            <div className="information">
                <hr />
                <div className="text">
                    Today is a good day
                </div>
                <hr />
               <div className="information">
                    <p>Temp :</p>
                    <p>Feels like:</p>
               </div>
               <hr />
               <div className="information">
                    <p>Wind :</p>
                    <p>Humidity:</p>
               </div>
            </div> 
        </div>
    </section>
        
    );
}
 
export default Default;