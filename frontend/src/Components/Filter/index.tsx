import Select from 'react-select';
import './styles.css';

function Filter() {
  const options = [
    { value: 'jaragua', label: 'Jaragua do Sul' },
    { value: 'araguari', label: 'Araguari' },
    { value: 'curitiba', label: 'Curitiba' },
  ]

  return (
    <div className="filter-container base-card">
      <Select
        options={options}
        classNamePrefix="filter-select"
        isClearable
        placeholder="Cidade"
      />
    </div>
  )
}


export default Filter;
