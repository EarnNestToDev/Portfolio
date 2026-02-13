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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-steam"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M16.5 5a4.5 4.5 0 11-.653 8.953L11.5 16.962V17a3 3 0 01-2.824 3H8.5a3 3 0 01-2.94-2.402L3 16.5V13l3.51 1.755a2.989 2.989 0 012.834-.635l2.727-3.818A4.5 4.5 0 0116.5 5" />
            <path d="M15.5 9.5a1 1 0 102 0 1 1 0 10-2 0" fill="currentColor" />
        </svg>
    )
}

export default SvgComponent;