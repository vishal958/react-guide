import react from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../HigherOrderComponent/Auxilary'

const withErrorhandler = (WrappedComponent,axios) =>{
    return (props) =>{
        return(
            <Aux >
                <Modal >Something didn't work</Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}
export default withErrorhandler