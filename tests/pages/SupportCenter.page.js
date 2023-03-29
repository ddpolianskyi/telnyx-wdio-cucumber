const
    searchInput = 'form input.search__input',
    searchResults = 'section.section > div'

class SupportCenterPage {
    async search(text){
        await $(searchInput).addValue(text)
        await browser.keys('\uE007')
    }
    async searchCheck(text){
        await expect(browser).toHaveUrlContaining(text)
        await expect(await $$(searchResults)).toBeElementsArrayOfSize({ gte: 1 })
    }
    async emptySearchCheck(text){
        await expect(browser).toHaveUrlContaining(text)
        await expect(await $$(searchResults)).toBeElementsArrayOfSize(1)
    }
}

module.exports = new SupportCenterPage()