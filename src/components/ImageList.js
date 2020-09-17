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



/* import React from 'react';

const PicsList=({images})=>{

const fotos=images.map(images=>{
  return (
    <div>
      <img src={images.urls.small} />
    </div>
  )

})
return <div>{fotos}</div>


}

export default PicsList; */