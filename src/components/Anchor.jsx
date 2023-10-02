const Anchor = ({ content, theme, extraClasses }) => {
  return (
    <a href="#" className={`anchor ${theme === "dark" && "anchor-dark"} ${extraClasses}`}>
      {content}
    </a>
  )
}

export default Anchor