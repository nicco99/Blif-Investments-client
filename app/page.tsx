import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
}
