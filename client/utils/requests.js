class UserRequests {
	static async getUsers(url) {
		const getData = async url => {
			const res = await fetch(url)
			const json = await res.json()
			return json
		}

		try {
			const data = await getData(url)
			return data
		} catch (error) {
			console.log(`Произошла ошибка при получении всех пользователей, ${error.message}`)
		}
	}

	static async addUser(url, obj) {
		const postData = async (url, obj) => {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(obj),
				headers: { 'Content-type': 'application/json; charset=UTF-8' }
			})
			const json = await res.json()
			return json
		}

		try {
			const data = await postData(url, obj)
			return data
		} catch (error) {
			console.log(`Произошла ошибка в postData, ${error.message}`)
		}
	}


 static async patchUser(url, userData) {
	try {
	  const response = await fetch(url, {
		method: 'PATCH',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	  })
	  if (!response.ok) {
		throw new Error(`Ошибка при запросе ${response.status}`)
	  }
	  return await response.json()
	} catch (error) {
	  console.error(`Произошла ошибка в patchData, ${error.message}`)
	}
  }
    
	static async deleteUser(url, id) {
		const deleteData = async (url, id) => {
		  const res = await fetch(`${url}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		  })
		}
		try {
		  return await deleteData(url, id)
		} catch (error) {
		  console.error(`Произошла ошибка в deleteData, ${error.message}`)
		}
	  }
}

export default UserRequests
