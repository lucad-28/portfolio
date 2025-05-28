export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
    skills: string[];
    credentialId?: string;
    validUntil?: string;
    certificateUrl: string;
}