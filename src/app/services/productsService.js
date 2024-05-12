import api from '../../config/axiosConfig'

export const ProductsService = () => {
  const getAllProducts = async () => {
    try {
      const response = await api.get('/products/all-products')
      return response.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const getProductById = async (id) => {
    try {
      const response = await api.get(`/products/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  return {
    getAllProducts,
    getProductById
  }
}
