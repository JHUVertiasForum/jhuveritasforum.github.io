

const HomePage= () => {

    const redirectToPage = () => {
        window.location.href = './main.html';
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={redirectToPage}>Go to Main Page</button>
        </div>
    );
}
export default HomePage;