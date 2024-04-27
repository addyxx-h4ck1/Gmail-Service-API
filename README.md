# Gmail-Service-API

This is a nodeJS project that is integrated with the GoogleAPI's (Gmail API) together with the nodemailer module. It is a REST API that can only handle a POST request and can be integrated in any website to handle contact forms and newsletters.

## API Reference

This is a REST API. It only handles a POST request. The request body should be an object with the following keys; name, email, subject and message. The key names should be exactly the same as the once indicated in the API Reference.

```http
  POST /api/v1/mail-service
```

| body      | Type     | Description (REQUIRED)             |
| :-------- | :------- | :--------------------------------- |
| `name`    | `string` | Include sender's name in the body  |
| `email`   | `string` | Include sender's email in the body |
| `subject` | `string` | The subject of the email           |
| `message` | `string` | The content of the email           |

If the request is successful the API returns {ok:true} else the error code will be returned.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT_ID`

`CLIENT_SECRET`

`REFRESH_TOKEN`

`REDIRECT_URI`

## Installation

Clone the respository in your computer

```bash
  clone the respository
  git clone https://github.com/addyxx-h4ck1/Gmail-Service-API.git

```

Use your package manager to install the dependencies

```bash
  if you use npm use:
  npm install

```

for everything to work you'll need to create a .env file and add the following variables. THE VARIABLE NAMES MUST MATCH WITH THE ONES INDICATED

```bash
 .env file variables

 CLIENT_ID
 CLIENT_SECRET
 REFRESH_TOKEN
 REDIRECT_URI

```

The variables can only be created on the google developer console. use the google docs.

The server runs on port 3000 on development . once youve created all the variables with google and you have verified your details you can now start the server

```bash
  to start server, in the terminal run: (use one command)
  once you see 'server is running on port 3000'
  go to your browser and in the url type 'localhost:3000'
  you should see a form from which you can work with.

  npm run dev
  node index
  npm run start

```

If you encounter any errors on problems reach out for free assistance

## Feedback

If you have any feedback, please reach out to us at
business.briann@gmail.com

## Authors

- [@briann_bn](https://www.github.com/addyxx-h4ck1)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 🔗 Links (Contact me)

[![whatsapp](https://img.shields.io/badge/whatsapp-1DA1F2?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+254768299380)

## Support

For support, follow my github profile for more projects.
