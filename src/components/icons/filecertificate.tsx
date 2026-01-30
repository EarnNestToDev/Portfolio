function SvgComponent(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-certificate"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M14 3v4a1 1 0 001 1h4" />
            <path d="M5 8V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2h-5" />
            <path d="M3 14a3 3 0 106 0 3 3 0 10-6 0" />
            <path d="M4.5 17L3 22l3-1.5L9 22l-1.5-5" />
        </svg>
    )
}

export default SvgComponent;