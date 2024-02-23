import DangerIcon from '../../assets/imgs/patient/alert_icon.svg'

export const DangerTooltip = ({ tooltipMessage }) => {

    return (
        <div className='tooltip-container'>
            <div className="tooltip" data-tooltip={ tooltipMessage }>
                <img src={ DangerIcon }/>
            </div>
        </div>
    )
}
