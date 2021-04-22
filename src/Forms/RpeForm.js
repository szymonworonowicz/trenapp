import PropTypes from 'prop-types';
import {useState} from 'react'
import RpeSlider from './RpeSliders'
import RpeQuestionnaire from './RpeQuestionnaire'


const RpeForm = (props) =>   {
//Funkcyjny
    const [questionnaire,setQuestionnaire] = useState(false)

    const {excercises,closeModalFn} = props
    
    const onClickSave = () => {
        setQuestionnaire(true)
    }

    return (
        questionnaire === false 
            ? <RpeSlider  excercises = {excercises} closeModalFn = {closeModalFn} onSave={() => onClickSave()}/>
            : <RpeQuestionnaire excercises = {excercises} closeModalFn = {closeModalFn}/>
    )

}
RpeForm.propTypes = {
    closeModalFn:PropTypes.func.isRequired,
    excercises:PropTypes.array.isRequired
}
RpeForm.defaultProps = {
  excercises:[]  
}

export default RpeForm;