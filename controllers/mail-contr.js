const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const credentials = require('../config/config')

const mailController = (req, res) => {
  //req Object received
  const { message, email, subject, name } = req.body

  //google auth
  const oAuth2Client = new google.auth.OAuth2(
    credentials.CLIENT_ID,
    credentials.CLIENT_SECRET,
    credentials.REDIRECT_URI
  )
  oAuth2Client.setCredentials({ refresh_token: credentials.REFRESH_TOKEN })

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken()
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          //change the user with the one you've permitted to use thus API on the google console
          user: 'business.briann@gmail.com',
          clientId: credentials.CLIENT_ID,
          clientSecret: credentials.CLIENT_SECRET,
          refreshToken: credentials.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      })

      const mailOptions = {
        from: `${name} <${email}>`,
        to: 'briannjosh23@gmail.com',
        subject: `${subject}`,
        text: message,
        html: `<h1>${message}</h1>`,
      }

      const success = await transporter.sendMail(mailOptions)
      res.status(200).json({ ok: true, success })
    } catch (error) {
      res.status(error.status).json({ ok: false, error })
    }
  }

  //execute email service
  sendMail()
}

module.exports = {
  mailController,
}
