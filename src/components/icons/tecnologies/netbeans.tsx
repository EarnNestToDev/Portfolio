function SvgComponent(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            width={24}
            viewBox="0 0 444 512"
            {...props}
        >
            <g fill="none">
                <path d="M222 0v99L86 178 0 128 222 0z" fill="#A1C535" />
                <path d="M444 128l-86 50-136-79V0l222 128z" fill="#ADD439" />
                <path d="M444 384l-86-50V178l86-50v256z" fill="#1B6AC6" />
                <path d="M222 512v-99l136-79 86 50-222 128z" fill="#2E90E8" />
                <path d="M0 384l86-50 136 79v99L0 384z" fill="#EA205E" />
                <path d="M0 128l86 50v156L0 384V128z" fill="#A5073E" />
                <path d="M86 178l136-79 136 79-136 78-136-78z" fill="#F1F6E2" />
                <path d="M222 256l136-78v156l-136 79V256z" fill="#CEDBE6" />
                <path d="M86 178l136 78v157L86 334V178z" fill="#FFF" />
            </g>
        </svg>
    )
}

export default SvgComponent;