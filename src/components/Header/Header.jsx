import './Header.css'
export const Header = ({ stays }) => {
  return (
    <header>
      <span className="title">Stays in Finland</span>
      <span className='datos'>{`${stays.length}  stays`}</span>
    </header>
  )
}
