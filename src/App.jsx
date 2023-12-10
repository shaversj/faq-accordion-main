import iconStar from '/src/assets/images/icon-star.svg'
function App() {


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"page bg-green-400 max-w-screen-sm w-full h-[812px] lg:max-w-screen-lg lg:h-[900px] mx-auto font-Work-Sans flex items-center"}>
                <div className={"bg-white mx-6 my-10 px-6 pb-2 lg:px-10 lg:mx-auto lg:w-[600px] rounded-lg lg:rounded-2xl lg:pb-4 lg:drop-shadow-2xl drop-shadow-lg"}>
                    <header className={"flex items-center space-x-6 pt-4 lg:pt-8"}>
                        <img src={iconStar} className={"w-[24px] h-[24px] lg:w-[42px] lg:h-[42px]"} alt={""} />
                        <h1 className={"text-[32px] font-bold lg:text-[56px]"}>FAQs</h1>
                    </header>
                    <main className={"divide-y-[0.5px]"}>
                        <div className={"py-5 lg:py-6"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top"}>
                                <summary className={"list-none pr-14 leading-[1.2rem] lg:leading-[1.75rem] text-[16px] lg:text-[18px] font-semibold text-dark-purple hover:text-hover-purple"}>What is Frontend Mentor, and how will it help me?</summary>
                                <p className={"text-grayish-purple text-sm pt-6 lg:text-base"}>
                                    Frontend Mentor offers realistic coding challenges to help developers improve their
                                    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                                    all levels and ideal for portfolio building.
                                </p>

                            </details>
                        </div>

                        <div className={"py-5 lg:py-6"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 text-[16px] font-semibold text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[1.75rem]"}>Is Frontend Mentor free?</summary>
                                <p className={"text-grayish-purple text-sm pt-6 lg:text-base"}>
                                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free
                                    option providing access to a range of projects suitable for all skill levels.
                                </p>

                            </details>
                        </div>

                        <div className={"py-5 lg:py-6"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 leading-[1.2rem] text-[16px] font-semibold text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[1.75rem]"}>Can I use Frontend Mentor projects in my portfolio?</summary>
                                <p className={"text-grayish-purple text-sm pt-6 lg:text-base"}>
                                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                                    way to showcase your skills to potential employers!
                                </p>

                            </details>
                        </div>

                        <div className={"py-5 lg:py-6"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 leading-[1.2rem] text-[16px] font-semibold text-dark-purple hover:text-hover-purple lg:text-[18px] lg:leading-[1.75rem]"}>How can I get help if I'm stuck on a challenge?</summary>
                                <p className={"text-grayish-purple text-sm pt-6 lg:text-base"}>
                                    The best place to get help is inside Frontend Mentor's Discord community. There's a help
                                    channel where you can ask questions and seek support from other community members.
                                </p>

                            </details>
                        </div>

                    </main>

                </div>
            </div>

        </div>
    </>
  )
}

export default App
