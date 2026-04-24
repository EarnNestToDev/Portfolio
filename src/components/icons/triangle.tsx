function SvgComponent(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-triangle"
            {...props}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 1.67a2.914 2.914 0 00-2.492 1.403L1.398 16.61a2.914 2.914 0 002.484 4.385h16.225a2.914 2.914 0 002.503-4.371L14.494 3.078A2.917 2.917 0 0012 1.67z" />
        </svg>
    )
}

export default SvgComponent;