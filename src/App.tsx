import "./App.css";
import Jessica from "@assets/avatar-jessica.jpeg";

function App() {
  const buttons = [
    {
      name: "GitHub",
      link: "https://github.com/jessicarandall",
    },
    {
      name: "Frontend Mentor",
      link: "https://www.frontendmentor.io/profile/jessica-randall",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jessica-randall-a1a41511a/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/jessicarandall",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/jessicarandall/",
    },
  ];

  return (
    <div className="h-screen bg-off-black flex justify-center">
      <div className="bg-dark-grey text-white self-center font-sans w-96 rounded-xl h-min p-10 text-center flex flex-col content-center gap-1 text-sm">
        <img
          src={Jessica}
          className="rounded-full size-20 self-center my-4"
        ></img>
        <div className="text-2xl font-bold">Jessica Randall</div>
        <div className="text-green font-semibold">London, United Kingdom</div>
        <div className="my-6">"Front-end developer and avid reader."</div>
        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <a
              href={button.link}
              target="_blank"
              rel="noreferrer"
              className="bg-grey rounded-md p-2 hover:bg-green hover:text-off-black font-semibold"
            >
              {button.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
