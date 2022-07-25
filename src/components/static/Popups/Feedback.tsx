import React, { ReactElement, useEffect, useState } from "react";

import styles from "./Feedback.module.scss";
import { Checkbox } from "..";
import { pageGetPropsLayoutOnly } from "../../../lib/pageGetStaticProps";
import ButtonLoader from "../loaders/ButtonLoader";

interface Props {
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  content: any;
  darkBackground?: boolean;
}

export function Feedback({
  onClose,
  content,
  darkBackground,
}: Props): ReactElement {
  const [hover, setHover] = useState<number | null>(null);
  const [isSent, setIsSent] = useState<boolean | null>(null);
  const [buttonContent, setButtonContent] = useState<any>(
    content.feedback_submit
  );
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(true);
  const [rating, setRating] = useState<number | null>(null);
  const [checkboxValue, setcheckboxValue] = useState<string | null>(null);
  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleSubmit = async () => {
    setButtonContent(<ButtonLoader />);

    const res = await fetch("/api/feedback", {
      body: JSON.stringify({
        rating: rating,
        checkboxValue: checkboxValue,
        textareaValue: textareaValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { sent } = await res.json();

    if (sent) {
      setIsSent(true);
      setButtonContent(content.feedback_success);
    } else {
      console.log("res", res.json());
      setIsSent(false);
    }
  };

  useEffect(() => {
    if (rating !== null || checkboxValue !== null || textareaValue !== "") {
      setIsEmptyForm(false);
    } else setIsEmptyForm(true);
  }, [textareaValue, rating, checkboxValue]);

  return (
    <div
      className={`${styles.overlay} ${
        darkBackground ? styles.darkBackground : ""
      }`}
    >
      <div className={styles.content}>
        <div className="is-flex is-justify-content-space-between">
          <h2>Feedback</h2>
          <b onClick={onClose}>✕</b>
        </div>

        <p className="pb-3">{content.feedback_question1}</p>
        <div className="is-flex">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                  }}
                />
                <div
                  className={`${styles.star}  ${
                    ratingValue <= (hover! || rating!)
                      ? styles.full
                      : styles.empty
                  }`}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <p>{content.feedback_question2}</p>
        <div className={styles.checkbox_wrapper}>
          <Checkbox
            type="radio"
            value="yes"
            checked={checkboxValue === "yes"}
            label={content.yes}
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
          <Checkbox
            type="radio"
            value="no"
            checked={checkboxValue === "no"}
            label={content.no}
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
          <Checkbox
            type="radio"
            value="not sure"
            checked={checkboxValue === "not sure"}
            label={content.not_sure}
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
        </div>
        <p className="pt-5">{content.feedback_question3}</p>
        <textarea
          className="my-3"
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        <div className="is-flex is-justify-content-center">
          <button
            disabled={isEmptyForm}
            onClick={handleSubmit}
            className={`${styles.button} ${styles.purple} ${
              isEmptyForm && styles.disabled
            } ${isSent && styles.green_full}`}
          >
            {buttonContent}
          </button>
        </div>
        {/* {isEmptyForm && (
          <p className={styles.error}> {content.feedback_error}</p>
        )} */}
      </div>
    </div>
  );
}

export async function getStaticProps(props) {
  return await pageGetPropsLayoutOnly(props);
}
