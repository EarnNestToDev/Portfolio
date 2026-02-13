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
            className="icon icon-tabler icons-tabler-outline icon-tabler-devices-pc"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 5h6v14H3V5M12 9h10v7H12V9M14 19h6M17 16v3M6 13v.01M6 16v.01" />
        </svg>
    )
}

export default SvgComponent;