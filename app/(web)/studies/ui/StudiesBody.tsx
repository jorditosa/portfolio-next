import Heading from "@/components/Heading";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import Markdown from "markdown-to-jsx";

export default function StudiesBodyPage({content}) {
    return (
        <>  
            <Heading title='Studies' backBtn={true} />

            <FadeUpAnimation>
                <Markdown>
                {content}
                </Markdown>
            </FadeUpAnimation>
        </>
    );
}