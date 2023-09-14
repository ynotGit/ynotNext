export default function Showcase() {
    return (
        <section className="py-12">
            <h2>Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-md">
                    <h3>Project 1</h3>
                    <p>Project description</p>
                </div>
                <div className="p-4 rounded-md">
                    <h3>Project 2</h3>
                    <p>Project description</p>
                </div>
                <div className="p-4 rounded-md">
                    <h3>Project 3</h3>
                    <p>Project description</p>
                </div>
            </div>
        </section>
    )
}