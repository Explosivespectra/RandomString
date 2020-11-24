import React, {useState} from "react";
import {TextField, Checkbox, Button, FormControlLabel, Paper, Grid, Container} from "@material-ui/core"


const RandomString = () => {

    const [removeString, setRemoval] = useState(false);
    const [currentSelected, setSelected] = useState("");
    const [currentInput, setInput] = useState("");

    const chooseString = () => {     
        if (currentInput.replace(/\n/gi,"").replace(/ /gi,"") !== "" ) {
            var stringsToChoose = (currentInput.replace(/\n/gi," ").trim().split(/[ ]+/));
            var chosenString = stringsToChoose[Math.floor(Math.random() * stringsToChoose.length)];
            var ind = stringsToChoose.indexOf(chosenString);
            stringsToChoose.splice(ind, 1);
            setSelected((currentSelected.concat(" ")).concat(chosenString));
            var newString = stringsToChoose.join(" ");
            if (removeString) {
                setInput(newString);
            }
        }
    }

    const clear = () => {
        setInput("");
        setSelected("");
    }

    return (
        <div>
            <Container maxWidth={'xs'}>
                <Grid>
                    <Grid item xs={12}>
                        <div>Input: </div>
                        <TextField
                            value={currentInput}
                            onChange={(event) => {setInput(event.target.value)}}
                            multiline="true"
                            rowsMax={5}/>
                    </Grid>
                    <Grid item xs={12}>
                        <div>Output:</div>
                        <div>{currentSelected}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                onChange={(event) => {setRemoval(event.target.checked)}}/>
                        }
                        label="Remove string from input box when selected"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={chooseString} variant="outlined">Choose String From Input</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={clear} variant="outlined">Clear Input and Output</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

};

export default RandomString;