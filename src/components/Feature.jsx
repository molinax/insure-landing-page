const Feature = ({ img, title, content }) => {
  return (
    <article className="flex flex-col items-center gap-4 w-full max-w-sm text-center text-dark-grayish-violet lg:text-left lg:items-start lg:text-lg">
      <img src={img} alt={title} />
      <h3 className="font-dm-serif text-2xl text-very-dark-violet">{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default Feature