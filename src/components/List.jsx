import Anchor from "../components/Anchor"

const List = ({ title, itemsCollection}) => {
  return (
    <div className="flex flex-col gap-3 text-center md:text-left">
      <h4 className="text-dark-grayish-violet uppercase">{title}</h4>
      <ul className="flex flex-col gap-1">
        {
          itemsCollection.map((item, i) => {
            return (
            <li key={i}>
              <Anchor
                content={item}
                theme="dark"
                extraClasses="font-bold uppercase text-sm"
              />
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List