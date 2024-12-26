import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Main from './pages/main';

import ProductDetail from './pages/product/detail';
import ProductSearch from './pages/product/search';
import ProductWishList from './pages/product/wishlist';

import Login from './pages/user/login';
import Mypage from './pages/user/mypage';
import Order from './pages/user/order';
import Address from './pages/user/address';
import Pay from './pages/user/pay';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 메인 페이지 */}
                <Route path='/' element={<Main />} />

                {/* 상품 관련 */}
                <Route path='/product/:name' element={<ProductDetail />} />
                <Route path='/product/search/:name' element={<ProductSearch />} />
                <Route path='/product/wishList' element={<ProductWishList />} />

                {/* 유저 관련 */}
                <Route path='/login' element={<Login />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/order' element={<Order />} />
                <Route path='/address' element={<Address />} />
                <Route path='/pay' element={<Pay />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;