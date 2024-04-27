const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID =
  '532679423431-9k96fg3r0s0e8o24jf0sjm57lss38pmv.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN =
  '1//041wfYWFYq6xDCgYIARAAGAQSNwF-L9IrIXbADojg2_pDyYNzzlBVBeVNVv7vzshTC_zCXUTI0g3QZVKGVg96vEIa_QaX0XmS3Mw'

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAUTH2',
        user: 'business.briann@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    })

    const mailOptions = {
      from: 'Terry Njoroge <terrynjoroge072@gmail.com>',
      to: 'briannjosh23@gmail.com',
      subject: 'Gmail API Testing',
      text: 'Hello testing two',
      html: `<h1>Hello from Gmail API</h1>`,
    }

    const success = await transporter.sendMail(mailOptions)
    return success
  } catch (error) {
    console.log(error)
  }
}

// sendMail()
//   .then((success) => console.log('Email sent.......', success))
//   .catch((err) => console.log(err))
