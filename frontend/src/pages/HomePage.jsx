import React, { useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Recommendations from '../components/Recomendacoes';
import { useBilhete } from '../context/BilheteContext';

const HomePage = () => {

  const {denovo} = useBilhete();
  useEffect(() => {
      denovo();
      }, []);

  return (
    <div>
      <SearchBox />
      <Recommendations />
    </div>
  );
};

export default HomePage;