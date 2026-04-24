"use client";


import SVGPanelCorn1 from "@/components/icons/mhwi/panel_corn_1"
import SVGPanelCorn3 from "@/components/icons/mhwi/panel_corn_3"


function Layout1(props: React.PropsWithChildren) {
    return (
        <article
            className={`
                relative
                md:grid 
                md:grid-cols-1 
                md:grid-rows-[auto_auto]
                max-w-[90vw]
                md:w-fit
                border-6
                border-double
                border-zinc-400
                gap-2
                bg-transparent
                dark:bg-zinc-950
            `}
        >

            <header
                className={`
                    absolute
                    top-0
                    z-50
                    w-full
                    h-[10%]
                    max-h-10
                    flex
                    flex-row
                    items-start
                    justify-between
                `}
            >
                <SVGPanelCorn1
                    className={`
                        fill-zinc-400
                        h-full
                        w-auto
                        aspect-100/41
                    `}
                />
                <SVGPanelCorn1
                    className={`
                        fill-zinc-400
                        scale-x-[-1]
                        h-full
                        w-auto
                        aspect-100/41
                    `}
                />
            </header>

            <footer
                className={`
                    absolute
                    bottom-0
                    z-50
                    w-full
                    h-[5%]
                    max-h-5
                    flex
                    flex-row
                    items-center
                    justify-between
                `}
            >
                <SVGPanelCorn3
                    className={`
                        fill-zinc-400
                        aspect-square
                        h-full
                        w-auto
                    `}
                />

                <SVGPanelCorn3
                    className={`
                        fill-zinc-400
                        scale-x-[-1]
                        aspect-square
                        h-full
                        w-auto
                    `}
                />
            </footer>

            {props.children}

        </article>
    );
};


export default Layout1;