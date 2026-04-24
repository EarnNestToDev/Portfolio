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
            className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 12a1 1 0 102 0 1 1 0 10-2 0M11 12a1 1 0 102 0 1 1 0 10-2 0M18 12a1 1 0 102 0 1 1 0 10-2 0" />
        </svg>
    )
}

export default SvgComponent;