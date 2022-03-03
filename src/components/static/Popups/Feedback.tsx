import React, { ReactElement, useState } from "react";

import styles from "./Feedback.module.scss";
import { Checkbox } from "..";

interface Props {
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export function Feedback({ onClose }: Props): ReactElement {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [checkboxValue, setcheckboxValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleSubmit = async () => {
    const res = await fetch("/api/sendgrid", {
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

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.close_btn} onClick={onClose}>
          ✕
        </div>
        <h2>How can I help you even better?</h2>
        <p className="py-3">How helpful have these information been?</p>
        <div className="is-flex is-justify-content-space-evenly">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
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
        <p className="pt-5 pr-2">
          Did I address your personal needs this time?
        </p>
        <div className="py-2 is-flex">
          <Checkbox
            type="radio"
            value="yes"
            checked={checkboxValue === "yes"}
            label="yes"
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
          <Checkbox
            type="radio"
            value="no"
            checked={checkboxValue === "no"}
            label="no"
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
          <Checkbox
            type="radio"
            value="not sure"
            checked={checkboxValue === "not sure"}
            label="not sure"
            onChange={(e) => setcheckboxValue(e.target.value)}
          />
        </div>
        <p className="pt-5 pr-2">
          What else would you like me to know or to help you with in the future?
        </p>
        <textarea
          className="my-4"
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        <div className="pt-5 is-flex is-justify-content-center">
          <button
            onClick={handleSubmit}
            className={`${styles.button} ${styles.purple}`}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
