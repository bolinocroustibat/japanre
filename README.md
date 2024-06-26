# JAPANRE

Play this geographical Japan wordle here: [https://japanre.adriencarpentier.com](https://japanre.adriencarpentier.com)!

Heavily adapted from [Worldle](https://worldle.teuteuf.fr/) by [teuteuf](https://github.com/teuteuf/), which was heavily inspired by [Wordle](https://wordle.net/) by Josh Wardle.

## To test

```bash
bun install -g serve
serve -s build
```

Then test on `http://server_ip:3000`.

## To deploy on production with Nginx

Follow instructions on https://create-react-app.dev/docs/deployment/

```bash
bun run build
```

Example nginx vhost:
```nginx
server {
    server_name japanre.adriencarpentier.com;
    root /var/www/japanre/build;
    index index.html;
    location / {
        try_files $uri /index.html;
        #try_files $uri $uri/ =404;
    }
}
```

## Resources used

- Prefectures with long/lat => https://www.kaggle.com/datasets/corochann/japan-prefecture-latitude-longitude
- Emojis & World icon => https://github.com/twitter/twemoji
- Images of prefectures => https://commons.wikimedia.org/
