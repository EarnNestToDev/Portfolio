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
            className="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0M9 12h6" />
        </svg>
    )
}

export default SvgComponent;