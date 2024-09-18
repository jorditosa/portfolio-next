import { getMDMetadata } from "@/lib/readMd";
import SecretHeaderPage from "./ui/SecretHeader";
import SecretTechnologiesPage  from './ui/SecretTechnologies';

export default function SecretPage() {
    const content = getMDMetadata('security-page')

    return (
        <div>
            <SecretHeaderPage content={content} />

            <SecretTechnologiesPage />
        </div>
    );
}