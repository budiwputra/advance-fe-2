import api from "./client"

export const getProduct = (params) => 
    api.get("/products", {params}).then((r) => r.data)

export const getProductById = (id) =>
    api.get(`/products/${id}`).then((r) => r.data)

export const createProduct = (payload) =>
    api.post("/products", payload).then((r) => r.data)

export const updateProduct = (id, payload) =>
    api.put(`/products/${id}`, payload).then((r) => r.data)

export const deleteProduct = (id) =>
    api.delete(`/products/${id}`).then((r) => r.data)
