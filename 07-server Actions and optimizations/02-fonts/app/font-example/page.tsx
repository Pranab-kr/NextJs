import { Roboto, Jockey_One } from "next/font/google";
import localFont from "next/font/local";

const myLocalFont = localFont({
  src: "../../public/Paper Noise.otf",
});

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const jockeyOne = Jockey_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jockey-one",
});

const ExampleFont = () => {
  return (
    <div className={`text-center  p-8`}>
      <h1 className={`${myLocalFont.className} text-4xl font-bold mb-4`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, id?
      </h1>
      <p className={`${jockeyOne.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, id
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        officia doloremque amet unde perferendis mollitia rem reprehenderit
        culpa nobis? Eaque!
      </p>
    </div>
  );
};

export default ExampleFont;
