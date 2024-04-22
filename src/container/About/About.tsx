import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

type About = {
  title: string;
  description: string;
  imgUrl: string;
};

const About = () => {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).toString()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap({
  Component: MotionWrap({ Component: About, classNames: "app_about" }),
  idName: "about",
  classNames: "app__whitebg",
});
