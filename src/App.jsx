import {Routes, Route, Navigate} from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Category from './pages/Category.jsx'
import ProductEntry from './pages/ProductEntry.jsx'
import ProductList from './pages/ProductList.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Text from './pages/Text.jsx'
import ListProduct from './pages/ListProduct.jsx'
import EntryProduct from './pages/EntryProduct.jsx'
import ReduxList from './pages/ReduxList.jsx'
import ReduxEntry from './pages/ReduxEntry.jsx'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path='/' element={<AuthLayout/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            </Route>

            <Route path='/home' element={<HomeLayout/>} >
            <Route index element={<Home/>} />
            <Route path='category' element={<Category/>} />            
            </Route>

            <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='product-entry' element={<ProductEntry/>}/>
            <Route path='product-edit/:id' element={<ProductEntry isEdit/>}/>
            <Route path='product-list' element={<ProductList/>}/>

            <Route path='list-product' element={<ListProduct/>}/>
            <Route path='entry-product' element={<EntryProduct/>}/>
            <Route path='update-product/:id' element={<EntryProduct isUpdate/>}/>

            <Route path='redux-list' element={<ReduxList/>}/>
            <Route path='redux-entry' element={<ReduxEntry/>} />
            <Route path='redux-update/:id' element={<ReduxEntry isUpdate/>} />

            </Route>

            <Route path='/text' element={<Text/>}/>

        </Routes>
    )
}
export default App