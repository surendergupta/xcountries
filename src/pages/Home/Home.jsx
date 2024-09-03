import React, { useCallback, useEffect, useState } from 'react'
import { getCountries } from '../../api/api';
import Card from '../../components/Card/Card';

import styles from './Home.module.css';
const Home =  () => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = useCallback(async () => {
        try {
          const flagsData = await getCountries();
          if (flagsData && flagsData.status === 200) {
            setCountries(flagsData.data);
          } else {
            console.error('Failed to fetch countries:', flagsData);
          }
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
    }, []);

    useEffect(() => {
        fetchCountries();        
    }, [fetchCountries]);
  return (
    <div className={ styles.mainContainer}>
        {
          countries.map((country, index) => {
            return(
              <Card key={index} country={country} />
            )
          })
        }
    </div>
  )
}

export default Home