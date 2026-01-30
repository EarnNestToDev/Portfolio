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
            className="icon icon-tabler icons-tabler-outline icon-tabler-headphones"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 15a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3M15 15a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3" />
            <path d="M4 15v-3a8 8 0 0116 0v3" />
        </svg>
    )
}

export default SvgComponent;