import Select from 'react-select';
import './styles.css';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { Store } from '../../types';

function Filter() {

  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get('/stores')
      .then(response => {
        setSelectStores(response.data);
      })
  }, [])

  return (
    <div className="filter-container base-card">
      <Select
        options={selectStores}
        classNamePrefix="filter-select"
        isClearable
        placeholder="Cidade"
        onChange={value => console.log(value)/*handleChangeCategory(value as Store)*/}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
      />
    </div>
  )
}


export default Filter;
