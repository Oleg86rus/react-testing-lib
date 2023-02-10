const Page = require('./page');


class HelloPage extends Page {

	get toggleBtn() {
		return $('#toggle')
	}
	get searchInput() {
		return $('#search')
	}
	get helloTitle() {
		return $('#helllo')
	}
	
	async toggleTitleWithInout (text) {
		await this.open()
		await this.searchInput.setValue(text);
		await this.toggleBtn.click();
	}

	open () {
		return super.open('/hello');
	}
}

module.exports = new HelloPage();
