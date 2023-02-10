const UsersPage = require('../pages/users.page')

describe('User page', () => {
	it('load data', async () => {
		try {
			await UsersPage.loadData()
			
		} catch (e) {
			
		}
	})
	
	it('load data', async () => {
		try {
			await UsersPage.loadData()
			await UsersPage.deleteUser()
		} catch (e) {
			
		}

	})
})