
export const TooltipButton = ({ children, tooltipMessage }) => {

    return (
        <div className='tooltip-button-container'>
            <div className="tooltip-button" data-tooltip={ tooltipMessage }>
                {children}
            </div>
        </div>
    )
}