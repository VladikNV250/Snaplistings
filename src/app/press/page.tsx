import Form from "../../components/form";
import PressCards from "../../components/presscards";

export default function Press() {
    return (
        <main className="w-full min-h-screen">
            <section className="w-full flex flex-col items-center bg-white pt-32 pb-24 space-y-20">
                <h2 className="relative text-5.5xl text-center font-bold mt-5 bg-gradient-to-b from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text"> 
                    Our Latest Press Coverage
                </h2>
                <PressCards />
            </section>
            <Form />
        </main>
    )
}