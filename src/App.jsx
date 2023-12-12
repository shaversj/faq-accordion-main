import iconStar from "/src/assets/images/icon-star.svg";

function App() {
  return (
    <>
      <div className={"flex min-h-screen items-center bg-black"}>
        <div className={"page mx-auto flex h-[812px] w-full max-w-screen-sm items-center bg-green-400 font-Work-Sans lg:h-[900px] lg:max-w-screen-lg"}>
          <div className={"mx-6 my-10 rounded-lg bg-white px-6 pb-2 drop-shadow-lg lg:mx-auto lg:w-[600px] lg:rounded-2xl lg:px-10 lg:pb-4 lg:drop-shadow-2xl"}>
            <header className={"mt-1 flex items-center space-x-6 pt-4 lg:pt-7"}>
              <img src={iconStar} className={"h-[24px] w-[24px] lg:h-[42px] lg:w-[42px]"} alt={""} />
              <h1 className={"text-[32px] font-bold lg:text-[56px]"}>FAQs</h1>
            </header>

            <main className={"divide-y-[0.5px]"}>
              <div className={"py-5 lg:py-[1.3rem]"}>
                <details className={"bg-icon-p bg-right bg-no-repeat open:bg-icon-m open:bg-right-top"}>
                  <summary className={"list-none pr-14 text-[16px] font-semibold leading-[1.2rem] text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[2.25rem]"}>What is Frontend Mentor, and how will it help me?</summary>
                  <p className={"pt-6 text-sm leading-[1.3rem] text-grayish-purple lg:pt-[1.2rem] lg:text-base"}>
                    Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
                  </p>
                </details>
              </div>

              <div className={"py-4 lg:py-[1.3rem]"}>
                <details className={"bg-icon-p bg-right bg-no-repeat open:bg-icon-m open:bg-right-top"}>
                  <summary className={"list-none pr-14 text-[16px] font-semibold leading-[2.25rem] text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[2.25rem]"}>Is Frontend Mentor free?</summary>
                  <p className={"pt-6 text-sm leading-[1.3rem] text-grayish-purple lg:pt-[1.2rem] lg:text-base"}>
                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
                  </p>
                </details>
              </div>

              <div className={"py-5 lg:py-[1.3rem]"}>
                <details className={"bg-icon-p bg-right bg-no-repeat open:bg-icon-m open:bg-right-top "}>
                  <summary className={"list-none pr-14 text-[16px] font-semibold leading-[1.2rem] text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[2.25rem]"}>Can I use Frontend Mentor projects in my portfolio?</summary>
                  <p className={"pt-6 text-sm leading-[1.3rem] text-grayish-purple lg:pt-[1.2rem] lg:text-base"}>
                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
                  </p>
                </details>
              </div>

              <div className={"py-5 lg:py-[1.3rem]"}>
                <details className={"bg-icon-p bg-right bg-no-repeat open:bg-icon-m open:bg-right-top "}>
                  <summary className={"list-none pr-14 text-[16px] font-semibold leading-[1.2rem] text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[2.25rem]"}>How can I get help if I'm stuck on a challenge?</summary>
                  <p className={"pt-6 text-sm leading-[1.3rem] text-grayish-purple lg:pt-[1.2rem] lg:text-base"}>
                    The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
                  </p>
                </details>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
