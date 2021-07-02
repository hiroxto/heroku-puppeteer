# heroku-puppeteer-tasks

HerokuでPuppeteerを使う

## 初期化

```bash
heroku create
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add jontewks/puppeteer
git push heroku main
```
