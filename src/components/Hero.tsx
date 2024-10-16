import heroBg from "../assets/images/bg.jpg";
export function Hero() {
    return (
        <div className="flex flex-col rounded-3xl overflow-hidden relative">
            <div className="w-full flex flex-col items-center justify-center font-bold absolute text-primary text-5xl top-[100px] p-10 z-10">
                <h1 className="mb-6 text-5xl text-left text-tertiary">
                    One Click Away from Your Next Adventure!
                </h1>
                <h6 className="text-xl text-left text-tertiary">Experience More – Find the Best Events Here!</h6>
            </div>
            <img
                src={heroBg}
                alt="Background"
                className="w-full h-[500px] object-cover z-0 brightness-50"
            />
        </div>
    );
}
