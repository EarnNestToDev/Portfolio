const imgURL = {
    0: "test0",
    1: "test1"
};

const Profile = () => {
    return (
        <section
            className="bg-red-500OFF grid grid-cols-[1fr_3fr] grid-rows-[auto] w-full items-center justify-center gap-2 rounded-lg p-2">

            <article
                className="aspect-9/20 h-[300px] bg-red-500">
                img
            </article>

            <article
                className="bg-red-500 w-[300px] h-full">
                description__text
            </article>
        </section>
    );
};

function randomImg(Array: Number[]) {
    const random = Math.floor(Math.random() * Array.length);
    return Array[random];
}

export default Profile;