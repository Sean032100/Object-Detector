// import styles from ".../styles/Home.module.css";
// import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch ('http://localhost:5000/shows');
  const data = await res.json();

  return {
    props: { image_blob : data }
  }
}

const getdata = ({ image_blob }) => {
  return (
    <div>
      {image_blob.map( datas => (
        <ul>
          <h2>{ datas.datetime }</h2>
          <img src={ `data:image/png;base64, ${datas.image}`} alt="" width="200" height="200"></img>
        </ul>
      ))}
    </div>
  )
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
}

export default getdata;