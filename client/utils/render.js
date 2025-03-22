export const renderUsers = (users, renderTo) => {
    renderTo.innerHTML = ''
    users.forEach(user => {
        const originalPrice = user.price
        const discountPrice = (originalPrice * 0.75).toFixed(2)
        if (user.isOnSale) {
            renderTo.insertAdjacentHTML('beforeend',
                `<div style="width: 90%; height: 50px; background-color: rgb(215, 215, 104); border: 2px solid black; display: flex; align-items: center; justify-content: center; font-size: 23px; gap: 70px;">
                    <p>${user.name}</p>
                    <p style="text-decoration: line-through;">${originalPrice}$</p>
                    <p>${discountPrice}$</p>
                </div>`
            )
        } else {
            renderTo.insertAdjacentHTML('beforeend',
                `<div style="width: 90%; height: 50px; background-color: rgb(215, 215, 104); border: 2px solid black; display: flex; align-items: center; justify-content: center; font-size: 23px; gap: 110px;">
                    <p>${user.name}</p>
                    <p>${user.price}$</p>
                </div>`
            )
        }
    })
}
