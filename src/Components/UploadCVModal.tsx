
// @ts-ignore
export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h3>Upload your CV</h3>
                <button type="button" className="apply_btn" style={{margin:"auto"}} onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};