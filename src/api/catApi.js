import axios from 'axios'

export const fetchCatImage = async () => {
  try {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )
    return response.data[0].url
  } catch (error) {
    console.error('Error fetching cat:', error)
    throw error
  }
}
