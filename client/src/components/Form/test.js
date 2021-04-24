import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
  
  export default function SpringModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          react-spring
        </button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
            return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.titer}"` : 'Ajouter un activiter'}</Typography>
        <br />
            <input id="titre" placeholder="saisir un titre" type="text" fullWidth value={postData.titre} onChange={(e) => setPostData({ ...postData, titre: e.target.value.split(',') })} />
            <br />
            <input
              id="phone"
              placeholder="Entrer votre Tel"
              type="numbers"
              fullWidth value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value.split(',') })}/>

<input
              id="email"
              placeholder="Entrer votre email"
              type="text"
              fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value.split(',') })}/>

<FormControl>
              <InputLabel htmlFor="Gouvernorat">Gouvernorat</InputLabel>
              <Select
                fullWidth value={postData.Gouvernorat} onChange={(e) => setPostData({ ...postData, Gouvernorat: e.target.value.split(',') })}

                inputProps={{
                  name: "Gouvernorat",
                  id: "Gouvernorat"
                  
                }}
              >
                <MenuItem value="Ariana">Ariana</MenuItem>
                <MenuItem value="Béja">Béja</MenuItem>
                <MenuItem value="Ben Arous">Ben Arous</MenuItem>
                <MenuItem value="Bizerte">Bizerte</MenuItem>
                <MenuItem value="Gabès">Gabès</MenuItem>
                <MenuItem value="Gafsa">Gafsa</MenuItem>
                <MenuItem value="Jendouba">Jendouba</MenuItem>
                <MenuItem value="Kairouan">Kairouan</MenuItem>
                <MenuItem value="Kasserine">Kasserine</MenuItem>
                <MenuItem value="Kébili">Kébili</MenuItem>
                <MenuItem value="Le Kef">Le Kef</MenuItem>
                <MenuItem value="Mahdia">Mahdia</MenuItem>
                <MenuItem value="Manouba">Manouba</MenuItem>
                <MenuItem value="Médenine">Médenine</MenuItem>
                <MenuItem value="Monastir">Monastir</MenuItem>
                <MenuItem value="Nabeul">Nabeul</MenuItem>
                <MenuItem value="Sfax">Sfax</MenuItem>
                <MenuItem value="Sidi Bouzid">Sidi Bouzid</MenuItem>
                <MenuItem value="Siliana">Siliana</MenuItem>
                <MenuItem value="Sousse">Sousse</MenuItem>
                <MenuItem value="Tataouine">Tataouine</MenuItem>
                <MenuItem value="Tozeur">Tozeur</MenuItem>
                <MenuItem value="Tunis">Tunis</MenuItem>

                <MenuItem value="Zaghouan">Zaghouan</MenuItem>


              </Select>
            </FormControl>

            <input id="vile" placeholder="saisir un ville" type="text"                 fullWidth value={postData.vile} onChange={(e) => setPostData({ ...postData, vile: e.target.value.split(',') })}/>
            <br />
            <input id="intervaleage" placeholder="saisir un intervale d'age exp:[18-30]" type="text" fullWidth value={postData.intervaleage} onChange={(e) => setPostData({ ...postData, intervaleage: e.target.value.split(',') })}/>
            <br />
            <label>sélect un catégorie que votre activite qui appartient</label>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Aider les autres"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Music"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Culture"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Sport"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Camping"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="randonnée"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Informatique"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Politique"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Auter"
            />
            <input id="description" placeholder="Description" type="text" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value.split(',') })} />
            <br />


{/*<select name="associatif" id="associatif" fullWidth value={postData.associatif} onChange={(e) => setPostData({ ...postData, associatif: e.target.value.split(',') })}>
    <option value="">--Association ?--</option>
    <option value="oui">oui</option>
    <option value="non">non</option>
 
</select> */ }
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );

            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  