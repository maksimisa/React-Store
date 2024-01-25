function Drawer({onClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                <div className="items">
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{ backgroundImage: 'url(/img/games/1.png)'}}
                                    className = "cartItemImg"></div>

                            <div className="mr-20 flex">
                                <p className="md-5"> Смартфон Samsung Galaxy </p>
                                <b>28890₽</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                            </div>
                            
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{ backgroundImage: 'url(/img/games/2.png)'}}
                                    className = "cartItemImg"></div>

                            <div className="mr-20 flex">
                                <p className="md-5"> Фитнес-трекер Xiaomi </p>
                                <b>2790₽</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                            </div>
        
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>31680₽</b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;