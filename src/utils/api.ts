const API_KEY =
  'live_kEj4rKIXxlD18zUzXD7PF8iz4AFcVTATAFjO60XHbPn8Ga812wUVZJ0YfUFlDTsm'
const BASE = 'https://api.thecatapi.com/v1'

export async function fetchApi(page = 1, limit = 15) {
  try {
    const responce = await fetch(
      `${BASE}/images/search?limit=${limit}&page=${page}&order=ASC`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      },
    )

    if (!responce.ok) {
      throw new Error('Сервер вернул ошибку')
    }
    const data = await responce.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
