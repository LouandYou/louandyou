import Link from "next/link";
import { DropdownBlack, Layout } from "../src/components/static";
import { Footer } from "../src/components/static";

import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { useStoryblok } from "../src/lib/storyblok";
import { PageContent, Text } from "../src/components/dynamic";
import { Feedback } from "../src/components/static/Feedback";
import { useState } from "react";

export default function Page({ story, preview, locale }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const { content } = useStoryblok(story, preview, locale);
  return (
    <Layout>
      <section className={styles.landing_page}>
        <h1>{content.headline}</h1>
        <p className="pt-3">
          <Text blok={content} attribute={"subline"} />
        </p>
      </section>
      <PageContent blok={content} name={"body"} />
      <section className={styles.white_page}>
        <p className="mb-5">
          if you’re not sure if these options are for you, you can find out
          about domestic violence here.
        </p>

        <Link passHref href={"/"}>
          <button className={`${styles.button} ${styles.purple}`}>
            show me more
          </button>
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
        <p>
          if you have injuries or are in pain or suspect someone might have
          given you drugs, these information about emergency care could be
          helpful
        </p>
        <DropdownBlack
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
        <h2 className="pb-3">would you like to collect evidence?</h2>
        <b>(without getting the police involved)</b>
      </section>
      <section
        data-dark-bg="false"
        id={"section_8"}
        className={styles.white_page}
      >
        <div className="mb-5">
          <p>
            you can have injuries documented and evidence collected
            confidentially - without anyone having to know about it. This keeps
            all your options open and gives you time to think about what you
            want to do.
          </p>
          <DropdownBlack
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
          />
        </div>
        <DropdownBlack
          label="what to know"
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        <DropdownBlack
          label="where to find help"
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
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
        <p>
          so you don’t have to worry about your health on top of everything
          else, you can get tested & treated and get the morning after pill{" "}
        </p>
        <DropdownBlack content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
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
        <p>
          there are people who are experts in helping you with all kinds of
          information & support - whether in person, by phone or in a chat{" "}
        </p>
        <DropdownBlack content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you’d like to talk to someone in person</h1>
          <DropdownBlack label="what to know" content={""} />
          <DropdownBlack label="where to find help" content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            if you’d like to talk to someone on the phone
          </h1>
          <DropdownBlack label="what to know" content={""} />
          <DropdownBlack label="where to find help" content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you’d like to chat with someone online</h1>
          <DropdownBlack label="what to know" content={""} />
          <DropdownBlack label="where to find help" content={""} />
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
        <p>
          it’s so valuable to know there are people who listen and help you deal
          with your experiences. Whether it’s therapy, other survivors or the
          people around you, this might help you build your personal support
          system.
        </p>
        <DropdownBlack content={""} />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            if you’d like to find therapy or a psychologist
          </h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you’d like to talk to other survivors</h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you’d like to open up to people around me</h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            in case you’re consciously engaging in harmful behavior
          </h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.warning}>
          <h2 className="mb-4">content warning</h2>
          <p className="mb-5" id="trigger-warning">
            just so you know, I’ll tell you about the police and filing a report
            in the next section. feel free to skip it if you like.
          </p>
          <Link passHref href={"#section_17"}>
            <div className="is-flex is-justify-content-center">
              <button className={`${styles.button} ${styles.purple}`}>
                skip this part
              </button>
            </div>
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
        <p>
          it isn’t always easy to find out if reporting is right for you. Here’s
          what might help you decide and how reporting works in Germany.
        </p>
        <DropdownBlack content={""} />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you’re wondering if you want to report</h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            if you’d like to find out how reporting works
          </h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
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
        <p>
          if you’re wondering about your legal situation or aren’t safe at home,
          I’ll show you where you find help - even for free
        </p>
        <DropdownBlack content={""} />
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            if you’d like to find a lawyer or legal advice
          </h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">if you need free legal advice</h1>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
        <div className={styles.dropdown_wrapper}>
          <h1 className="mb-5">
            if you’d like your partner to be evicted from your home for a few
            days
          </h1>
          <p className="py-5">
            in Germany, you have the right to have someone removed from your
            household if they are a danger to you. However: this is only
            possible by getting in touch with the police. Feel free to skip if
            this isn’t an option for you right now.
          </p>
          <DropdownBlack label={"what to know"} content={""} />
          <DropdownBlack label={"where to find help"} content={""} />
        </div>
      </section>
      <section className={styles.color_page}>
        <h2 className="mb-5">where to go from here?</h2>
        <p>
          after going through these elements, you should have a good overview
          about the possibilites & resources in place for you.
          <br /> <br />
          For you to be reading this means that you have started looking for
          support and are now on your journey to create a self-defined life.
          <br /> <br />
          <b>
            That’s an incredibly powerful thing to do and you can be so proud of
            yourself!
          </b>
          <br /> <br />
          Still, it’s only natural to feel overwhelmed at times, so I hope I
          could already help you a little. In the time to come, feel free to go
          through this page whenever you like. While there are some things
          you’ll want to do now, there will be other resources you’ll be ready
          for at a later time. Do what feels right for you and take one step
          after another. <b>This is about you and your journey.</b>
        </p>
      </section>
      <section className={styles.white_page}>
        <h2 className="my-5">let’s build the future of me & you</h2>
        <p className="mt-5">
          in the coming months, I’ll be learning a lot about how I can support
          you.
          <br /> <br />
          I’ll share more and more resources with you and provide you with
          powerful tools: from a time stamped journal to a personal to do list,
          <b>
            {" "}
            from anonymous communication with help services to a digital safe
            where you can save documentation & evidence
          </b>{" "}
          – we’ll make the future easier for you.
        </p>

        <h3 className="mb-5">this is what Lou&You is all about</h3>
        <p className="my-5">
          to become the supporting companion you need and deserve,{" "}
          <b>
            I’d appreciate if you take a moment to give me feedback and share
            your ideas with me.
          </b>{" "}
        </p>
        <div className="mt-5 is-flex is-justify-content-center">
          <button
            onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
            className={`${styles.button} ${styles.purple}`}
          >
            give feedback
          </button>
        </div>
        {isFeedbackOpen && (
          <Feedback
            isOpen={isFeedbackOpen}
            onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
          />
        )}
      </section>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "result_1",
  });
}
