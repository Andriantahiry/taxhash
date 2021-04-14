import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './contact.css'
import { Button, TextareaAutosize, Typography } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import validator from 'validator';
import { motion } from 'framer-motion'


function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',

        }

    },
}));

export default function Contact() {
    const classes = useStyles();
    const [message, setmessage] = useState({})
    const [pseudo, setpseudo] = useState('')
    const [email, setemail] = useState('')
    const [contenu, setcontenu] = useState('')

    const [open, setOpen] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [pseudoError, setPseudoError] = useState('');
    const [contenuError, setContenuError] = useState('')
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setcontenu('');
        setpseudo('');
        setemail('');
    };




    const handleChange = (e) => {


        if (e.target.name === 'pseudo') {
            setpseudo(e.target.value);
            setmessage({
                ...message,
                pseudo: e.target.value
            })
        } if (e.target.name === 'email') {
            setemail(e.target.value);
            setmessage({
                ...message,
                pseudo: e.target.value,
                email
            })




        } if (e.target.name === 'contenu') {
            setcontenu(e.target.value);
            setmessage({
                ...message,
                pseudo,
                email,
                contenu: e.target.value
            })

        }


    }

    const handleSubmit = () => {

        if (pseudo.trim() === '') {
            setPseudoError('vous devez fournir votre pseudo');
        } else {
            setPseudoError('')
            if (pseudo.trim().length > 15) {
                setPseudoError('votre pseudo est trop long, veuillez ne pas depasser 15 caractères');
            } else {
                if (validator.isEmail(email)) {
                    setEmailError('');
                    if (contenu.trim() !== '') {
                        setContenuError('');
                        axios.post('https://strapi-portfolio01.herokuapp.com/messages', message)
                            .then(response => {
                                return true
                            });
                        handleClickOpen()

                    } else {
                        setContenuError('Vous devez ajouter du contenu à votre message')
                    }
                } else {
                    setEmailError('Veuillez indiquer une adresse email valide')
                }

            }
        }

    }

    return (

        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, duration: 1 }}

            id='contact' >
            <h1 style={{ textAlign: 'center', fontFamily: 'CALISTO' }}>Me contacter</h1>
            <Grid className='contact' container>

                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={10} sm={6}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField color='secondary' onChange={handleChange} required name='pseudo' value={pseudo} label="Votre Pseudo" />
                        <p style={{ color: 'red', fontSize: '12px' }}>{pseudoError !== '' && pseudoError}</p>

                    </form>
                </Grid >
                <Grid item xs={1} sm={3}></Grid>

                <Grid tem xs={1} sm={3}></Grid>
                <Grid item xs={10} sm={6} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField color='secondary' onChange={handleChange} required name='email' value={email} label="Votre email" />
                        <p style={{ color: 'red', fontSize: '12px' }}>{emailError !== '' && emailError}</p>

                    </form>
                </Grid >
                <Grid item xs={1} sm={3}></Grid>

                <Grid item xs={1} sm={3} i></Grid>
                <Grid item xs={10} sm={6} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextareaAutosize className='content' style={{ padding: '25px', outline: 'none' }} onChange={handleChange} rowsMin={10} aria-label="empty textarea" value={contenu} placeholder="Votre Message" name='contenu' />
                        <p style={{ color: 'red', fontSize: '12px' }}>{contenuError !== '' && contenuError}</p>
                    </form>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        className="first-button"

                        onClick={handleSubmit} >
                        Envoyer
                </motion.button>
                </Grid >
                <Grid item xs={1} sm={3}></Grid>


            </Grid>



            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <Typography style={{ fontSize: '25px' }} color='secondary'>Design & Code</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'rgb(242, 95, 120)', fontSize: '12px' }}>
                        Votre message a bien été envoyé! Merci pour votre soutien
                    </DialogContentText>
                    <DialogContentText style={{ fontSize: '12px' }}>
                        <strong>votre pseudo</strong> : {pseudo}
                    </DialogContentText>
                    <DialogContentText style={{ fontSize: '12px' }}>
                        <strong>votre message</strong> : {contenu}
                    </DialogContentText>

                </DialogContent>
                <DialogActions>

                    <button className="first-button" onClick={handleClose} >
                        Fermer
          </button>
                </DialogActions>
            </Dialog>


        </motion.div >
    );
}
