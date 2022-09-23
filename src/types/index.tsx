export interface User {
  id: number
  first_name: string
  last_name: string
  trust: number
  shared_service: 'Spotify' | 'HBO' | 'Youtube' | 'Disney' | 'Netflix'
}
