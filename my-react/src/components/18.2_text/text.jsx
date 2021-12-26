import React, { useState } from "react";
import "./text.css";

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, exercitationem facere, natus dolores officia aliquid aspernatur excepturi perferendis totam blanditiis nulla nam consequatur omnis fuga veritatis aliquam labore. Similique ipsa tempore quam, neque totam cupiditate adipisci laudantium quasi, cumque aliquam odit quod ad quaerat exercitationem sint pariatur assumenda? Saepe delectus debitis accusamus voluptates aut voluptate iure sequi amet porro omnis. Voluptatibus saepe obcaecati, in quae provident quia suscipit itaque cumque eum maiores et, placeat impedit rem reiciendis eligendi eius ipsa exercitationem ipsam. Rem distinctio ab ipsa, sapiente dicta sit! Consequuntur quod voluptatibus praesentium, nulla quibusdam labore et blanditiis, distinctio culpa veritatis quidem deserunt, facere aliquid. Placeat dolores consequuntur sunt, quia officiis blanditiis aut illo quam voluptatum sint consequatur. Quia dignissimos veniam possimus? Magni doloribus quo illo nesciunt modi? Nisi dignissimos maxime ducimus asperiores, cumque iste magni molestiae perferendis veritatis ea, similique accusamus, fugiat illum eligendi doloremque recusandae delectus. Eligendi at facilis rem, nemo ab inventore quia officia, suscipit nam labore commodi maiores quaerat tenetur voluptate! Quod sit ipsa beatae quo repellat similique, dolore sed voluptatem obcaecati expedita eaque odit quas sunt est facilis asperiores aliquid numquam reprehenderit. A, animi quidem facere consequatur debitis omnis autem obcaecati dolorem minima iste laudantium!";

export const TextFunc = () => {
  const [maxLenLength, setMaxLenLength] = useState(true);

  const showText = () => {
    if (maxLenLength) {
      return lorem.slice(0, Math.floor(lorem.length / 2));
    } else {
      return lorem;
    }
  };

  const TextContainer = () => {
    return (
      <div>
          {showText()}
          <span
            className="readMore"
            onClick={() => setMaxLenLength(!maxLenLength)}
          >
            {" "}
            Read more
          </span>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <TextContainer />
      </div>
    </div>
  );
};
