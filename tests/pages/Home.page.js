const
    acceptCookiesButton = 'body > div > div > button'

class HomePage {
    async acceptCookiesButtonClick(){
        await $(acceptCookiesButton).click()
    }
}

module.exports = new HomePage()