/**
 * offerings = [
 * {
 *      asin: "1123",
 *      offeringID,
 *      promo
 * }]
 * 
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
const offerings = [
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00MO?th=1&psc=1',
        asin: 'B00AHH00MO',
        offeringID:
            'oZcN9ors2t5r6CM%2BYt7u4Ck05dyHAI6rhvZYRuQwKDzSoPYppiHQrcUB5D4O3MHfZVtD7jxQ0jQ5fluoTGwYWDymPQoHZWdFOPhqS%2Bs0nVYrro9n3h0jwhg8w%2Ff2%2BSrsQY8%2B7E156rKWD3OuFlyMgg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00R4?th=1&psc=1',
        asin: 'B00AHH00R4',
        offeringID:
            'dkhp%2BCkQM1uH%2BepN42vSpEJAQauNrYPUCRI1zAvwKt%2F5PhuqtP9BjOYcqm1xNOGXDCiXeokOXNaz6ZHNGbL%2BktJPr3flRgrlJdUKbf7Vj857m1LZ2XyBDucnj7YvalII%2F1QwhBJLzbJnbzlODfb0vQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTN4?th=1&psc=1',
        asin: 'B00OW9OTN4',
        offeringID:
            'RAqPvwH%2FgHa3cV1U1D8FxHSv7HiMqjwBIbUZYSzFC3xuBqZL1v8U9XeZ4BmcW9WhnrLLXecHs9i6dkqQaUUawJpykTwPp8Z39INnkXSz78Tg%2FVpg9l7AYziVzh39IW2PWIgjOduqRRVBCLQyyu7lxw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B013KPK71I?th=1&psc=1',
        asin: 'B013KPK71I',
        offeringID:
            'WkxBDUD6QKZmUiYuQ8S9s0JGbZwYhEaIXSdD75666YPw%2B9uzasTTRETdkFMf5U%2F2ooVcWQWMGfBR8TBlkw0pVcl%2FODekm0xM%2Fyv6ABcQkhJ6oatrfX5g%2BThj19v0NUWX5UDRjRSN4dmGsO8jGC91UA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01EG7XDJW?th=1&psc=1',
        asin: 'B01EG7XDJW',
        offeringID:
            'tLLkMWhTr7VJccuo5KmArPWCjQszv8TH7rEhSE1sDDjth7zDreAwGfCieltMG%2BEkLZdSfJMCYTCLEaGtQpNLfaxCM%2Fo2SK3LP0YQKOj9OvyB22mQC75OvAPIUdMGP2rfjS3iCNc3BY0BznFIWa9%2FAg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            '9ZEWxEdJ5AQ7i9BUXSYjjgscx1lwhtpYiNGLwrwvvMhuMrZcrqPFRbsDNfViWUIy0pHRX1H6hoyvBAFuzKuX4SH5xAcJbELaRed4ZsSbLUf3%2FYPl8IEpLuRGC8Mn1jcnMPIkl58%2FpHLfJ7Hn9at1Eg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07B447D3K?th=1&psc=1',
        asin: 'B07B447D3K',
        offeringID:
            'GTbNarjZ2KLU8D8%2F%2BYiRp790%2FcGdk2tcWVi1suPitDsIGXIOIF2EfoCYKWnOxxEVzL01m4mDTcEGv4rRuA9ytSXMfEksdEPa0XzRVtimYC3rlITP49j25LIy77S%2Fs6CHva72ZGzbfc2gp1EUygxn3w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G7QSS4?th=1&psc=1',
        asin: 'B001G7QSS4',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00B4CYRHA?th=1&psc=1',
        asin: 'B00B4CYRHA',
        offeringID:
            '57ktyAIeE0pZQyPGwwWmWwFilVRwFVZZryG1jegULVrQg6VhjlIuz37%2BmTsA0TC7i7HXX3JycrwggbnhcOZAyFteSbuoB64l3B240c4vN6wRxbD2dkLNsGpWbweabyGq2lDEcRqgIo0py5J5EihaUQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00B4CYSTC?th=1&psc=1',
        asin: 'B00B4CYSTC',
        offeringID:
            '8ek8R65%2BFnX0qr127qsOZbEWCKGQ2f8WixZV9YNy%2FpUpvBjBluIweI9VqUuh2iP3Vdtf%2BdTZPzyYPjS3KG6vRW5J9TKjk9qPaaEOm1OXmOwUzkkFPdKCIV1PpjvEjZXKtaTKnuOH10OjETuSAMmn7A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2V3IOI?th=1&psc=1',
        asin: 'B00J2V3IOI',
        offeringID:
            'EONeD6u9Ph4lR%2BnX6V8c2xI9Aqsvf8Uc4EosOii0grX4YXezVRe7AD%2FxBNXOTAJjWbPpwH3wDfRSwN%2BRcz941W7QGwwEUA9JoShcdzIWtEzC3mikmz9HoAU76lwUTzGmwu3UXh4k3WrJpK6DpEAxOA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUWLG8?th=1&psc=1',
        asin: 'B012FUWLG8',
        offeringID:
            'OzyhS6%2FeohuasO9aW11pTzb4709s7K8luncQxaTDeyEVIGbDbUmcD%2BpQqFxORaIKCWZKc%2FAKo%2FwyBN9EkBi0m1nwkjLjLlB8Fo%2BMUIrxPqzCgJXZGFwSeurw2DTe0n1n4ZXbwLuH5cUa%2FtIZe%2FYrSA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUXNGU?th=1&psc=1',
        asin: 'B012FUXNGU',
        offeringID:
            'hCpnE0D5Wv01Hu7UZzt6oDjWINuFgS7h8h7dkPrVp%2B8rv2lZF8N0W9cwSTV2Jwy7lrKAtIaYq44VNPs9L4st2urynl4frt5vOXVrRp29DKjOXqAdWC14toeDRq5MaGzKPinhn%2FrcFqS%2F2kGcimnkdA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            'LnNrkhpdXBm8HsWP0AO1pWR4o%2FaqmKd6ggpYClFvb%2FBfIZK5rWUtEW93NmyuL8ohc1%2BCvYFuPvjs%2FBCPkBUkyOe78%2F0FLT8R%2B1PTqpTsWwENNs%2BAIwOlzshutG7SMrnMeyHTzKPivguSxHuTbzEyVg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUYJEA?th=1&psc=1',
        asin: 'B012FUYJEA',
        offeringID:
            'LhBfI6b5nH3%2B%2BqPtBJuJ8LB5oxX%2BZJwuPSOtftsi4e7s3p%2BZ4IaDKrfVXeFpzOD4vvdaR4tjZ2XEnVrbemxMzugObuf20ql9K4%2FyLFcY56TZ8ECrNBXPh%2Bf9LpYGX051RKwceCx3kB1rUCCKJ%2Bd4%2Bw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G7QSQG?th=1&psc=1',
        asin: 'B001G7QSQG',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B000GCKC96?th=1&psc=1',
        asin: 'B000GCKC96',
        offeringID:
            '%2B3Sf36LSgQT0Ngfp5pMWbJFmIr52Eu5pyeLphnD7s0m%2BQgoj2Ql0UV8FPPNu7i2c2c21w%2B%2FkLT%2BgpSwm2vWPf%2BmUHdlzwIjS9YeFvWgiiZDfa69yQEvfahYp7hrPrrMU6J4gdB%2FKjWXZ%2BecrHJRplQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08R5K6P28?th=1&psc=1',
        asin: 'B08R5K6P28',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00E7VRNDK?th=1&psc=1',
        asin: 'B00E7VRNDK',
        offeringID:
            'Sp%2FaIgsDh7hrRVKPal25O7g6TU%2BhMG%2BjN2eog%2BgR5n9vq5TDOEVwLyAMEjWrwG6AanPcH%2FN89MrMUzB5JuHN4ZFiXL25T15GN9EoZKoUlpzv6PUaCMKtDpN8gYWsQI9iyTHUVA16g7qucBwycAxuaA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01EG7XDJW?th=1&psc=1',
        asin: 'B01EG7XDJW',
        offeringID:
            'BAgWL28oI%2BrBbngLA0UWAw%2BUumdwryLvPfqfd1r7pvEOhtOHc7NbrWTTU1K5gTEifw1Llvj%2BuqFEp2p2H%2Ftk%2B9P874zuxpKmiaHyS4GLgCJuEGe1GkwD94e4wWUmXu46rmaeTjrxVIlhETQ8kxO%2B%2Fg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07B447D3K?th=1&psc=1',
        asin: 'B07B447D3K',
        offeringID:
            'hwrqYMUdWOyQ53cFgIa4RtVDRhEZWWAAPGM9dZEPOQR2i4juEtsIOwGVaUkU3s4DSWucTS3Dhtb8%2BvY94Kemtk6dl0g6AIVXlymY4wGb3cZ71NqShdfSCFMbkZuReU1Ojvix%2FnV9PRUIHwLw3MKcgg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2V1CDG?th=1&psc=1',
        asin: 'B00P2V1CDG',
        offeringID:
            'oz1oVDX8e8xE5OJVFRptUDIo8Paq2QxwhatsS75xnjQCqUoKLz0rzf4e9Bl%2BJX4QXgIliNWv8KfPGt6Yuya0%2B1mo1RbWtrL2qjVoqT2R41Z5%2BlkXa%2B%2B8oijHthnCEIDpSw%2FhLAW6b3DE4J6cePOPoQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BRQ2JZF?th=1&psc=1',
        asin: 'B07BRQ2JZF',
        offeringID:
            'QnwHDnQAaG3kg9zM3SL2DASwjzu3xHDudOu%2FtmYG6C2votbzX%2FtciAMF4nA4FUqXmfd9HxXItOo30tKITpk%2Ba2UJ%2FpJSsLuPFS3OXQuW%2B%2FdunClRmalq1AFTlk%2BhYbGkBybCEC54aXDvS4JKBEAYfw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00A8S6HM4?th=1&psc=1',
        asin: 'B00A8S6HM4',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08CJ2S9HJ?th=1&psc=1',
        asin: 'B08CJ2S9HJ',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            'Ooy8TZurEOigZBUzVDE83CmOUc5maqlFFXBDh2zHgSKEriBX2R%2FgBeIP8URxfE8StDg5s2UxY7qUEiKPleI91vBv%2BD%2FfCUc4G7tXZZ%2F9aBMNK36AgFsFgZA34cJ1Zm4xacai55afnFtbwytnEwrcQA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2V3IOI?th=1&psc=1',
        asin: 'B00J2V3IOI',
        offeringID:
            'DoXuzvaLE%2BMfHS97ywV32NC1fSJbEjYKioOKIZZ73D5e5KN9iw6c%2BIw55H02sR7bX1vqDoxVC%2BJHtSLVdUz%2FVA56m9SxhbIWj36ulAjnslDEwGS%2Ftm2KJCqLVylmmJUlhzRdzmjcbnOn6YyeeVYY0Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUXNGU?th=1&psc=1',
        asin: 'B012FUXNGU',
        offeringID:
            'Xi1lPcDkTgX7pWnE0KGkJo2YEFNwIa11TR8kII0yJsWcriRmYIKsflYozmOIlWPRM84uFGk77xDWMptPAjae4KhuQbJaRMsI93%2F7OWDB9tnXuGO93TYyrDlpj2qGNtSu30tV%2BI%2FlMddrI49cjYKIAw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B003QB26MA?th=1&psc=1',
        asin: 'B003QB26MA',
        offeringID:
            'y%2FdVQQ7JE4g9I3cRJDv69XAanNENDoJxoauAm4Xx05XTHcKnedUV%2FMf0JTfGrNi1FNgymODVGzdgLYHvYrtS8%2BvqQbc97%2F1pA3eCeptJ0duPAYXU%2Ff0zAG9ZDkYcCXCteLi6SwzPgsBSwoPW5qzlcQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001QFDTWO?th=1&psc=1',
        asin: 'B001QFDTWO',
        offeringID:
            'BfyYXshXsbWmYeMPFijxmUznTw8PSpbOECwk%2Br%2Fn9PAtFfWpx44E7o5S7%2BrhvcorsgJAQ5XK%2FBMDq5OYxX3LnH1OoWkcniQKrAzEjxC02gTFtYURGeQIws1ZwdwYPz3lpsFY1BYMJnqnQA9uiSvYMg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001ET78HY?th=1&psc=1',
        asin: 'B001ET78HY',
        offeringID:
            'IECiBAEYHyeBt5ZP6r8mpUC3H6XzAdSL9QRUQ1QbU4yrY5vGzFja8Fho3Le4I8fvNaY6f4j%2FMnVH5BpLnZ6FshlWtmnaT9ez8b6OrcVGLNrVdyOqXqWc94f9og1vC5ddedel8NOe%2FzE%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2V1CDG?th=1&psc=1',
        asin: 'B00P2V1CDG',
        offeringID:
            'AGKe5B2Rm1MeydyOQdahH83d6FovFzPLt3Y%2BLWy7YqM9sogDXBCcSgqkwXYtH8upOfXglmBgxWRW98X9o%2B9UF89lGDtGMGUqPuOc9Nr1BXVkeyS9yucczG7IJqZEF%2B5wZ%2B7Wij40NtjKNMABek5%2BKg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUWLG8?th=1&psc=1',
        asin: 'B012FUWLG8',
        offeringID:
            '5pq%2FT7EarfNoN6Fc8E1%2BgV0uBKCLbBNXt3VlMpAl07Uvtoa6vYUM0IGrp4ZmdY4%2FfZMuPymQJP%2Fupyby0DfkCpVE%2BHpKodOUR4bVa6%2B%2BBKDafQ0prPp5UokTYjXI0BFmKq18E20Yb2oZwxOkSmnxwg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01KVU94VY?th=1&psc=1',
        asin: 'B01KVU94VY',
        offeringID:
            's4U2dusRLbbnDROHIEnNjTiIh%2BLX2RZdI5Q19qt%2BYcGybd49BZFM%2B5CuXidVYaw%2B%2FYxeSDJ3CJoIXrnZBko4Q4zdGM4BkPdFr3EXARVjm4DxT8rbmnxFj08rLNPJMCQYvnfS1REGwyd%2Bk%2FBVnILEBg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            '0j2ev9We%2F%2FfduUqiWvXvfxoUfGVUIuQSY0vExIhoc%2Bpidi3%2B4ecMFVTu90e5JvCMmQbFcsv%2B8N8E6GeadI0eWIkxRp5OnVxA7pLCDWPwoahcn%2BCe%2BUqb31sbOx7xEYFIarmLb7OjiD2IIs%2BUK%2BFz1w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07L9RTWRS?th=1&psc=1',
        asin: 'B07L9RTWRS',
        offeringID:
            'JNI28tYSPzZ9bG4YwkTzJE5OslorC4kMw9dRe4zuMbfiVjHKG3aUAOhqwFvWDAXe6zR5W%2Fztto7%2BVGrm2xeYcMpN9HQpj8QQdBO%2BcouOeow0XgjmdLNI2EVLHJTYgSkkvEppcWDScU5BUiq1qhQ0PQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074MFDJRG?th=1&psc=1',
        asin: 'B074MFDJRG',
        offeringID:
            'dCFChfaAhFCIBckXqpLuZ3eOqR1QsZ3xQJ%2FLF8bg3Tpk3AoyOKg897m%2BMWzaSs7gMI%2BpPYQbbwwwPULRXlmz5P9BqTzYs1ag6FflRnsOUfgmwREJBO6uQW2w7pUZHerIM9HRxkFw4%2BA71f0xdNd2Xg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00MO?th=1&psc=1',
        asin: 'B00AHH00MO',
        offeringID:
            'nIFpOEmgKZZOHL%2FzieKzYvh7hJ3YYs4yNn9OvdAEo4%2FWGURY1demQ%2BSrG9UAcBPVsA0pKCUftP6xZFCt2ZplgyrnA0JKO27%2F1EeZyhHBLJJxx7VAWxjn6fd5q5bchwZHkLWfGkwtTYro9Y4c68UsmQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B013KPK71I?th=1&psc=1',
        asin: 'B013KPK71I',
        offeringID:
            'uEUAGYG8P4wbsupJBHjsZxk%2FjMl93uOYQZeyg81sS8NprI%2Fn7KbrFSyDT3u6NX1G%2BPdqapp%2BXn5opT%2FOaJG8mVRDAtOGdiOruMqX95%2Fyv44a1bkAsFxLKKuvCZ2snovr%2BY5hcdDPgld6Y%2FkLpmsc6A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00R4?th=1&psc=1',
        asin: 'B00AHH00R4',
        offeringID:
            'aCLmwSmbFk3h2nHifIiyQ1etjmjqF7YTOR2fAioH9WjhoAUNRsPBI9uvFiM2foL%2BWeEdv45maU1ZzBQtZ39zO2f8pnr6epfcOXCi5wgDj0AXbyvL0uo6br3r%2BucRSPIgDvIrs%2Fqx3yysd4gWmh2fTg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            'alVWw5XopoHN%2BicW3WWw6Pb%2FgFREf%2FrQDTXm8Bxx%2BYi1EPk3cHJxpSAgPCI9bKiERBlzPYRSetHnZAHKemYBWIHVYSAKhtnJELLbfmsUAXX5xoPsV5lAl6pW816jbLoX8xqG%2Bvqv1rSMvTaU0ovnhQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTN4?th=1&psc=1',
        asin: 'B00OW9OTN4',
        offeringID:
            'RDsCrC8B4y%2F61v3HAQuDckAdxgJrn2KPCENVH%2Be5RhSeO14zQ%2FC6hYNMrBqng83iDHz0%2Ba0gKkSYzklBHWgWjtHxzgmGRbACtq6HRsRqE%2FNlekFHdlUj%2BToOpwZVV8xZ%2FFl5qdFVN733STkhxaIW1Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01B5D3VOC?th=1&psc=1',
        asin: 'B01B5D3VOC',
        offeringID:
            'XRhbe7AM3QmT6WQq%2BMP%2B4nfZIjv8YNaD3ALB1cdsH6Z1M72Cw%2F%2Bf80tVHmUy4l4dsc6TdquPncszwFMjTe0gdFFsgXgxffL3rJ5qlKJDiS5242CDF%2Ba7mKGEhbcJfcangeZ9VeBBcfgC8JCIzVp6jQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B015HRFXKM?th=1&psc=1',
        asin: 'B015HRFXKM',
        offeringID:
            '8M7eyvVWpG%2BcVscITEFAxDXF5DJNrdfdwo%2Fs6xFOCzgFhrjM00n%2FYUVSgz0wP05iGV4YsZ2PoVuNRL%2Fhciyxo40c39wXP9mlisEQlV1FbLw0Xmz0WB6YvTpFjzcFiWCMEro5psQlpIZp4fW3Buia8A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07W8Z1TY7?th=1&psc=1',
        asin: 'B07W8Z1TY7',
        offeringID:
            'xnByVpwoW0%2F9bZJxVY2%2FHtD2ynRON6HgUopjsRDXnSwvErHs38ZidvgYj4EtTea5WGTnzbHMA8x0IJZtYL4TjQxKu%2FwskGAdbwdM8mCJVYJWWqSJidgMnsEIORaiuIih0%2BegdXnWuEuwWcJJLKH39Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00H35BV2G?th=1&psc=1',
        asin: 'B00H35BV2G',
        offeringID:
            'Q5eDlMVePIckk%2FbRhTWLcMCE%2B505FF7qlI2lMhFKglWLE%2FtySF2Bkqo0OCz%2FRDIaYnrIQHjuKkdEtrInkVRzD2VD9npB7gWhgubF57VwipO2DRcOFr0%2Bt0PSGsOWFhXseFqpIsag8FWLscb8q%2Fhdug%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001QFDTWO?th=1&psc=1',
        asin: 'B001QFDTWO',
        offeringID:
            'DqSjSBHeXQyYhpwNPqu56KzXTfeUXznUI5d5mH4F27kzX7IulkKTcXVkmmV3CDyEBL8dBpk2ScXSI5m0ZJEg8S4Tv9U%2FU76E%2Bi%2Bva8uOEqcCxqN%2BxduvTSmqzMVhI8v2OPm8DZdRciXJDDeUK1lwbw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2L5TOK?th=1&psc=1',
        asin: 'B00J2L5TOK',
        offeringID:
            'gJYrZJa5%2Bo55ix%2B0oOlR7CGkTi2PctxYLi0zTNkpk%2FeTLqy2UEpKQMbR9eOsdV6Dx%2Fu7lRIJBlSfamPA2npA%2Buz4BLo2vzXMS4z%2BDdile94AN61t9YhlsZ12mXIngaoItOev1SMUnspi71ETAtqG9Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B003QB26MA?th=1&psc=1',
        asin: 'B003QB26MA',
        offeringID:
            'rRotM7PDQuLnDMGeQGa7fO7pZPS2fKsm6iwTwdixpIMsLCWK4fjChffUZkdCd9mCtH8vga18cP8N95psCT%2FB7dTWmeqUlfVcpGljI%2FtoadwjX72miQeCZVh91REBar3q%2BznJUDJGl0SWr1gi952hLg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00TZ8TH9I?th=1&psc=1',
        asin: 'B00TZ8TH9I',
        offeringID:
            'kJQJZFi%2FrVnecPdFnI8eXUo7p%2FA8O%2FRPqCCvkeH5WauaefilWaL7ASyiGy1bdh4Yg%2FzCwmN6R6FGKUDInCX3U6WgloJvPk06AUBb0xOkQVUapBnvPlj%2B%2BPhaDxYID485CBGgtGfl9HLoXfQa0bQucQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OU2O?th=1&psc=1',
        asin: 'B00OW9OU2O',
        offeringID:
            'KxC02%2FdZzgBkXJ9LE5tQLv0NCK7nguObZL4TdNIrn0X%2FusYBwYblUazPKIxe6o9Z%2BBVWb3iTFtOZD0Jl%2BnYh1wVEdUKlmNXEVx%2Bl3ZLbD%2FvToM1ad%2FnnvL9l4M3QyGc1IxEPaxRlWzB%2Fk0uTpSe7mg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00NNIOU48?th=1&psc=1',
        asin: 'B00NNIOU48',
        offeringID:
            '3DnwqIESc6CUVb8i2W3pQLiwMEDUkgBxPGX27K13kKVuQSqJP46fmo7dGmYeVvSAO6JbeB0haTw%2BTgylURDjEA4o9eKKot6mj21PZ3Tdf7IfNn5kTuC5zBUy%2BYqAuphZshGPpRrYDZw%2FXJPz0KJ%2Fww%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G8Y9VG?th=1&psc=1',
        asin: 'B001G8Y9VG',
        offeringID:
            'ORh3UiDRKMfMQoV8MzT02mpp1OazV53UoQyG%2FYwZ2JMJSfV4JbrhHwoFUKRcSCTtUvw3TNDnP8dfmCpI7gZl%2FM%2BYnzqxKlppp%2FdR0NhUkp0eL9FfzK0J%2Bvdbx8919n0UTxbxDFQEF8I%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00182ERTO?th=1&psc=1',
        asin: 'B00182ERTO',
        offeringID:
            '4hpsQLfSgUNlgwmly%2Fffcstv13DV%2BrwRMKRY205MQbgWpxBoONdcmq79yppk6UKYbYneYqx%2FoThDRxTanHPJyXV%2B1IJI2Z%2FXw%2FNGYf3kF%2B%2B18BB8uq69BVwDS%2FGtWjXHdyf2v6i3d24G30rNicljHQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07GVPCGJK?th=1&psc=1',
        asin: 'B07GVPCGJK',
        offeringID:
            'hOPRGpJbJF%2B987hDe8He6cN1YxPiNobu%2F7oNfkpi5K7P7oBNQHVZy9tRpzGz66wUasTqxtd%2FakHaFsDeeAfo9j4Ls4L7dtx%2FH7JUfPSsr4egtEBBulbwiz%2FHo%2FygPvLqkfI6ogFd52s78Otk1kmHdQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0073E7JFK?th=1&psc=1',
        asin: 'B0073E7JFK',
        offeringID:
            'BOuXilAAxeu7w1%2FHFGbacHRsYBvjRc1bhF8972PYWTyGOfzFi4jlUzw8Q4%2Bp8WFSZ898zzD%2BaHj1s5ZPC9%2BDpuy24s2ilJvYzQeeDqtCGuLzaWFVD%2BiFbrOh0MQ8izUrgnY%2BbgUKIbuYhtEOffxCBw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001MIZMIE?th=1&psc=1',
        asin: 'B001MIZMIE',
        offeringID:
            'vMc9vOxHMkCQjXZFsPi9T%2BlRYcc2vOjFZ20RP6%2BIdD6eiaKSgmlNoKFCkE88Ux7RZcGWC4%2FTF%2BPho%2BWgD9uykSkBNxvwK6h5n8n0Xlv5tz7u8LVWX5HStzYnIaO9LLW6%2BfGxLBdQ2a4%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B06VVP4CLP?th=1&psc=1',
        asin: 'B06VVP4CLP',
        offeringID:
            '0jUWvsuYUWUZbLqnzxxxW9LpGgt0%2Br3l3hVATsQjU9z8ZTHacJ13uqc1YTRELeo3WYBaqCSbjFjf7v1X%2F%2BljbgNkpMq1gtxPS8j5fpzezPZUgZ0jS9ub%2FyGaIDdBp9zSxlkfY8h4d6FWfIcrmBoEdA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00O2?th=1&psc=1',
        asin: 'B00AHH00O2',
        offeringID:
            'dgPwpArr%2B2skx8p6Nc0koc%2BdqY5DZuMJGQsJRHH%2B8GLW%2FJ%2FUQaJul9O%2BGsKvdRKL9INqLAWVzJXjvrxhzLnpKyhnm62aIgTa75tQWCiyx18S%2BuW8ktFLoZacsJttR1WKs3IlVTBEQJVzC4dJ7M2Wmw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00MO?th=1&psc=1',
        asin: 'B00AHH00MO',
        offeringID:
            '8wJqT%2FhpJKw3otgdHKrf3XFDj3kIJTcFSgYQ4Hbqashu0SuQ0APlJ0ZiQE7UiaFDI1aLkCIHmIiaa0BRj5Tf%2FO%2BqZ9iEyfKzGkiA4zgm6O%2FEj55YaF46wb4u%2BQmm3BWNyZrwoPy5IGSTXjCcd%2FoVAA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00R4?th=1&psc=1',
        asin: 'B00AHH00R4',
        offeringID:
            'A35LjQanx5iOhrWpt3HGDaH6P1Wpq0BbuMynGkR36X75gu%2FKEgPSYrAM%2Bc3qHvvalXUSXVZeC2qLhkt7B2gmshsjkELdxsRgkYp3cs4to4f3iB046vxy2WwWuQmRWaRSCzG3jL9X6N6LMUCLjtX9Ag%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTN4?th=1&psc=1',
        asin: 'B00OW9OTN4',
        offeringID:
            'K67pFgeJNcST6Oerrph8vBh3ES6vRhdYJK2QxKrVHBUOBb%2Fsv8PK7ZhYPMMinPZVWz2p6YIRUpmuRTFqW2w%2FJYUq0slFzj3K%2F3rWCmZRgWfPyhgZl9K%2FjNuuDZSkChrfus3cgXyL%2BryS8TLjy%2FewdQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B013KPK71I?th=1&psc=1',
        asin: 'B013KPK71I',
        offeringID:
            'uSdn8xYU6G69Ol97GRV%2FAw4QGaStuGlaRdZmpbwaTw%2FPYWzH9Sa4k3DXF25%2Fb2FaEh7HGg1UYuQKK%2BjKLamkgMYrKmhM40HvNin5DlMzri9DXxeyL0WDUegPa%2BpXtboDP2qF%2Bw7M7GAru58ZrAJw8A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01EG7XDJW?th=1&psc=1',
        asin: 'B01EG7XDJW',
        offeringID:
            'TV3GpFFF5%2ByWriXzxg%2Bsjh5UHBmwrXv1EipuU%2FjjYRzVWEL6acRJhE0uEX7jcfRAOuE70CYO6lXdRF%2Foed1ZN4FWOBjzpVBxcSe4SE4fttpAwhRYvbngydpMhOuaquVa7cRoJQi5kqjWfGxPskbnGQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            '%2FEX0STOTWSyaPn7t8UYtNynnOI7W39MAoHGLtJLNYxM%2F3aSeem4lVAJm2g3SGZdRhFlwTMUG14NocTqcaYjxJaYL9CJLoVhawEFy7bFK7R1lIJx6Ep3vRp3zNp0mLVO%2BtFPi3EHqyXxb8b7B%2BExvCw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07B447D3K?th=1&psc=1',
        asin: 'B07B447D3K',
        offeringID:
            '59I6XJbjjw2qZNRmA0r67djVT9N90ZorQMq%2Biw5H8MX7pGCd3vJm5S%2Fj0gOjHx%2Bi67F3KqcrQ0UjH0l2eBdQvEu3m%2FBWAdnI%2FsmCvNTo2Abokdutj5Qu62%2F6s046P6wxhHru%2BYBNQtQ0EDifRaAUfw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G7QSS4?th=1&psc=1',
        asin: 'B001G7QSS4',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00B4CYRHA?th=1&psc=1',
        asin: 'B00B4CYRHA',
        offeringID:
            'OcEBb61raZJVc%2BdDOeg6%2FEr7thj3eotR5qjBzTSHypbEdXwe%2FY0j1%2BO3yBaBeTtQc9kCRLGOOh89C3YB3dNIvxY1J7%2FmShqCbq0XVMKLIdrYG6waHKMa6tvfTNBZAqItxj%2BmpFolLWGxjVAzToPdNw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00B4CYSTC?th=1&psc=1',
        asin: 'B00B4CYSTC',
        offeringID:
            'OyxYjpb%2F%2B9Ow5Wq%2FYncxgGz6hHOQjLhBQqovlLpvSvolVy3Qlc%2FjNg5KArXgOfqeWdDbLLPfLEJJIWVTfo24IeKv%2B1R3RIJBPoGvRTntha%2FXVuv6nlI7ijER5764ZXB%2BIomjAbl8Bl2O8Ike2GwzhA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2V3IOI?th=1&psc=1',
        asin: 'B00J2V3IOI',
        offeringID:
            's9aCG7ZLnSsyKQaqOhO5weLUWwooR2R9DE4fSiBz6vCAAPoLpZsIB7HuUgawTDTe6Xg8fXxRhg5UqlQw3gM0%2BjHFFmiw7Qz4WYdVcBaV6kLMaAXoDao9oVELFz0rJFV6Jr%2FvopYIjSTEvPEi77SXiw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUWLG8?th=1&psc=1',
        asin: 'B012FUWLG8',
        offeringID:
            'vp%2B9zdM5d43iNJHoNMBeaBDloMOEe2DdbowticA1%2BthWszoXoHqL%2BRBOWMZ99yO2tabDCf%2B0IIyz2Y1HdpH77Q9uyJgHrzXtVlURNonh3ir3gIOHTbt631oLglCtYwM68rEkj2CBPeQ38IaDW7LNeg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUXNGU?th=1&psc=1',
        asin: 'B012FUXNGU',
        offeringID:
            '3EoU90OpO%2F0Gf9UT%2FCrJW6%2FJ%2Bojmq3ZvEOFMgB5WPGdbOF69gbLppsNlWcqxwOHhQnqttkbLlQXj%2BSJe29k2iXeValfWpWPCEA9lJZkJwSIz988uzDJEFBZEF0R2RsCO2gxUYOlWuTll1xdBgZx5rQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            'bnhUwcvLv1t5peuIAkffDE%2BhlOuWWdJmcvao%2BAcIHXytEouG6cOl%2FrjBAsa%2F3Yp2g4g%2FKyJQIWvgMSxJzqCxO7AVKpTOwgBd9LD20WhanSqH0uOgJU2h3B1SH%2FEhIUYFACVTRlor93oZ%2FyMED7sMEQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUYJEA?th=1&psc=1',
        asin: 'B012FUYJEA',
        offeringID:
            'zSNg3rxamMImBkciVG7K0SG3kgvMX0K15cFEpvmI%2FZkcYjpacllwWJJxZ3s1Xx3s%2F62irm4%2BtCmIX20V97csXwjuYGfub3AAy1J8d5UEt27eKJhVo3NDD5dwutt6n3WQyoax9G6lEsPocTqi0hlG4Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G7QSQG?th=1&psc=1',
        asin: 'B001G7QSQG',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B000GCKC96?th=1&psc=1',
        asin: 'B000GCKC96',
        offeringID:
            'cOZr%2B1b%2B7epqAO4lb6T4QTNmjE2FilmJSVN2ChIFG57Zt9GjYDnTnsUYIIIhjQspPZrugiFqfKw43KDWpfTIqr8MdrGankKif1CqKd8VPiO8VDqYTq1ANKfn0PgcR8xlRMZa08%2FQtB3r4z1kdOIN5A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08R5K6P28?th=1&psc=1',
        asin: 'B08R5K6P28',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00E7VRNDK?th=1&psc=1',
        asin: 'B00E7VRNDK',
        offeringID:
            '8pjZJeAT4idEOUWe43F3s7muynaGyrPDhGMiM3WjaRHe6ZyS5lIzOQyQzJh9BD8a2CzetG89RkmJanSPUDo0Yxn%2BF8tNEBBzSJfSm5Wnsb%2FTcXg0XyUtJ%2BQ%2FbGf34rPzKQlpDric4aba8JbEy8uNVQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01EG7XDJW?th=1&psc=1',
        asin: 'B01EG7XDJW',
        offeringID:
            'ASIVYT3vlV3n3ZFlqMKb5WcrMdLt6fuMMESjPBUvgO5aFP9R%2Ftzkn%2BjSqzzsWC3s2tzZ%2Fu0A4K8KXWCuG011UitBev%2Fl3DeUT%2Fm%2Fcozxh75U4wY3fi4Ap3CPmrSokPRnfJXw0A9OmlkE5OGUDUxDRQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07B447D3K?th=1&psc=1',
        asin: 'B07B447D3K',
        offeringID:
            'eyj1tSFHFJnswnhwtuxR47CbAKNAbNjqa3pIHYF0IOAufWMYlpP00rAN0%2BPH4I9n8DXYfp7b9%2B0BuU0pFWaJ0yXY9exPkq4ItM965O46wx%2FMW%2FMD5BMrF%2FwbH9Ax4ursptQZsZ9HU%2BMmTCuJzKNqBw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2V1CDG?th=1&psc=1',
        asin: 'B00P2V1CDG',
        offeringID:
            'dDbM4hGznd0rRplClRPEnxpscvS6v9coyE4VMVa3NZA%2Bz4crrBKXPQ1lGaEvTmnybfTHSpdq86R924i7xYbEx8qhsdZMC1Pw56%2F2nQKPZzbjuEcehUyylXJz2K%2FJxD1zo2OqQkx2Wn0g3TUEOVEFSQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BRQ2JZF?th=1&psc=1',
        asin: 'B07BRQ2JZF',
        offeringID:
            'wsMhVpYuGvLmExsZhptYIstXbrjlmyJ6Whl6H55V%2FpTNqpTrZwXHG%2FDqdjjKfFRJLJthsf45Xa9DL6O8isS2ecjdKqKg5wbljBVIqe8DKi9y60Lk0RCFtUmNRUQ73Z8NhKlo%2FqkqSjptelflMg86ow%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00A8S6HM4?th=1&psc=1',
        asin: 'B00A8S6HM4',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08CJ2S9HJ?th=1&psc=1',
        asin: 'B08CJ2S9HJ',
        error:
            'no such element: Unable to locate element: {"method":"css selector","selector":"input#add-to-cart-button"}\n  (Session info: headless chrome=89.0.4389.72)\n  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Mac OS X 11.2.2 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            '7OrrjCpGMV%2FPSb9KXqRsPTmW7frG32sX5an535Ko88qN6ob3U4HyvpMIRyUk58uvK2EVIf4Fl6mYMuuHaV6UVRY9ZD1AERnuogGU4v6SfeZWFwZB4K3P4jECepjAOLkDmr6cEHHm8f7tRCUemXJ6eg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2V3IOI?th=1&psc=1',
        asin: 'B00J2V3IOI',
        offeringID:
            'OhxQOmXF4b8Z2zVNe8CzyNqMFcry06vJnL2AoGMbWZbgcSaPfnsF6BwRvK%2BZhEb2c1Yc8jgpQ50K9L2SpzHnxHYD0M3jyj8QQfFlMY9HjX6QB3YUMomEl9gAX%2FhhWTXkpJtHFnpPxoZHmU6Pwqz5Rg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUXNGU?th=1&psc=1',
        asin: 'B012FUXNGU',
        offeringID:
            'FJteqvKF7jL%2FzyRxgJwVWGId%2BLtS9SOLgOx6DBH10bAvHEKfEivjjgAjmWJMXOxZvd7b4mv%2B9gTKl%2FY1aPfnF20Tfe9vzGMdNZCZ75DHTYXW7MjYprxqOGlL7bEkV6X2hpsBiRjrhjR3pmQrpUwSVQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B003QB26MA?th=1&psc=1',
        asin: 'B003QB26MA',
        offeringID:
            'QVgbPxQDm0vR2AZw268KXVSvvjDzAGXUUVPEYSZoChTe05NqgyjmjJaxnBRYJLHvkhXIjUdgQs3UrdnrUmQIhsCNNX7stbd3qBo2G3L7R7KQHCKJeUJW%2BcZPPOHZ5vOsWbAdYe5fL3BWyCpstYVXFA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001QFDTWO?th=1&psc=1',
        asin: 'B001QFDTWO',
        offeringID:
            'lMyDjRiSgEzfHJr9mLeWD8tOHi3rezVMCckpdiZMVMSaH8wtz0H%2F91GRCTenH0S%2BMHPsfG8Aa7PEa7xthQwKKwvvrq8SjgDPx5EL1HFnQX5bSCYeku8EkCXBMPJ%2FUSNl7qyI8Jid3x58kimerDg6Pg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001ET78HY?th=1&psc=1',
        asin: 'B001ET78HY',
        offeringID:
            'PoBfNMfn%2Fs5SnLLd5XQdJlzvh9lUMktzRCcu4iZxZp4oHaKDeKk0Rtqa6hp8rtsy3ak3wy410iB3W5ZNQZSGhzeI5Ne8R3qJcejcWe3yzltlqJBQGz6GS7000M8D0C2J9eq2V7opAzA%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2V1CDG?th=1&psc=1',
        asin: 'B00P2V1CDG',
        offeringID:
            'NRUOq%2FhzzPnz6h9yn%2F7rBGflev5N5eGLO56cmghM7FJAnww0Dr8uFLP%2FxAkqT5eQ1G4d9mLvejU9TGMeOI51zQcciS8dHnPqE9OXOan4Rd6azP1DuQ11k1M3t86VgG1GyRfHKsAtW3R%2FUywG0mfyIg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUWLG8?th=1&psc=1',
        asin: 'B012FUWLG8',
        offeringID:
            'RThYtkUkGtltNA32fMlSt7hppLrHvMBWE6XCbOvDDQacS%2BUYrnDFESl1ZiZ8EDBl6M550qJNvz7BaIWD9lNaNRKxvXi2DOhGcHfuPo7EXqnWeZ1S84%2Bm9cMKe86oRTed06MtFxkrE60Vd9IHXMfVpQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01KVU94VY?th=1&psc=1',
        asin: 'B01KVU94VY',
        offeringID:
            '%2FYQDx%2FGD17fHY8xCIhmwzgoh0hEtP%2FQDC7yW9M2S5hYBBIpRc91%2FKGhgfK%2BVTgAwhPuV0HjY4ZQOghFdELkE8r6KXgzDJ%2FlcOw77Sxb%2B8rrpBw%2BWUVLcS%2F1DKspNOLXCQi1nqOdR0ucGI%2BD0JfDwSQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B012FUY0U8?th=1&psc=1',
        asin: 'B012FUY0U8',
        offeringID:
            'rBE%2BCAdA%2FmO15g9lWQWwd79JFzbFT6jvY8RuJVITyHEImzvZMxnX3XJr7tOkflC%2BfHgFqgVDYB2z528tyqBG7tDmdmuyudFbg%2FG8onrEjMZEewzPszNCZvktSNq750Yl%2BuThmgQLFBIsHykOFKQQGQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07L9RTWRS?th=1&psc=1',
        asin: 'B07L9RTWRS',
        offeringID:
            'Hf2cZ0XmeadX5MRVgPYqMMp5YYv2LOtZAe3GZ34oJaB5H0WQf7cDueRNyoQRzZpWB8Mrb4dKdU2NpRMdNzQfNV6gknSq6nhaYsucADZfUCxiB2u8EHrVMBBTOkEP7B5Iy3XrNoYLwCVreqoNBfDcpg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074MFDJRG?th=1&psc=1',
        asin: 'B074MFDJRG',
        offeringID:
            'yJ9x6jzOrZXb1wsuOZ8qCUsz23Gl3Ztk4n4XLLCdv8BvW%2FyckzY5l%2FPnLZ9Lc%2F4cADZ1fMJFD66tcVBamcO7HkFq%2FMO9Il%2Be%2Bnh2STHgWpN8O6jOfG0FvuDVom0QCGpunDjXmn5FNHr%2F%2BzYy2r7SKw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00MO?th=1&psc=1',
        asin: 'B00AHH00MO',
        offeringID:
            'ZEn38v2FVdqjZoql%2B2uQdj632b8jcnJaFqhBCRQTA7V3njjeixNOcKeFxIJytT0i0W7dQwQWP8TP51whxpiaJUzSORC6rP35MBI7rMl%2BHigQdhPxnVtgYRGhMgcJJu6wofwUftwyzCI5aBlWrCDMrw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B013KPK71I?th=1&psc=1',
        asin: 'B013KPK71I',
        offeringID:
            'yPouWE7GMrV4xStL2KIPTHfgmkq6O34u8kqW4%2BDg0JgEcOU1w2cP%2F03x6M4FpCjvMu0Id2aO0xUVblcDvSuZW5mdCMlmwa3HQIEps55QjU8kUJAH9MueElr4WEdzGGnqALQgVu3Jym3aRv%2BLTGPA5A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00R4?th=1&psc=1',
        asin: 'B00AHH00R4',
        offeringID:
            '0kOZ9Otq66Yx5v9kmHZDu9ydzskUj9TpQZlo6M5xGAGsM6ABUlJBV77RYUDdUXjB%2Fj1t3OL7NMGolD7tbGw5h2KXNUhparXXrpS6zaLup4tQnamxraXURvXt4TNsg3OjN8Hkr2FSDVXaNwsRucgCpg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B074KM543R?th=1&psc=1',
        asin: 'B074KM543R',
        offeringID:
            'i6jVV3D%2B3uXKBghpW2SI8GVFuXXkpY%2BNfG3JTnxXYbovL7VqolE2HzN44YqRkWlZbDtRzycSHNa8%2FyxB79tyRrB%2FbgvYfCIzqC4PJkT%2Fe%2BeiBh3oNJqyiIVau0KcnkRcjhiFbG9hytADe%2FS7P8RsCA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OTN4?th=1&psc=1',
        asin: 'B00OW9OTN4',
        offeringID:
            'QE3PcKe9Yl9eOoJd%2BcjgISApGn2QCfA4872Hwwu0I2FjZ0t6jJXHVYS3idjm7AYjKyQcks7XBpMGS%2FJyaQQvrX6ZrQX6jl%2F45e7hkd0Ksqcy7Tg9pXut%2F131b8ZmOs5ObPTFPd%2BQrJfRrEDf8pazvA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B01B5D3VOC?th=1&psc=1',
        asin: 'B01B5D3VOC',
        offeringID:
            'Yb2FBRhjYVGmyeLz2ccMHG5RjitxtDhkX89tKY04OoVpCbD%2FYTtZU0jKVn%2BzzQfcoZ3VU3gWdeC75OTTH8y6qKg6VWE9YYXvf0VH%2BqRrV4EZg8mf84jpLlAa7Qajwg%2FUDmnw2dQI6rD7ChA80oZ0hA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B015HRFXKM?th=1&psc=1',
        asin: 'B015HRFXKM',
        offeringID:
            'P66oO1cQnjVvYXRoNGj38Eu%2FKTqb9od5qhPIp5shV3dsWsNzdFo%2B%2F3ZCaexu3JGQva0xa97RMth7uRUbjvOUkwjPQ2SUHoTUIwdphgJLEgUN%2BYrQy1c8L%2Frz5qYhWQhUWActiLqAHP19c1KOGY3%2BQw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07W8Z1TY7?th=1&psc=1',
        asin: 'B07W8Z1TY7',
        offeringID:
            'DeisWN2rVVvN1YL9upFMudXdFZBBbKO%2BY1R4wR6j%2BNJEjCh9kUA86HyCww6imZLljwfc8oOlZhqQDIHDjonirPQgGLLQWN1Cpf3qcJ%2Bk4mZroshgfzQ87zbBaR6Hdq3i0d2OdfdELbu3TU9kd6ObeA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00H35BV2G?th=1&psc=1',
        asin: 'B00H35BV2G',
        offeringID:
            'jBElx%2FksDxt2GJSiux3tgU%2BLX1Ig3GaIhM5YtOHKIBbpt2hWhTh4xDXo14Yfp%2BsbSPS7eMAQIetzL5%2FKvWnsZo0ZgjLH1ZrXKbxDAGg8cYygWqyO074BxI%2BQxWdvAfiULYLAm1x70XV0T2HgHiytvA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001QFDTWO?th=1&psc=1',
        asin: 'B001QFDTWO',
        offeringID:
            'zwyApJKLhcc29JgtKVj1Iehbs5DIhB8Lwt1KBatK0ICH1GULW1cEVgq7Ve7oCRv4WydxINHLZJ0VV5oFSqQ9GxLVR59JVjc1LaRmrVmgPtEVAkiZmyn2owe3ZJnF6FtSiQ2wXkSmBrmf20dsdP0iNA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00J2L5TOK?th=1&psc=1',
        asin: 'B00J2L5TOK',
        offeringID:
            'R%2FQw6OM3dK%2BqawQRDvvG3jeU3OwzbiGczrsDzGRMLRCGzS%2FKvYXlJMYuyJpjFirq2HWPzG0p98QT3TlvEuEsmmZV%2FgOdgc8tBX7zl0QWLOgoyMzMObzTFpIy8xA1OcDL6mLEMDDd%2Flpzsc%2FA7ctLpA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B003QB26MA?th=1&psc=1',
        asin: 'B003QB26MA',
        offeringID:
            '9%2F9Rc1yaVt53Jf1d4fjg55PUPZwTlpphGFHXKNGG%2BprEAjq3O2yVsVCiNyM%2BPimQ%2F92%2FfYKcj3%2FI8b%2BihEpB9SI88MWCSTbVsWJHTFBQLTLlzPHgIjHupGIvMJJb%2BC5eZ4VjN8D%2F3nl%2BQYowBpwDHw%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00TZ8TH9I?th=1&psc=1',
        asin: 'B00TZ8TH9I',
        offeringID:
            'df8KvnUzhSVM7Nu%2BrcQYmkTDo%2FGTyneYBA7GZUaJYdh9qQFPScrLoTpgpSWT8DxIlNAKrAqU9YvsgCOV4FYrgzflpm6xxbVjRoeUDDZBbc2JT%2Fqr6s%2F4KEhwJtDJPs%2Fa9jx71mld%2FOVNXZUN1a8oXQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00OW9OU2O?th=1&psc=1',
        asin: 'B00OW9OU2O',
        offeringID:
            '8BQgwenFNWIQMMZBgsA8OJgNAMkBke37AaToKunEYCwtDUU8OejIrVRi8TlGMjNrq%2BsQbUiOeheOyC%2BAlh78pd4ghmCBwudKtcj%2BkyL0ToLs%2FTA2fNGBkeLy1BM5yBs9bc6Jfhv9iylabgAL7Vq%2B0w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00NNIOU48?th=1&psc=1',
        asin: 'B00NNIOU48',
        offeringID:
            'WbHUrnC%2FwcGk8PDxHQBd9XdCicXHcK3qBDIAexuxFHZI7w1ZNkus7f%2FOFyrZEFQKAJhzK%2B1SIREsn8Rc1rsqNFzepTxHPW61XCIGJZ2cZldznvSQAQDQM%2ByMIfRPHCQTfyn6Y1Ev5YR9rWhUxSQZcQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001G8Y9VG?th=1&psc=1',
        asin: 'B001G8Y9VG',
        offeringID:
            'Yg0HCEhibK0hFyOKUpC7B%2FKsMLBVGcgFhSfzgkYfoTOOyC402TZjKGL5JrB3ciyd0BWy4KPDue7XU61QvbD759Wvu3KAsXnRKb5nHcnfWH3A%2F8cnrXl%2FATgM061Nr%2BX0bgh7pGpvyHc%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00182ERTO?th=1&psc=1',
        asin: 'B00182ERTO',
        offeringID:
            'w3H5dqtpXwDFApTgJCBuM%2Fg4VTaVe1Wl5B%2B9rvzzOuCWAsWXSch4GAYiSmuB%2F9%2BAnOP78BbGB5nFRY3cMHtfWAw2t6ir4K2c%2BD1ZgjsaRdFjnG0xs9%2BZlNnbKJEcFtj%2BqZuMN5Q5SrINP3%2FjZlTb6Q%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07GVPCGJK?th=1&psc=1',
        asin: 'B07GVPCGJK',
        offeringID:
            'WnBKqHC3o%2FUcywpxBces1ISdns%2BbwKOX7V%2B1F7j8agiK1MU35XrMdvhEpLK9K3YFjdq1PLbY9LFQEyT4lPEBObq3CHf5ZUhRpNJ%2BOdV0Vq5HPiFJc1I3y%2FmTXdR2TFdGYe9qcDhOIhaYWZLxLjq4xg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B0073E7JFK?th=1&psc=1',
        asin: 'B0073E7JFK',
        offeringID:
            '83z%2BJDchZOcAdVa6gBn3BD%2BglY6%2Fd1I9NBFYAfGvv%2BFRexANdxHv0yp3oinH8x0aJhceLkEpsvwOtFvaJTsJI01O%2FM6GtHLoGTQ3xogY4nLxKE89CaZKuIxiqGvxmHrNp6ETqhcU4Ibp0fXoBLijog%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B001MIZMIE?th=1&psc=1',
        asin: 'B001MIZMIE',
        offeringID:
            'D6AaVVQD7GCOI8wEJbHoUWcTrzpLksnE%2FfC26ohl8Jy6xirRyAzzNRdmI2HjKwnT0NI9sIJ9gMHZd3p%2FTVN6JNeRNfykaCdvOSyPgLHbSvVcueiPFaEXyNHn3f7v8iOLexJDu6jm4DY%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B06VVP4CLP?th=1&psc=1',
        asin: 'B06VVP4CLP',
        offeringID:
            'tnGpPSpAizl%2Bv6KVFFIbnCZhqoQHyhdd61D03lH7azmuekoZlNogsHxu%2BZEL7ULUy1zEtzQ6oZJzCAxUmcaznH5JoG76FS6377hBnVR5421JWXQo9LNTA4GukEPtpGL8ApSP5NMYD6xSuYBH5IOyGQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B00AHH00O2?th=1&psc=1',
        asin: 'B00AHH00O2',
        offeringID:
            'UijRbj5FU2B4S38v6ItKvOBBXv6O6VRtB1r23H0AacmQ1leKY4aJGb4RohTenws4DtJWUnQr7ECnOsZlzavLngadTliUarxDObaoIy4baUcJ%2FiPLgeflVAKM5%2FNqlQM4nIY2kNV3cLe%2FAW7%2BDZJRdA%3D%3D'
    }
];

export default offerings;
