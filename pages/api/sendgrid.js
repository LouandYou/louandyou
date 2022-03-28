const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(req, res) {
  console.debug("REQ.BODY", req.body);
  mail
    .send({
      to: "saturdaysyouth@gmail.com",
      from: "saturdaysyouth@gmail.com",
      subject: "User Feedback",
      html: `<p>How helpful have these information been? <bold>${req.body.rating}</bold></p>
      <p>Did I address your personal needs this time? <bold>${req.body.checkboxValue}</bold></p>
      <p>What else would you like me to know or to help you with in the future? <bold>${req.body.textareaValue}</bold></p>
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
