import Heading from "@/components/Heading";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import Markdown from "markdown-to-jsx";

export default function BackgroundBodyPage({content}) {
    return (
        <>  
            <Heading title='Professional career' backBtn={true} />

            <FadeUpAnimation>
                <Markdown>
                {content}
                </Markdown>
            </FadeUpAnimation>
        </>
    );
}