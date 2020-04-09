import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../../actions/images';
import { storage } from '../../firebase';

class ImageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img_url: "",
      property_id: "",
      image: null
    };
  }

  fileSelectedHandler = event => {
    this.setState({
      image: event.target.files[0]
    })
  }

  fileUploadHandler = event =>  {
    event.preventDefault();
    const image = this.state.image
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress function
      },
      (error) => {
        // error function
        console.log(error)
      },
      (complete) => {
        // complete function
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          this.setState({
            img_url: url
          })
        })
      });
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>
              Property Picture:
              <input name="image" type="file" accept="image/*" onChange={this.fileSelectedHandler} />
              <button onClick={this.fileUploadHandler}>Upload</button>
            </label>
          </p>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addImage: image => dispatch(addImage(image))
  };
};

export default connect(null, mapDispatchToProps)(ImageInput);
