interface ISearchContactCard {
  children: React.ReactNode
}

interface ISearchContactCardBody {
  children: React.ReactNode
}

export default function SearchContactCard({ children }: ISearchContactCard) {
  return <article className="card-container">{children}</article>
}

SearchContactCard.Content = ({ children }: ISearchContactCardBody) => {
  return <div className="card-content">{children}</div>
}

SearchContactCard.Footer = ({ children }: ISearchContactCardBody) => {
  return <div className="card-footer">{children}</div>
}
