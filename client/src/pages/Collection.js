import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { QUERY_CARDS, QUERY_MY_COLLECTION } from '../utils/queries'

import CardList from '../components/CardList'


const Collection = () => {
  const { loading, data } = useQuery(QUERY_MY_COLLECTION);

  const cards = data?.me.collectedCards || [];

  return (
    <main className="container">
      <div className="row justify-content-center">
        <h3 className="p-3">Collection of All Business Cards Created</h3>
        <div className="col-12">
          {loading ? (
            <div>Loading..</div>
            ) : (
              <CardList cards={cards}/>
              )}
        </div>
      </div>
      
    </main>
  );
};

export default Collection;
