class SupportCenterPage {
    get searchInput(){ return $('form input.search__input') }
    get searchResults(){ return $$('section.section > div') }

    async search(text){
        await this.searchInput.addValue(text)
        await browser.keys('\uE007')
    }
    async searchCheck(text){
        await expect(browser).toHaveUrlContaining(text)
        await expect(await this.searchResults.length).not.toBe(1)
    }
    async emptySearchCheck(text){
        await expect(browser).toHaveUrlContaining(text)
        await expect(await this.searchResults.length).toBe(1)
    }
}

module.exports = new SupportCenterPage()