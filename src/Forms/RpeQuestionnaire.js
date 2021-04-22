import {useContext} from 'react'
import { LanguageContext} from '../languages/LanguageContext'
import PropTypes from 'prop-types';
import {
    Radio,
    Button,
    RadioGroup,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    Tooltip,
    Grid} from '@material-ui/core'
const RpeQuestionnaire = (props) => {

    const context = useContext(LanguageContext)
    const {excercises,closeModalFn} = props

    const onClick = () => {

    }

    const handleChangeRadio = (e) => {

    }
    return(
        <div>          
        {
            excercises.map((value,index) => {
                return (
                    <Grid container spacing={1} justify='space-between' alignItems='center' key={index}>
                        <Grid item xs={12}>
                            <Typography component='h5' style={{fontWeight:'bold'}}>
                            { value.excercise.excerciseName} 
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel component="legend" > {context.dictionary.WhatWrong}</FormLabel>
                                <RadioGroup aria-label="Gender" name="Gender" row  onChange={(e) => handleChangeRadio(e)} >
                                    <FormControlLabel value="Weight" control={<Radio />} label={context.dictionary.ToHeavy} />
                                    <FormControlLabel value="Volume" control={<Radio />} label={context.dictionary.ToHeightVolume} />
                                    <Tooltip title={context.dictionary.Trouble} >
                                        <FormControlLabel value="Excercise"  control={<Radio/>} label={context.dictionary.PreviousExcercise} />
                                    </Tooltip>
                                </RadioGroup>
                            </FormControl>
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

RpeQuestionnaire.propTypes = {
    closeModalFn:PropTypes.func.isRequired,
    excercises:PropTypes.array.isRequired
}
RpeQuestionnaire.defaultProps = {
    excercises:[]  
  }
export default RpeQuestionnaire