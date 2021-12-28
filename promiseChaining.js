const puppeteer = require("puppeteer")

// console.log(puppeteer);
let page;
let browser

puppeteer.launch({
    headless: false,
    defaultViewport: null
}).then(browser=>
    {
       return browser.newPage()
}).then(nPage=>{
    page = nPage
   return nPage.goto("https://google.com")
}).then(gPage=>{ 
    return page.type("input[type='text']", "Amazon",{delay:'200'})
}).then(res=>{
    return page.click(".gNO89b")
}).then(res=>{
    return page.waitForSelector("a[href='https://www.amazon.in/']")
}).then(res=>{
    return page.click("a[href='https://www.amazon.in/']")
}).then(res=>{
    return page.waitForSelector("input[type='text']")
}).then(res=>{
    return page.type("input[type='text']", "Mackbook Pro",{delay:'200'})  
}).then(res=>{
    return page.click("input[type='submit']")
}).then(res=>{
    
    // let price = document.querySelectorAll(".a-price-whole")
    // for(let i=0; i<price.length; i++)
    // {
    //     console.log(price[i].innerHTML)
    // }
    // return console.log(res);
    // return page.evaluate(()=>{
    //      let price = document.querySelectorAll(".a-price-whole")
    //     for(let i=0; i<price.length; i++)
    //     {
    //         console.log(price[i].innerHTML)
    //     }
    //     }) 
    // console.log(page.html);
    console.log(res);
})

.catch(err=>{
    console.log(err);
})

// return page.click("input[type='submit']")