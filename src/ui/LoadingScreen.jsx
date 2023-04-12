import './components';

export const LoadingScreen = ({ isLoading }) => {

    // console.log('isLoading: ', isLoading)

    return (
    <div hidden={ !isLoading }>   
        <div className="loading">
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
            <div className="loading__dot"></div>
        </div>
    </div>
  )
}
