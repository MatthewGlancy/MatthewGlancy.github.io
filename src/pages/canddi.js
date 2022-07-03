import * as React from "react"

const styles = {
    body: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#333333',
        fontFamily: 'sans-serif',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        text: '#dedede',
    },
    card: {
        backgroundColor: '#666666',
        borderRadius: '5px',
        padding: '10px 8px',
        margin: '15px',
        display: 'inline-block',
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 'bold',
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
        URL: 'ttps://github.com/canddi'
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

// markup
const CanddiPage = () => {
    const cards = links.map(link => {
        return (
            <a style={styles.card} href={link.URL}>
                <h2>{link.Name}</h2>
            </a>
        );
    });
    
    return (
        <main style={styles.body}>
            <div style={styles.container}>
                {cards}
            </div>
        </main>
    );
}

export default CanddiPage
