
import { useState, useEffect } from 'react'
import axios from 'axios'


const useCardList = ( onSetTodos1 ) => {
      const [error, setError] = useState(null)
      useEffect(() => {
        let ignore = false;
    
        async function fetchData() {
          const response = await axios({
              url: 'http://localhost:3001/todos',
              method: 'get'
            })
          if (!ignore){
            onSetTodos1(response.data);
            console.log(response.data)
          }
        }
    
        fetchData();
        return () => { ignore = true; }

      }, [onSetTodos1]);



      }  


export default useCardList;

