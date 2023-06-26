export function putInCart(event, amount)
{
    let cart = [];
    if(localStorage.getItem("cart") !== null)
    {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    console.log(cart);

    if(cart !== [])
    {
        let oldEvent = cart.find((object) => {return object.event.id === event.id})
        if(oldEvent === undefined)
        {
            cart.push({event, amount})
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else
        {
            changeAmountInCart(event, oldEvent.amount+amount)
        }
    }
    else {
        cart.push({event, amount})
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export function getCart()
{
    return JSON.parse(localStorage.getItem("cart"));
}

export function deleteFromCart(eventToDelete)
{
    let cart = getCart();
    cart = cart.filter(
        (object) => {
        return object.event.id !== eventToDelete.id;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function changeAmountInCart(event, newAmount)
{
    if(event.availableSpots !== undefined && newAmount > event.availableSpots)
    {
        return false;
    }

    let cart = getCart();
    let index = cart.findIndex(
        (object) => {
            return object.event.id === event.id;
        });
    if(index !== -1) {
        cart[index].amount = newAmount;
        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
    }
    return false;
}

export function getCartTotal()
{
    let cart = getCart() ?? [];
    let total = 0;
    cart.forEach((element) => {
        total += (element.event.price * element.amount)
    });
    return total;
}

export function emptyCart()
{
    localStorage.setItem("cart", JSON.stringify([]));
}