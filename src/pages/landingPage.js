import veritas_logo from '../images/veritas_logo.svg';

function title() {
    return (
        <div className='playfair'>
            <p style = {{fontSize: '40px'}}>The Vertias Forum at Johns Hopkins</p>
        </div>
    );
}

function mainPage(){
    return (
        <div className='vertias-main'>
            <img src={veritas_logo} alt='Veritas Logo' style={{width: '200px', height: '200px'}} className='logo'></img>
            <div className='title'>
                {title()}
            </div>
        </div>
    )
}

export default function LandingPage() {

    return (
        <div className='content'>
            {mainPage()}
        </div>
    );
}
