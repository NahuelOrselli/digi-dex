const API_URL = 'https://digimon-api.vercel.app/api/digimon/name'

export default function serviceSingleDigimon (name) {
    return fetch(`${API_URL}/${name}`)
      .then(res => {
        return res.json()
      }).then(res => {
        console.log(res)
        return res
      })
  }
  