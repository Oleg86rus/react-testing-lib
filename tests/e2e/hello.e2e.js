const HelloPage = require('../pages/hello.page')

describe('My hello world page', () => {
	it('should toggle', async () => {
		try {
			await HelloPage.open()
			await HelloPage.toggleTitleWithInout('hello')
			await expect(HelloPage.helloTitle).toBeExisting()
			await HelloPage.toggleBtn.click()
			await expect(HelloPage.helloTitle).not.toBeExisting()
		} catch (e) {
			throw new Error('Что-то пошло не так в hello.page')
		}

	})
	
	it('should not toggle', async () => {
		try {
			await HelloPage.open()
			await HelloPage.toggleTitleWithInout('asdasdasdas')
			await expect(HelloPage.helloTitle).not.toBeExisting()
		} catch (e) {
			throw new Error('Что-то пошло не так в hello.page')
		}
	})
})


