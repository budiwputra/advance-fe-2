import api from "../services/api/client"
import { useState, useEffect } from "react"

export const useProduct = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const getProduct = async () => {
        try {
            setIsLoading(true)
            setIsError(false)
            const response = await api.get("/products")
            setProduct(response.data)
        } catch (error) {
            setIsError(true)
            console.log(error.response)
        } finally {
            setIsLoading(false)           
        }       
    }

    const addProduct = async (data) => {
        try {
            const response = await api.post("/products", data)
            const created = response.data
            setProduct((prev) => [created, ...prev])
        } catch (error) {
            console.log(error.response)
        } finally {

        }
    }

    const updateProduct = async (id, data) => {
        try {
            const response = await api.put(`/products/${id}`, data)
            const updated = response.data
            setProduct((prev) => prev.map(item => item.id === id ? {...item, ...updated} : item))
        } catch (error) {
            console.log(error.response)
        } finally {

        }
    }

    const deleteProduct = async (id) => {
        try {
            await api.delete(`/products/${id}`)
            setProduct((prev) => prev.filter(item => item.id !== id))
        } catch (error) {
            console.log(error.response)
        } finally {

        }
    }

    useEffect(() => {
        getProduct()
    },[])

    return {
        isLoading,
        isError,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        product

    }
}