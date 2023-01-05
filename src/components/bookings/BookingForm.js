import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import MuiTextField from "@mui/material/TextField";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import { Autocomplete, CheckboxWithLabel, TextField } from "formik-mui";
import React, { useState } from 'react';
import { db } from './firebaseConfig';

function BookingForm({selectedDate,selectedTime,setFormVisible,bookingAddedForTheUser}) {
    const [isNewUser, setIsNewUser] = useState(false);
    const [parentNeeded, setIsParentNeeded] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [yearOfBirth, setYearOfBirth] = useState("2000");

    const bokingsCollection = collection(db,"bookings");

    const yearList = [];
    for (let i = 0; i < 100; i++) {
        yearList.push((1922+i)+"");
    }

    const ageUpdated = (e) => {
        const selectedYear = parseInt(e.target.innerHTML);
        setYearOfBirth(selectedYear+"");
        const currentYear = new Date().getFullYear();
        
        setIsParentNeeded(currentYear - selectedYear < 18);
    }

    const saveBookingToFirebaseExisging = async (values,resetForm) =>{
        values.date = selectedDate;
        values.time = selectedTime;
        values.createdat = Timestamp.now();

        await addDoc(bokingsCollection,values).then((res)=>{
            bookingAddedForTheUser(selectedDate,selectedTime.dbTime);
        });

        setFormVisible(false);

        resetForm();
    }
    
  return (
    <div style={{width:"600px"}}>
        {
            !isNewUser && <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    Please enter booking details
                </Typography>
                
                <Box marginBottom={3} />

                <Formik
                    enableReinitialize
                    initialValues={{ name:"",email:"" }}
                    onSubmit={(values,{ resetForm }) => {
                        saveBookingToFirebaseExisging(values,resetForm);
                    }}
                    validateOnMount
                >   
                    <Form>
                        <Field
                            component={TextField}
                            type="text"
                            label="Date"
                            name="date"
                            value={selectedDate}
                            fullWidth
                            disabled
                        />
                        <Box marginBottom={3} />
                        <Field
                            component={TextField}
                            type="text"
                            label="Date"
                            name="time"
                            value={selectedTime?selectedTime.text : ""}
                            fullWidth
                            disabled
                        />
                        <Box marginBottom={3} />
                        <Field
                            component={TextField}
                            type="text"
                            label="Name"
                            name="name"
                            fullWidth
                            required
                        />

                        <Box marginBottom={3} />
                        
                        <Field
                            component={TextField}
                            type="email"
                            label="Email"
                            name="email"
                            fullWidth
                            required
                        />
                        <Box marginBottom={2} />
                        
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>

                        <Button
                            type="button"
                            sx={{marginLeft:"10px"}}
                            variant="contained"
                            color="secondary"
                            onClick={()=>{
                                setFormVisible(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </Form>
                </Formik>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    setIsNewUser(true);
                }}>New User?</Button> 
            </CardActions>
            <Box marginBottom={2} />
        </Card>
        }

        {
            isNewUser && <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    Please enter booking details
                </Typography>
                
                <Box marginBottom={3} />

                <Formik
                    enableReinitialize
                    initialValues={{ name:"",email:"",parentName:"",parentEmail:"",phone:"" }}
                    onSubmit={(values,{ resetForm }) => {
                        saveBookingToFirebaseExisging(values,resetForm);
                    }}
                    validateOnMount
                >   
                    <Form>
                        <Field
                            component={TextField}
                            type="text"
                            label="Date"
                            name="date"
                            value={selectedDate}
                            fullWidth
                            disabled
                        />
                        <Box marginBottom={2} />
                        <Field
                            component={TextField}
                            type="text"
                            label="Date"
                            name="time"
                            value={selectedTime?selectedTime.text : ""}
                            fullWidth
                            disabled
                        />
                        <Box marginBottom={2} />
                        <Field
                            component={TextField}
                            type="text"
                            label="Name"
                            name="name"
                            fullWidth
                            required
                        />

                        <Box marginBottom={2} />
                        
                        <Field
                            name="yearOfBirth"
                            component={Autocomplete}
                            options={yearList}
                            style={{ width: "100%" }}
                            required
                            onChange={(e)=>{
                                ageUpdated(e);
                            }}
                            value={yearOfBirth}
                            renderInput={(params) => (
                            <MuiTextField
                                {...params}
                                name="yearOfBirth"
                                label="Year of Birth"
                                variant="outlined"
                                required
                            />
                            )}
                        />
                        
                        <div className="parentDetails" style={parentNeeded?{display:"block"}:{display:"none"}}>
                            <div>Parent/Guardian Details</div>
                            <Box marginBottom={2} />
                            <Field
                                component={TextField}
                                type="text"
                                label="Parent/Guardian Name"
                                name="parentName"
                                fullWidth
                                required={parentNeeded}
                            />
                            <Box marginBottom={2} />
                        
                            <Field
                                component={TextField}
                                type="email"
                                label="Parent/Guardian Email"
                                name="parentEmail"
                                fullWidth
                                required={parentNeeded}
                            />
                            <Box marginBottom={1} />
                        </div>

                      <Box marginBottom={2} />
                        
                        <Field
                            component={TextField}
                            type="text"
                            label="Phone"
                            name="phone"
                            required
                            fullWidth
                        />
                        
                        <Box marginBottom={2} />
                        
                        <Field
                            component={TextField}
                            type="email"
                            label="Email"
                            name="email"
                            required
                            fullWidth
                        />
                        <Box marginBottom={2} />


                        <Field
                        component={CheckboxWithLabel}
                        type="checkbox"
                        checked={agreed}
                        onChange={(e)=>{
                            setAgreed(e.target.checked);
                        }}
                        Label={{ label: 'Agree to terms and conditions' }}
                      />
                      <Box marginBottom={2} />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!agreed}
                        >
                            Submit
                        </Button>

                        <Button
                            type="button"
                            sx={{marginLeft:"10px"}}
                            variant="contained"
                            color="secondary"
                            onClick={()=>{
                                setFormVisible(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </Form>
                </Formik>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    setIsNewUser(false);
                }}>Existing User?</Button> 
            </CardActions>
            <Box marginBottom={2} />
        </Card>
        }
    </div>
  )
}

export default BookingForm





// Form A:
// - Selected Date + Time (required)
// - Name (required)
// - Email (required)

// Form B:
// - Selected Date + Time (Required)
// - Name (required)
// - Year of Birth (required)
// - Parent/Guardian (required if user is under 18 years)
// - Phone (required)
// - Email (required)
// - Agree to terms and conditions checkbox (required)