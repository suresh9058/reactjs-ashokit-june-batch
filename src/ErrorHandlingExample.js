import {ErrorBoundary} from 'react-error-boundary';

function Header() {
    const user=null;
    return <h1>Header Component {user.name}</h1>
}

function LeftNav() {
    return <h1>LeftNav Component</h1>
}

function MainSection() {
    return <h1>MainSection Component</h1>
}

function Footer() {
    return <h1>Footer Component</h1>
}

function ErrorFallBack({error}) {
    return (
        <p>OOPS! something went wrong!. Please try after sometime</p>
    )
}

function ErrorFallBackMain({error}) {
    return (
        <p>OOPS! something went wrong!. Please try after sometime</p>
    )
}

function ErrorHandlingExample() {
    return (
        <>
           <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <Header />
            </ErrorBoundary>
            <LeftNav />
           <ErrorBoundary FallbackComponent={ErrorFallBackMain}>
                <MainSection />
           </ErrorBoundary>
            <Footer />
        </>
    )
}

export default ErrorHandlingExample;