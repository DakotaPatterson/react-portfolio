import me from '../assets/me.jpg';
import {Image} from "react-bootstrap";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <Image
        src={me}
        alt="Profile Picture"
        rounded
        width={150}
        height={200}
                                
      />
      <p>
        My name is Dakota Patterson and I am an entry level software developer that loves learning new things and strives to make every project I work on as perfect as I can.
        I look forward to constantly learning new things while on the job and picking up all the new technology that is thrown my way.
        <br></br>
        <br></br>
        In my free time I enjoy going to the gym, cooking new foods and spending time with my two huskies.
        I love spending time outdoors and exploring new places and all they have to offer!
        <br></br>
        <br></br>
        I am also the Director of Engagement for a 501c3 non-profit organization in Columbus, Ohio.
        We strive to provide access to the community for anyone that has a desire to learn the lovely game of chess.

        <br></br>
        <br></br>
        I have learned how to integrate and partner with other organizations, develop projects to drive community engagement, and strategize for
        grant/funding acquisition.

      </p>
    </div>
  );
}
