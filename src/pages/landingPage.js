import {react} from 'react';
import veritas_logo from '../images/veritas_logo.svg';


function title() {
    return (
        <div className='times-new-roman'>
            <h1>The Vertias Forum at Johns Hopkins</h1>
        </div>
    );
}

export default function LandingPage() {

    return (
        <div className='vertias-main'>
            <img src={veritas_logo} alt='Veritas Logo' style={{width: '200px', height: '200px'}}></img>
            {title()}
        </div>
    );
}
