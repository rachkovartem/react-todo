import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



class NewFilmDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };
  
  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleAdd = () => {
    const title = this.state.title;
    const subtitle = this.state.subtitle;
    this.props.onAdd({title, subtitle});
    this.setState({
      open: false
    })
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    return (
      <div>
          <Fab onClick={this.handleClickOpen} size="medium" color="primary" aria-label="add">
              <AddIcon />
          </Fab>
          <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Запланировать фильм</DialogTitle>
              <DialogContent>
              <DialogContentText>
                  Какой фильм нужно будет посмотреть?
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Название"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={this.onValueChange}
              />
              <TextField
                  margin="dense"
                  id="subtitle"
                  label="Описание"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={this.onValueChange}
              />
              </DialogContent>
              <DialogActions>
              <Button onClick={this.handleClose}>Отменить</Button>
              <Button onClick={this.handleAdd}>Добавить</Button>
              </DialogActions>
          </Dialog>
      </div>
    );
  }
  
  
  
}

export default NewFilmDialog