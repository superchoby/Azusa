import React, { useState } from "react";
import "./style.css";
import { TextMessage } from "./textmessage";
import { useHistory } from "react-router-dom";

let index = 0;

export function Letter() {
  const history = useHistory();
  if (!window.sessionStorage.getItem("hasAccess")) {
    history.push("/");
  }
  const messages = [
    "Hey Azusa,",

    "I hope you have a great day today.",

    `For one month we will be
      the same age, cool! That means for one month you don't have to call me
      先輩 or use 敬語 lol.`,

    `I was thinking of mailing you something but there
      was no guarantee that it would come exactly on your birthday so I hope
      that this present works. Normally, there would be a lot of people there to
      sing and a actual cake but I hope what I did this time was fine. It was 
      way cooler in my head but I got too nervous when I sang it😅`,

    `A lot of
      times I smile during the calls because I think about this website idea I
      have for you and sometimes I reeeeaaaaalllllyyyy want to tell you but I
      try my best not to, it took sooooooo much effort lol, especially this past
      week.`,

    `The truth is I've had this idea for a few weeks and originally it
      was just the video but I decided to do a website after you sent me 
      the amazing drawing in the letter, I got so excited with this idea
       but I haven't had much time, so it
      didn't turn out as well as I thought it would lol. I don't know if you
      ever wondered why I haven't sent you a letter yet but if you ever were
      wondering, it's because of this website.`,

    `I feel like this is the least I
      could do because you basically give me a present everyday with the
      pictures you send me and with all the fun you give me just by talking to
      you. Oh, and with the amazing drawing you did for me. Before we became
      boyfriend and girlfriend, there were two times where I thought this "girl
      is just perfect". One time was when I saw your drawing, and the other time
      was when you told me からかい上手の高木さん was one of your top 5 anime
      lol.`,

    `I guess as a mini present, I could say one of the things that
      ちなたん said she would keep secret. Idk if it'll surprise you but I
      started liking you after just 3 days of knowing you, feel free to ask me
      more about this later if you want lol.`,

    `I was so glad when you told me
      about how you had plans with your family and your friends invited you to
      celebrate your birthday because you deserve it so much. If I timed this
      correctly, this should be before you go out to eat dinner with your
      friends, so I hope you have an amazing dinner with all of them and end
      your birthday in the best possible way!`,

    `I do feel a little sad that I
      can't be there to celebrate it with you but in the future, I hope to be
      able to celebrate your birthday with you every time!`,

    `I hope you get very
      cute presents because you are super cute and I think it would be a great
      match.`,

    "From,",

    "Your boyfriend who cherishes you deeply,",

    "Thomas Trinh",

    "",
  ];

  let delay = 0;
  let odd = true;
  const textMessages = messages.map((message) => {
    delay += 3;
    odd = odd ? false : true;
    let textMessage = null;
    setTimeout(function () {
      window.scroll(0, 200);
    }, 25000);

    setTimeout(function () {
      window.scroll(0, 400);
    }, 30000);

    setTimeout(function () {
      window.scroll(0, 600);
    }, 35000);

    if (index > 2 && index < 10) {
      textMessage = (
        <TextMessage
          delay={delay - 1}
          message={message}
          key={message}
          odd={odd}
          loadMessageTime={2500}
        />
      );
    } else {
      textMessage = (
        <TextMessage
          delay={delay - 1}
          message={message}
          key={message}
          odd={odd}
          loadMessageTime={1500}
        />
      );
    }
    index += 1;
    return textMessage;
  });

  return <div className="final-letter">{textMessages}</div>;
}
