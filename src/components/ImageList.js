import React from 'react';


const ImageList = props => {

  const images = props.images.map(({id,description,urls}) => {
    return (
      <div key={id} >
        <img alt={description} src={urls.regular} ></img>
      </div>
    )
  })

  return <div>{images}</div>

}


export default ImageList;