const Button = ({ children, onClick, theme, extraClasses }) => {
  return (
    <button className={`btn ${theme === "dark" && "btn-dark"} ${extraClasses}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button