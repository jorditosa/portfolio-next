import { getMDMetadata } from "@/lib/readMd";
import SecretHeaderPage from "./ui/SecretHeader";
import SecretTechnologiesPage  from './ui/SecretTechnologies';
import SecretFooterPage from "./ui/SecretFooterPage";

export default function SecretPage() {
    const content = getMDMetadata('security-page')

    return (
        <div>
            <SecretHeaderPage content={content} />

            <SecretTechnologiesPage />

            <SecretFooterPage content={content} />
        </div>
    );
}