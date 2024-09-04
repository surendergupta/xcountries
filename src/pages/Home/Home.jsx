import React, { useCallback, useEffect, useState } from 'react'
import { getCountries } from '../../api/api';
import Card from '../../components/Card/Card';

import styles from './Home.module.css';
const Home =  () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCountries = useCallback(async () => {
        try {
          setLoading(true);
          const flagsData = await getCountries();
          if (flagsData && flagsData.status === 200) {
            setCountries(flagsData.data);
          } else {
            console.error('Error fetching data:', flagsData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCountries();        
    }, [fetchCountries]);
  return (
    <div className={ styles.mainContainer}>
        {
          loading ? (
           <div className={styles.loading}>
              <div className={styles.loader}></div>
           </div>
          ) : (
          countries.map((country, index) => {
            return(
              <Card key={index} country={country} />
            )
          }))
        }
    </div>
  )
}

export default Home