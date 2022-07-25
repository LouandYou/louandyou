const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const body = req.body;
  try {
    await mail.send({
      to: "nk@louandyou.org",
      from: "nk@louandyou.org",
      subject: "Message From User",
      html: `<p>Name: <b>${body.name}</b></p>
            <p>Email: <b>${body.email}</b></p>
            <p>Message: <b>${body.content}</b></p>
            `,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: error });
  }

  return res.status(200).json({ sucess: true });
}

export default sendEmail;
