import InfoIcon from '../../assets/imgs/patient/info_icon.svg'

export const Tooltip = ({ tooltipMessage }) => {

    return (
        <div className='tooltip-container'>
            <div className="tooltip" data-tooltip={ tooltipMessage }>
                <img src={ InfoIcon }/>
            </div>
        </div>
    )
}
