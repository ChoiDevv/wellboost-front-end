import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>상품 상세 페이지입니다. 입력받은 파라미터: {name}</h1>
        </div>
    )
}

export default ProductDetail;