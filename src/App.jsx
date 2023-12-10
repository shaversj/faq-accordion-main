import iconStar from '/src/assets/images/icon-star.svg'
function App() {


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"bg-green-400 max-w-screen-sm w-full h-[812px] mx-auto font-Work-Sans flex items-center"}>
                <div className={"bg-white mx-6 my-10 px-6 rounded-lg"}>
                    <header className={"flex items-center space-x-6 pt-4"}>
                        <img src={iconStar} className={"w-[24px] h-[24px]"} alt={""} />
                        <h1 className={"text-[32px] font-bold"}>FAQs</h1>
                    </header>
                    <main className={"divide-y-[0.5px] "}>
                        <div className={"py-5"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top"}>
                                <summary className={"list-none pr-14 leading-[1.2rem] text-[16px] font-semibold text-dark-purple"}>What is Frontend Mentor, and how will it help me?</summary>
                                <p className={"text-grayish-purple text-sm pt-6"}>
                                    Frontend Mentor offers realistic coding challenges to help developers improve their
                                    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                                    all levels and ideal for portfolio building.
                                </p>

                            </details>
                        </div>

                        <div className={"py-5"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 text-[16px] font-semibold text-dark-purple"}>Is Frontend Mentor free?</summary>
                                <p className={"text-grayish-purple text-sm pt-6"}>
                                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free
                                    option providing access to a range of projects suitable for all skill levels.
                                </p>

                            </details>
                        </div>

                        <div className={"py-5"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 leading-[1.2rem] text-[16px] font-semibold text-dark-purple"}>Can I use Frontend Mentor projects in my portfolio?</summary>
                                <p className={"text-grayish-purple text-sm pt-6"}>
                                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                                    way to showcase your skills to potential employers!
                                </p>

                            </details>
                        </div>

                        <div className={"py-5"}>
                            <details className={"bg-icon-p bg-no-repeat bg-right open:bg-icon-m open:bg-right-top "}>
                                <summary className={"list-none pr-14 leading-[1.2rem] text-[16px] font-semibold text-dark-purple"}>How can I get help if I'm stuck on a challenge?</summary>
                                <p className={"text-grayish-purple text-sm pt-6"}>
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
