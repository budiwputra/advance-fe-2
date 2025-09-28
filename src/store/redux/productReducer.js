import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct } from "../../services/api/product";

export const getData = createAsyncThunk("products/getData", 
    async () => {
    return await getProduct()})

export const createData = createAsyncThunk("products/createData", 
    async (payload) => {
    return await createProduct(payload)})

export const updateData = createAsyncThunk("products/editData", 
    async ({id, payload}) => {
    return await updateProduct(id, payload)})

export const deleteData = createAsyncThunk("products/deleteData", 
    async (id) => {
    await deleteProduct(id)
    return id })

export const productSlice = createSlice({
    name : "products",
    initialState : {
        value : [],
        isLoading : false,
        isError : false    
    },
    reducers : {},


    extraReducers : (builder) => {
        builder
        .addCase(getData.pending, (state) => {
            state.isLoading = true
            state.isError = false })

        .addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false
            state.value = action.payload })

        .addCase(getData.rejected, (state) => {
            state.isLoading = false
            state.isError = true })

        .addCase(createData.fulfilled, (state, action) => {
            state.value.push(action.payload)})

        .addCase(updateData.fulfilled, (state, action) => {
            const index = state.value.findIndex((item) => item.id === action.payload.id)
            if (index !== -1) {
                state.value[index] = {...state.value[index], ...action.payload }}})
        .addCase(deleteData.fulfilled, (state, action) => {
        state.value = state.value.filter((item) => item.id !== action.payload)})
    },})

export default productSlice.reducer