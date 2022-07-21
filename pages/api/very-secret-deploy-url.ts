import axios from "axios";

export default async function search(req, res) {
  try {
    await axios.post('https://api.netlify.com/build_hooks/62612c00702fc44159e2aead')
    return res.status(200).send("Successfully triggered a new deploy");
  } catch (e) {
    return res.status(200).send("Unable to trigger a new deploy. Error: " + e);
  }
}
