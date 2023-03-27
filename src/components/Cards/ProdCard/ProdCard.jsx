import React from 'react';
import './ProdCard.css';
import ProdButton from '../ProdButton/ProdButton';
import ProdImg from '../ProdImg/ProdImg';
import ProdInfo from '../ProdInfo/ProdInfo';
import ItemCount from '../../ItemCount/ItemCount';

const ProdCard = () => {
    return (
        <div className='prod-card'>
            <ProdImg />
            <ProdInfo />
            <ItemCount />
            <ProdButton />
        </div>
    );
}

export default ProdCard;
