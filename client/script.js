import { SERVER_URL } from './api.js'
import { renderUsers } from './utils/render.js'
import UserRequests from './utils/requests.js'

const saleContainer = document.querySelector('.container2-2')
const allContainer = document.querySelector('.container3-2')
const saleinput = document.querySelector('.saleinput')
const postbutton = document.querySelector('.postbutton')
const nameInput = document.querySelector('.addname')
const priceInput = document.querySelector('.addprice')


window.addEventListener('load', async () => {
    const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
    renderUsers(users.filter(user => user.isOnSale), saleContainer)
    renderUsers(users, allContainer)
})

postbutton.addEventListener('click', async () => {
    const name = nameInput.value
    const price = priceInput.value
    const isOnSale = saleinput.checked
    await UserRequests.addUser(`${SERVER_URL}/api/addUser`, { name, price, isOnSale })
    const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
    renderUsers(users.filter(user => user.isOnSale), saleContainer)
    renderUsers(users, allContainer)
})