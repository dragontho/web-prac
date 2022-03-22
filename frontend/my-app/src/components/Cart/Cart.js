import classes from './Cart.module.css';

function Cart(props) {
    const cartItems = <ul className = {classes['cart-items']}>
        {[
            {id:'c1', name:'Sushi', price:22.99},
        ].map(cartItem => <li>{cartItem.name}</li>)}
    </ul>

    return (
        <div>
            {cartItems}
            <div className = {classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
};

export default Cart;