import Link from "next/link";
import {
  DropdownBlack,
  DropdownPurple,
  Layout
} from "../src/components/static";
import { Footer } from "../src/components/static";

import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { useStoryblok } from "../src/lib/storyblok";
import { PageContent, Text } from "../src/components/dynamic";

export default function Page({ story, preview, locale }) {
  const { content } = useStoryblok(story, preview, locale);
  console.debug("story", story);
  console.debug("story.content.body", content.body);
  return (
    <Layout>
      <section
        data-dark-bg="true"
        id="section_1"
        className={styles.landing_page}
      >
        <h1>{content.headline}</h1>
        <p className="pt-3">
          <Text blok={content} attribute={'subline'} />
        </p>
      </section>
      <PageContent
        data-dark-bg="false"
        id="section_2"
        blok={content}
        name={'body'}
      />
      <section data-dark-bg="true" id="section_3" className={styles.color_page}>
        <h2>overview</h2>
        <Link href={"#section_5"}>are you injured?</Link>
        <Link href={"#section_7"}>would you like to collect evidence?</Link>
        <Link href={"#section_9"}>
          are you worried about STIs or a possible pregnancy?
        </Link>
        <Link href={"#section_11"}>
          would you like to talk to someone who can give you advice or listen?
        </Link>
        <Link href={"#section_13"}>could you use emotional support?</Link>
        <Link href={"#trigger-warning"}>
          would you like to report what happened to the police?
        </Link>
        <Link href={"#section_17"}>
          would you like to talk to someone about your rights or legal options?
        </Link>
      </section>
      <section
        data-dark-bg="false"
        id="section_4"
        className={styles.white_page}
      >
        <h1>
          if you’d like to find out more about domestic violence before diving
          into help & support, this guide might be helpful
        </h1>

        <Link passHref href={"/"}>
          <button className={styles.button}>sounds good</button>
        </Link>
      </section>
      <section
        data-dark-bg="true"
        id="section_5"
        className={styles.headline_page}
      >
        <h2>are you injured?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_6"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "if you have injuries or are in pain or suspect someone might have given you drugs, these information about emergency care could be helpful"
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
      <section
        data-dark-bg="true"
        id="section_7"
        className={styles.headline_page}
      >
        <h2 className="pb-3">
          would you <br /> like to collect evidence?
        </h2>
        <b>(without getting the police involved)</b>
      </section>
      <section
        data-dark-bg="false"
        id={"section_8"}
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "you can have injuries documented and evidence collected confidentially - without anyone having to know about it. This keeps all your options open and gives you time to think about what you want to do."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        <div className={styles.dropdown_wrapper}>
          <DropdownPurple
            label={"what to know"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
          />
          <DropdownPurple
            label={"where to find help"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
          />
        </div>
      </section>
      <section
        data-dark-bg="true"
        id="section_9"
        className={styles.headline_page}
      >
        <h2>are you worried about STIs or a possible pregnancy?</h2>
      </section>
      <section
        data-dark-bg="false"
        id={"section_10"}
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "so you don’t have to worry about your health on top of everything else, you can get tested & treated and get the morning after pill"
          }
          content={""}
        />
      </section>
      <section
        data-dark-bg="true"
        id="section_11"
        className={styles.headline_page}
      >
        <h2>would you like to talk to someone who can give advice?</h2>
      </section>
      <section
        className={styles.white_page}
        data-dark-bg="true"
        id="section_12"
      >
        <DropdownBlack
          label={
            "there are people who are experts in helping you with all kinds of information & support - wether in person, by phone or in a chat"
          }
          content={""}
        />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you’d like to talk to someone in person</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            if you’d like to talk to someone on the phone
          </h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you’d like to chat with someone online</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
      </section>
      <section
        data-dark-bg="true"
        id="section_13"
        className={styles.headline_page}
      >
        <h2>could you use emotional support?</h2>
      </section>
      <section
        className={styles.white_page}
        data-dark-bg="true"
        id="section_14"
      >
        <DropdownBlack
          label={
            "it’s so valuable to know there are people who listen and help you deal with your experiences. Wether it’s therapy, other survivors or the people around you, this might help you build your personal support system."
          }
          content={""}
        />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            if you’d like to find therapy or a psychologist
          </h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you’d like to talk to other survivors</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you’d like to open up to people around me</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            in case you’re consciously engaging in harmful behavior
          </h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.warning}>
          <h2 className="pb-2">content warning</h2>
          <p id="trigger-warning">
            just so you know, I’ll tell you about the police and filing a report
            in the next section. feel free to skip it if you like.
          </p>
          <Link passHref href={"#section_17"}>
            <button className={styles.button_warning}>skip this part</button>
          </Link>
        </div>
      </section>
      <section
        data-dark-bg="true"
        id="section_15"
        className={styles.headline_page}
      >
        <h2>would you like to report what happened to the police?</h2>
      </section>
      <section
        className={styles.white_page}
        data-dark-bg="true"
        id="section_16"
      >
        <DropdownBlack
          label={
            "it isn’t always easy to find out if reporting is right for you. Here’s what might help you decide and how reporting works in Germany."
          }
          content={""}
        />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you’re wondering if you want to report</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            if you’d like to find out how reporting works
          </h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
      </section>
      <section
        data-dark-bg="true"
        id="section_17"
        className={styles.headline_page}
      >
        <h2>
          would you like to talk to someone about your rights & legal options?
        </h2>
      </section>
      <section
        className={styles.white_page}
        data-dark-bg="true"
        id="section_18"
      >
        <DropdownBlack
          label={
            "if you’re wondering about your legal situation or aren’t safe at home, I’ll show you where you find help - even for free"
          }
          content={""}
        />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            if you’d like to find a lawyer or legal advice
          </h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">if you need free legal advice</h1>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mt-5">
            if you’d like your partner to be evicted from your home for a few
            days
          </h1>
          <p className="py-5">
            in Germany, you have the right to have someone removed from your
            household if they are a danger to you. However: this is only
            possible by getting in touch with the police. Feel free to skip if
            this isn’t an option for you right now.
          </p>
          <DropdownPurple label={"what to know"} content={""} />
          <DropdownPurple label={"where to find help"} content={""} />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "result_1"
  });
}
