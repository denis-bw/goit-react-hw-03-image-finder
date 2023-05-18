import css from './Button.module.css'

export const Button = ({onClick}) => {
  return <button onClick={onClick} className={css.Button} >Load more</button>
}