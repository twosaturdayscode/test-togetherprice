import { useEffect, useState } from 'react'
import SearchContactCard from './components/SearchContactCard'
import UserAvatar from './components/SearchContactCard/UserAvatar'
import ToggleButton from './components/ToggleButton'
import { User } from './types'

function App() {
  const [users, setUsers] = useState<User[]>([])

  /* useEffect just for demo purposes, I'd have used something like React Query */
  // See https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
  useEffect(() => {
    let ignore = false
    const API_URL = 'https://my.api.mockaroo.com/users.json?key=aa675110'

    async function fetchUsers() {
      const response = await fetch(API_URL)
      const data = (await response.json()) as User[]
      if (!ignore) setUsers(data)
    }

    fetchUsers()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="root-container">
      <main className="content-container">
        <p>Users list</p>

        <ul className="list-container">
          {users.map(user => (
            <SearchContactCard key={user.id}>
              <SearchContactCard.Content>
                <UserAvatar trust_value={user.trust} />

                <header className="card-header">
                  <h1 className="card-title">
                    {user.first_name} {user.last_name}
                  </h1>
                  <p className="card-subtitle">Nessuna connessione</p>
                </header>

                <ToggleButton />
              </SearchContactCard.Content>

              <SearchContactCard.Footer>
                <p>
                  Sta già condividendo{' '}
                  <a href="#" className="font-semibold underline">
                    {user.shared_service}
                  </a>
                </p>
              </SearchContactCard.Footer>
            </SearchContactCard>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
