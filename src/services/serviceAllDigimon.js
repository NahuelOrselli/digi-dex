const API_URL = 'https://digimon-api.vercel.app/api/digimon'

export default function serviceAllDigimon () {
    return fetch(API_URL)
      .then(res => {
        return res.json()
      }).then(res => {
        return res
      })
  }