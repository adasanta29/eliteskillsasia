import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import MuiTextField from "@mui/material/TextField";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import { Autocomplete, CheckboxWithLabel, TextField } from "formik-mui";
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import Esahk__tc from '../../assets/esahk__tc.pdf'

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

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

    const { t } = useTranslation();
    
  return (
    <div className="bookingForm__container">
        {
            !isNewUser && <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {t("please_enter_details_title")}
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
                            label="Time"
                            name="time"
                            value={selectedTime?selectedTime.text : ""}
                            fullWidth
                            disabled
                        />
                        <Box marginBottom={3} />
                        <Field
                            component={TextField}
                            type="text"
                            label={t("name_label")}
                            name="name"
                            fullWidth
                            required
                        />

                        <Box marginBottom={3} />
                        
                        <Field
                            component={TextField}
                            type="email"
                            label={t("email_label")}
                            name="email"
                            fullWidth
                            required
                        />
                        <Box marginBottom={3} />

                        <Typography variant="p">{t("select_class")}</Typography>

                        <Box marginBottom={1}/>

                        <Field
                            name="class"
                            type="class"
                            label="Class"
                            as="select"
                            fullWidth
                            required
                        >
                            <option value="private">{t("class_private")}</option>
                            <option value="semi-private">{t("class_semiprivate")}</option>
                            <option value="centre-booking">{t("class_centre_booking")}</option>
                            <option value="birthday">{t("class_birthday")}</option>
                        </Field>

                        <Box marginBottom={3} />
                        
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            {t("submit_button")}
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
                            {t("cancel_button")}
                        </Button>
                    </Form>
                </Formik>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    setIsNewUser(true);
                }}>{t("new_user_button")}</Button> 
            </CardActions>
            <Box marginBottom={2} />
        </Card>
        }

        {
            isNewUser && <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {t("please_enter_details_title")}
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
                            label={t("name_label")}
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
                                label={t("year_of_birth")}
                                variant="outlined"
                                required
                            />
                            )}
                        />
                        
                        <div className="parentDetails" style={parentNeeded?{display:"block"}:{display:"none"}}>
                            <div>{t("parent_details_title")}</div>
                            <Box marginBottom={2} />
                            <Field
                                component={TextField}
                                type="text"
                                label={t("parent_name_label")}
                                name="parentName"
                                fullWidth
                                required={parentNeeded}
                            />
                            <Box marginBottom={2} />
                        
                            <Field
                                component={TextField}
                                type="email"
                                label={t("parent_email_label")}
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
                            label={t("phone_label")}
                            name="phone"
                            required
                            fullWidth
                        />
                        
                        <Box marginBottom={2} />
                        
                        <Field
                            component={TextField}
                            type="email"
                            label={t("email_label")}
                            name="email"
                            required
                            fullWidth
                        />

                        <Box marginBottom={3} />

                        <Typography variant="p">{t("select_class")}</Typography>

                        <Box marginBottom={1}/>

                        <Field
                            name="class"
                            type="class"
                            label="Class"
                            as="select"
                            fullWidth
                            required
                        >
                            <option value="private">{t("class_private")}</option>
                            <option value="semi-private">{t("class_semiprivate")}</option>
                            <option value="centre-booking">{t("class_centre_booking")}</option>
                            <option value="birthday">{t("class_birthday")}</option>
                        </Field>

                        <Box marginBottom={3} />

                            <a href={Esahk__tc} target='_blank' className="terms__link">{t("see_terms")}</a>

                            <Box marginBottom={0}/>

                            <Field
                                component={CheckboxWithLabel}
                                type="checkbox"
                                checked={agreed}
                                onChange={(e)=>{
                                    setAgreed(e.target.checked);
                                }}
                                Label={{ label: 'I agree with the Terms and Conditions above'}}
                            />

                      <Box marginBottom={2} />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!agreed}
                        >
                            {t("submit_button")}
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
                            {t("cancel_button")}
                        </Button>
                    </Form>
                </Formik>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    setIsNewUser(false);
                }}>{t("existing_user_button")}</Button> 
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