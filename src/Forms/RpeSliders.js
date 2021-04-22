import PropTypes from 'prop-types';
import {useContext} from 'react'
import { LanguageContext} from '../languages/LanguageContext'
import {
    Grid,
    Typography,
    Button
} from '@material-ui/core'

import {withStyles} from '@material-ui/core/styles'
import {CustomSlider} from '../Components/StyledComponents'

const Slider = withStyles({
    rail: {
        color: 'firebrick'
    },
    markLabel: {
        color: 'black'
    },
})(CustomSlider)

const RpeSliders = (props) => {
    //Funkcyjny
    const context = useContext(LanguageContext)
    const {onSave,closeModalFn} = props 
    let {excercises} = props

    if (Array.isArray(excercises) === false) {
        excercises = []
    }
    const generateSliderValue = () => {
        let sliderValue = []
        for (let i = 1; i <= 10; i += 0.5) {
            sliderValue.push({
                value: i,
                label: `${i%1===0?i:''}`
            })
        }
        return sliderValue
    }

    const onClick = () => {
        onSave()
    }
    const sliderValue = generateSliderValue()

    return(
        <div>
        {
            excercises.map((value,index) => {
                return (
                    <Grid container spacing={1} justify='space-between' alignItems='center' key={index}>
                        <Grid item xs={2}>
                            <Typography component='h5'>
                            { value.excercise.excerciseName} 
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography component='h5'>
                                { value.weight} kg
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography component='h5'>
                                { value.sets}x{value.reps}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Slider
                                min={1}
                                max={10}
                                aria-labelledby="discrete-slider-restrict"
                                defaultValue={5}
                                step={null}
                                marks={sliderValue}
                            />

                        </Grid>
                    </Grid>
                )
            
        })}        
        <Grid container spacing={1} justify='center' alignItems='center'>
            <Grid item xs={8}>
                <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        style={{margin: '10px 0px 2px 0px',backgroundColor: 'firebrick',}}
                        onClick={onClick}
                    >
                       {context.dictionary.Save}
                </Button>
            </Grid>
        </Grid>    
                    
        </div>
    )

}

RpeSliders.propTypes = {
    closeModalFn:PropTypes.func.isRequired,
    excercises:PropTypes.array.isRequired,
    onSave:PropTypes.func.isRequired
}
RpeSliders.defaultProps = {
  excercises:[]  
}

export default RpeSliders;