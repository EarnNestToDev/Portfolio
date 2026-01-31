const imgURL = {
    0: "test0",
    1: "test1"
};

const Profile = () => {
    return (
        <section
            className="bg-red-500 grid grid-cols[1fr, 3fr] grid-rows[auto] w-full items-center justify-center gap-2 rounded-lg p-2">

            <article>
                {/* img */}
            </article>

            <article>
                {/* description */}
            </article>
        </section>
    );
};

function randomImg(Array: Number[]) {
    const random = Math.floor(Math.random() * Array.length);
    return Array[random];
}

export default Profile;