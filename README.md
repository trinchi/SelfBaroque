# SelfBaroque

## Setup

1. Open the following [link](https://www.instagram.com/oauth/authorize/?client_id=145480c63e944a37b50bc0df19b18f52&redirect_uri=https://github.com/Mar0/SelfBaroque&response_type=token) to authorize this Instagram Client to access your profile. You will get redirected to this Github Page again. Don't close this new window yet!

2. Within the redirected URL you will have a `access_token=` URL fragment. Copy this received token. You'll need it later.

3. `git clone` this repository

4. Use **npm** to install all required dependencies

5. Within the **config.json** you can now insert the recevied Access Token. See [here](README.md#configjson) for more options.

6. Run `npm run build` to build　your own `SelfBaroque.js`. It will be generated under `build\`.

7. Insert `<div id="selfbaroque"></div>` wherever you want the Instagram wall to be placed.

8. Add `<script src="SelfBaroque.js"></script>` to the end of yur HTML file. Change the path accordingly.

9. Have fun!

## config.json

### ACCESS_TOKEN

Insert your received Access Token here.

### image resolution

Desired image resolution (optionally 'low_resolution' and 'thumbnail' are possible).

### mediaCount

Amount of images to show.
