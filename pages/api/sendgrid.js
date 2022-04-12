const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(req, res) {
  console.debug("REQ.BODY", req.body);
  mail
    .send({
      to: "info@louandyou.org",
      from: "nk@louandyou.org",
      subject: "User Feedback",
      html: `<p>How helpful have these information been? <b>${req.body.rating}</b></p>
      <p>Did I address your personal needs this time? <b>${req.body.checkboxValue}</b></p>
      <p>What else would you like me to know or to help you with in the future? <b>${req.body.textareaValue}</b></p>
      `,
    })
    .then(() => {
      console.debug("Email sent");
      res.status(200).json({ sent: true });
    })
    .catch((error) => {
      console.error(error);
      res.json({ sent: false });
    });
}

export default sendEmail;
