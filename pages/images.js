export async function getServerSideProps() {
  // Fetch data from the server
  const response = await fetch('localhost:4000/show');
  console.log(response)

  // Get the json response
  const data = await response.json();
  return {
      props: { data },
  }

  
}

function showimages({data}) {
    // Get the image data
    const base64Image = data.all[0]['image'].data;
    console.log(base64Image)
    // Configure the image tag attribute (src)
    const imgSrc = "data:image/png;base64," + base64Image;

    return (
      <div>
        <img src={imgSrc}></img>
      </div>
    )
  }

  export default showimages