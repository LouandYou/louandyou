import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import { LinkButton } from "../../src/components/static";
import styles from "./About.module.scss";
import { useEffect, useState } from "react";
import ButtonLoader from "../../src/components/static/loaders/ButtonLoader";

export default function Page({ story }) {
  const [buttonContent, setButtonContent] = useState<any>("send");
  const [isSent, setIsSent] = useState<boolean | null>(null);
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(true);

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const { content } = story;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonContent(<ButtonLoader />);

    const data = {
      name: name,
      email: email,
      content: message,
    };

    console.log("data", data);

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/contact";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const success = await response.json();
    console.log("succes", success);

    if (success) {
      setIsSent(true);
      setButtonContent("success");
    } else {
      setIsSent(false);
    }
  };

  useEffect(() => {
    if (name !== null && email !== null && message !== null) {
      setIsEmptyForm(false);
    } else setIsEmptyForm(true);
  }, [name, email, message]);

  return (
    <>
      <section
        className={`${styles.white_page} is-flex-direction-column is-align-items-flex-start `}
      >
        <h2>{content.form_headline}</h2>
        <p className="mb-5">{content.form_p}</p>
        <form
          className={styles.contact_form}
          onSubmit={handleSubmit}
          method="post"
        >
          <div className={styles.field}>
            <label htmlFor="name">Name *</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type={"text"}
              name="name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="name">Email *</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              name="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="name">{content.form_content} * </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="textarea"
              name="content"
            />
          </div>
          <div className="mt-4">
            <button
              disabled={isEmptyForm}
              type="submit"
              className={`${styles.button} ${styles.purple} ${
                isEmptyForm && styles.disabled
              } ${isSent && styles.green_full}`}
            >
              {buttonContent}
            </button>
          </div>
        </form>
      </section>
      <section className={`${styles.blue_section} ${styles.link}`}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section
        style={{ minHeight: "fit-content" }}
        className={styles.white_page}
      >
        <Text blok={content} attribute={"text2"} />
      </section>
      <section className={styles.blue_section}>
        <h2>{content.text3}</h2>
        <div className={styles.btn_container}>
          <LinkButton
            href={"https://seu2.cleverreach.com/f/314808-318550/"}
            variant="white"
          >
            {content.text3_button}
          </LinkButton>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/contact",
  });
}
