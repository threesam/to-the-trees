import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()

export async function post({request}) {
    const body = await request.json()
    console.log('body', body);
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.VITE_EMAIL_USERNAME, // generated ethereal user
        pass: process.env.VITE_EMAIL_PASSWORD, // generated ethereal password
      },
    })
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Contact" <sam@threesam.com>`, // sender address
      to: `${body.email}, sam@threesam.com`, // list of receivers
      subject: "Contact", // Subject line
      text: body.message, // plain text body
      html: `<html>
        <body>
          <h1>Message from ${body.name}</h1>
          <blockquote>${body.message}</blockquote>
          <h2>Thanks for reaching out!</h2>
          <p>I'll get back to you soon!</p>
        </body>
      </html>`, // html body
    })
  
    // console.log("Message sent: %s", info.messageId)
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    console.log('info', info)
    return {
      status: 200,
      body: info
    }
}

