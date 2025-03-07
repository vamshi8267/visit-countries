import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountriesDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-section">
          <p className="visited-country-title">{name}</p>
          <button
            type="button"
            data-testid="delete"
            className="delete-btn"
            onClick={remove}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
