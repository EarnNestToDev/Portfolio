
export default function SocialLinks(
    {
        title,
        href,
        icon,
        className
    }: {
        title: string,
        href: string,
        icon: React.ReactNode,
        className?: string
    }
) {

    return (
        <a
            title={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {icon}
        </a >

    );
}