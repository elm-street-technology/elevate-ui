import React, { Component } from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Modal from "elevate-ui/Modal";
import Button from "elevate-ui/Button";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultVisible: false,
    };
  }

  handleModalToggle = (modalTarget) => {
    this.setState((state) => ({ [modalTarget]: !state[modalTarget] }));
  };

  confirmModal = () => alert("Confirmed!");

  render() {
    const { defaultVisible } = this.state;
    return (
      <Paper>
        <Typography type="title">Default</Typography>
        <Button
          type="button"
          isOutlined
          color="secondary"
          onClick={() => this.handleModalToggle("defaultVisible")}
        >
          Open Modal
        </Button>
        <Modal
          confirmAction={this.confirmModal}
          title="Default Modal"
          visible={defaultVisible}
          toggleModal={() => this.handleModalToggle("defaultVisible")}
        >
          <h1>You can crush me but you can't crush my spirit!</h1>
          <p>
            Bender, being God isn't easy. If you do too much, people get
            dependent on you, and if you do nothing, they lose hope. You have to
            use a light touch. Like a safecracker, or a pickpocket. No! The cat
            shelter's on to me.
          </p>
          <p>
            Ummm…to eBay? Anyhoo, your net-suits will allow you to experience
            Fry's worm infested bowels as if you were actually wriggling through
            them. I can explain. <strong> It's very valuable.</strong>{" "}
            <em> Too much work.</em> Let's burn it and say we dumped it in the
            sewer.
          </p>
          <h2>Oh, you're a dollar naughtier than most.</h2>
          <p>
            Oh dear! She's stuck in an infinite loop, and he's an idiot! Well,
            that's love for you. File not found. What are their names? Bender,
            quit destroying the universe!
          </p>
          <ol>
            <li>
              Whoa a real live robot; or is that some kind of cheesy New Year's
              costume?
            </li>
            <li>Negative, bossy meat creature!</li>
            <li>Who are you, my warranty?!</li>
          </ol>

          <h3>There's no part of that sentence I didn't like!</h3>
          <p>
            But existing is basically all I do! What are you hacking off? Is it
            my torso?! 'It is!' My precious torso! Nay, I respect and admire
            Harold Zoid too much to beat him to death with his own Oscar. Robot
            1-X, save my friends! And Zoidberg!
          </p>
          <ul>
            <li>What are their names?</li>
            <li>
              You'll have all the Slurm you can drink when you're partying with
              Slurms McKenzie!
            </li>
            <li>Why would I want to know that?</li>
          </ul>

          <p>
            I was all of history's great robot actors - Acting Unit 0.8;
            Thespomat; David Duchovny! Tell them I hate them. Now Fry, it's been
            a few years since medical school, so remind me. Disemboweling in
            your species: fatal or non-fatal?
          </p>
          <p>
            No! Don't jump! Would you censor the Venus de Venus just because you
            can see her spewers? Humans dating robots is sick. You people wonder
            why I'm still single? It's 'cause all the fine robot sisters are
            dating humans!
          </p>
          <p>
            You can crush me but you can't crush my spirit! I don't 'need' to
            drink. I can quit anytime I want! Take me to your leader! I don't
            know what you did, Fry, but once again, you screwed up! Now all the
            planets are gonna start cracking wise about our mamas.
          </p>
          <p>
            I never loved you. No, of course not. It was… uh… porno. Yeah,
            that's it. You're going to do his laundry? OK, this has gotta stop.
            I'm going to remind Fry of his humanity the way only a woman can.
          </p>
          <p>
            File not found. You mean while I'm sleeping in it? Yes, except the
            Dave Matthews Band doesn't rock. Come, Comrade Bender! We must take
            to the streets! And yet you haven't said what I told you to say! How
            can any of us trust you?
          </p>
          <p>
            I feel like I was mauled by Jesus. Oh right. I forgot about the
            battle. In our darkest hour, we can stand erect, with proud upthrust
            bosoms. Why did you bring us here? I don't want to be rescued.
          </p>
          <p>
            Also Zoidberg. Bender, this is Fry's decision… and he made it wrong.
            So it's time for us to interfere in his life. As an interesting side
            note, as a head without a body, I envy the dead. I found what I
            need. And it's not friends, it's things.
          </p>
          <p>
            And when we woke up, we had these bodies. Good news, everyone!
            There's a report on TV with some very bad news! But existing is
            basically all I do! For example, if you killed your grandfather,
            you'd cease to exist!
          </p>
          <p>
            Is that a cooking show? Bender, quit destroying the universe! For
            one beautiful night I knew what it was like to be a grandmother.
            Subjugated, yet honored. All I want is to be a monkey of moderate
            intelligence who wears a suit… that's why I'm transferring to
            business school!
          </p>
          <p>
            Kif might! I'm sorry, guys. I never meant to hurt you. Just to
            destroy everything you ever believed in. You seem malnourished. Are
            you suffering from intestinal parasites? Kids don't turn rotten just
            from watching TV.
          </p>
          <p>
            For the last time, I don't like lilacs! Your 'first' wife was the
            one who liked lilacs! You seem malnourished. Are you suffering from
            intestinal parasites? Also Zoidberg. What are their names? Oh, but
            you can. But you may have to metaphorically make a deal with the
            devil. And by "devil", I mean Robot Devil. And by "metaphorically",
            I mean get your coat.
          </p>
        </Modal>
      </Paper>
    );
  }
}

export default ModalExample;
