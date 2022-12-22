
import { useState, useEffect } from 'react';



import Card from "./components/Card";
import Pagination from "./components/Pagination";
import DataGridForBikeJourneys from './components/DataGrid/DataGrid';


const  App = () => {  //{ match }
    
    //const pageNumber = match.params.pageNumber || 1;
  
    const [bikejourneys, setBikejourneys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const [page, setPage] = useState(1);  //pageNumber
    const [pages, setPages] = useState(1);
  
    useEffect(() => {
      const fecthBikejourneys = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/bikejourneys?page=${page}`);  //
  
          const { data, pages: totalPages } = await res.json();
  
          setPages(totalPages);
          setBikejourneys(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setError("Some error occured");
        }
      };
  
      fecthBikejourneys();
    }, [page]);


    return (
        <div className="app">

          <DataGridForBikeJourneys />

          {/* {loading ? (
            <h3 className="loading-text">Loading...</h3>
          ) : error ? (
            <h3 className="error-text">{error}</h3>
          ) : (
            <>
              <Pagination page={page} pages={pages} changePage={setPage} />
              <div className="app__posts">
                {bikejourneys.map((bikejourney) => (
                  <Card key={bikejourney._id} bikejourney={bikejourney} />
                ))}
              </div>
              <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}*/}
    </div> 
  );
   
          
};


export default App;

