import Link from "next/link";
import React from "react";
import styles from "./LanguageSwitch.module.scss";
import { useRouter } from "next/dist/client/router";

const prependSlash = (path: string) =>
  path.charAt(0) === "/" ? path : `/${path}`;

function LanguageSwitch({ locales, locale, defaultLocale }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {locales.map((loc) => (
        <Link
          key={loc}
          href={prependSlash(
            `${loc === defaultLocale ? "" : loc}${router.pathname}`
          )}
          locale={false}
          passHref
        >
          <a>
            <div
              style={{ margin: "0 5px", padding: "0 2px" }}
              aria-label={loc === "de" ? "Deutsch" : "English"}
              className={loc === locale ? styles.selected : ""}
            >
              {loc.toUpperCase()}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default LanguageSwitch;
