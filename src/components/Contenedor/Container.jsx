import './Container.css'
export const Container = ({stays}) => {
  return (
    <div className='container'>
      {stays.map((stay, i) => (
        <div className="cards" key={i}>
          <img src={stay.photo} alt={stay.title} />
          <div className="info">
            <div className="dato">
              {stay.superHost && (<p>SUPERHOST</p>)}
              <span>{stay.type} {stay.beds} beds</span>
            </div>
            <div className="punto">
              <img src='grade.svg' alt="icon" />
              <p>{stay.rating}</p>
            </div>
          </div>
          <p className="titulo">{stay.title}</p>
        </div>
      ))}
    </div>
  )
}
