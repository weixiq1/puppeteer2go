const puppeteer = require('puppeteer');
async function comparePrices() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.sulpak.kz/g/noutbuki_asus_rog_strix_g16_g614ji_n4083w_i9161tsg47w1_90nr0d42_m004r0');
    const sulpakPrice = await page.evaluate(() => {
        const price = document.querySelector('.product__price').innerText;
        return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    });
    console.log("Сулпак = " + sulpakPrice)
    await page.goto('https://www.mechta.kz/product/noutbuk-asus-rog-strix-g16-g614ji-n4083w16-wqxga-240hzcore-i9-13980hx-22-ghz16ssd1tbrtx40708win11/')
    const mechtaPrice = await page.evaluate(() => {
        const price = document.querySelector('.text-bold.text-ts5.text-color1').innerText;
        return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    });
    console.log("Мечта = " + mechtaPrice)
    await page.goto('https://www.technodom.kz/p/igrovoj-noutbuk-16-asus-rog-strix-g16-ci9-13980hx-16-1-rtx4070-8gb-wg614ji-n4083w-269852')
    const technodomPrice = await page.evaluate(() => {
        const price = document.querySelector('.Typography.Typography__Heading.Typography__Heading_H1').innerText;
        return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    });
    console.log("Технодом = " + technodomPrice)
    await page.goto('https://shop.kz/offer/noutbuk-asus-rog-strix-g16-g614ji-90nr0d42-m004r0/')
    const shopPrice = await page.evaluate(() => {
        const price = document.querySelector('.item_current_price').innerText;
        return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    });
    console.log("Белый Ветер = " + shopPrice)
    console.log(" ")
    p1 = sulpakPrice;
    p2 = mechtaPrice;
    p3 = technodomPrice;
    p4 = shopPrice;
    if (p1 == p2 == p3 == p4) {
        console.log('брат, покупай где хочешь');
    } else if (p1 < p2 && p1 < p3 && p1 < p4) {
        console.log('брат, покупай только в Сулпак')
    } 
    else if (p2 < p1 && p2 < p3 && p2 < p4) {
        console.log('брат, покупай только в Мечте')
    }
    else if (p3 < p1 && p3 < p2 && p3 < p4) {
        console.log('брат, покупай только в Технодом')
    }
    else if (p4 < p1 && p4 < p2 && p4 < p3){
        console.log('брат, покупай только в Белом ветре')
    }
    else if (p1 == p2 && p1 < p3 && p1 < p4){
        console.log('брат, покупай только в Сулпак или Мечте')
    }
    else if (p2 == p3 && p2 < p1 && p2 < p4){
        console.log('брат, покупай только в Мечте или Технодоме')
    }
    else if (p3 == p4 && p3 < p1 && p3 < p2){
        console.log('брат, покупай только в Технодоме или Белом ветре')
    }
    else if (p4 == p1 && p4 < p2 && p4 < p3){
        console.log('брат, покупай только в Белом ветре или Сулпаке')
    }
    else if (p1 == p2 == p3 && p1 < p4){
        console.log('брат, покупай только в Сулпаке или Мечте или Технодоме')
    }
    else if (p2 == p3 == p4 && p2 < p1){
        console.log('брат, покупай только в Мечте или Технодоме или Белом ветре')
    }
    else if (p3 == p4 == p1 && p3 < p2){
        console.log('брат, покупай только в Технодоме или Белом ветре или Сулпаке')
    }
    else if (p4 == p3 == p2 && p4 < p1){
        console.log('брат, покупай только в Белом ветре или Сулпаке или Мечте')
    }
    await browser.close();
}
comparePrices();