import Select from 'react-select';
import './styles.css';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { FilterData, Store } from '../../types';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {

  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get('/stores')
      .then(response => {
        setSelectStores(response.data);
      })
  }, [])

  function handleChangeStore(value: Store): void {
    onFilterChange({ store: value });    
  }

  return (
    <div className="filter-container base-card">
      <Select
        options={selectStores}
        classNamePrefix="filter-select"
        isClearable
        placeholder="Cidade"
        onChange={value => handleChangeStore(value as Store)}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
      />
    </div>
  )
}


export default Filter;
