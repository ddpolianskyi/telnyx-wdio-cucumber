class HomePage {
    get acceptCookiesButton(){ return $('body > div > div > button') }
    get contactUsButton(){ return $('header > div > div > div > div > a[href="/contact-us"]') }
    get logInButton(){ return $('header > div > div > div > div > a[href*="https://portal.telnyx.com"]') }
    get signUpButton(){ return $('header > div > div > div > a[href="/sign-up"]') }
    get productsButton(){ return $('header > div > div > div > nav > button:nth-child(1)') }
    get solutionsButton(){ return $('header > div > div > div > nav > a') }
    get pricingButton(){ return $('header > div > div > div > nav > button:nth-child(6)') }
    get whyTelnyxButton(){ return $('header > div > div > div > nav > button:nth-child(10)') }
    get resourcesButton(){ return $('header > div > div > div > nav > button:nth-child(13)') }
    get developersButton(){ return $('header > div > div > div > nav > button:nth-child(16)') }
    productsItem(url){ return $(`${this.productsButton} ~ div:nth-child(2) a[href="${url}"]`) }
    pricingItem(url){ return $(`${this.pricingButton} ~ div:nth-child(7) a[href="${url}"]`) }
    whyTelnyxItem(url){ return $(`${this.whyTelnyxButton} ~ div:nth-child(11) a[href="${url}"]`) }
    resourcesItem(url){ return $(`${this.resourcesButton} ~ div:nth-child(14) a[href="${url}"]`) }
    developersItem(url){ return $(`${this.developersButton} ~ div:nth-child(17) a[href="${url}"]`) }

    async acceptCookiesButtonClick(){ await this.acceptCookiesButton.click() }
    async contactUsButtonClick(){ await this.contactUsButton.click() }
    async logInButtonClick(){ await browser.url(await this.logInButton.getAttribute('href')) }
    async signUpButtonClick(){ await this.signUpButton.click() }
    async productsClick(){ await this.productsButton.click() }
    async solutionsClick(){ await this.solutionsButton.click() }
    async pricingClick(){ await this.pricingButton.click() }
    async whyTelnyxClick(){ await this.whyTelnyxButton.click() }
    async resourcesClick(){ await this.resourcesButton.click() }
    async developersClick(){ await this.developersButton.click() }
    async productsItemClick(url){ await this.productsItem(url).click() }
    async pricingItemClick(url){ await this.pricingItem(url).click() }
    async whyTelnyxItemClick(url){ await this.whyTelnyxItem(url).click() }
    async resourcesItemClick(url){ await this.resourcesItem(url).click() }
    async developersItemClick(url){ await this.developersItem(url).click() }
}

module.exports = new HomePage()