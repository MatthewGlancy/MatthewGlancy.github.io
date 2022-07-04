import React, {Component} from "react"

import "../styles/canddi.css"

const styles = {
    body: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#efefef',
        fontFamily: 'sans-serif',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        text: '#dedede',
    },
    container: {
        margin: '22% auto',
        textAlign: 'center',
    }
};

const links = [
    {
        Name: 'AWS',
        URL: 'https://aws.canddi.camp'
    },
    {
        Name: 'Dashboard',
        URL: 'https://canddihq.canddi.com'
    },
    {
        Name: 'GitHub',
        URL: 'https://github.com/canddi'
    },
    {
        Name: 'Papertrail',
        URL: 'https://papertrailapp.com/dashboard'
    },
    {
        Name: 'Timetastic',
        URL: 'https://app.timetastic.co.uk/wallchart'
    },
    {
        Name: 'Auth0',
        URL: 'https://auth0.com'
    },
    {
        Name: 'Jenkins',
        URL: 'https://jenkins.prod.canddi.camp/'
    }
];

const Card = (link) => {
    return (
        <a className="card" href={link.URL} key={link.URL} target="_blank" rel="noreferrer">
            <h2>{link.Name}</h2>
        </a>
    );
}

class CanddiPage extends Component {
    render() {
        const cards = links.map(link => new Card(link));
    
        return (
            <main style={styles.body}>
                <div style={styles.container}>
                    {cards}
                </div>
            </main>
        );
    }
}

export default CanddiPage
