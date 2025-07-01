import styles from "./Content.module.css"

function Content({data}) {
    
  return (
    <>
    <div className={styles.head}>
        <p>{data.description}</p>
        <img src={data.image} alt={data.name} />
    </div>
    <div className={styles.descriptions}>
        <h4>{data.title1}</h4>
        <span>{data.desc1}</span>
        <h4>{data.title2}</h4>
        <span>{data.desc2}</span>
        <h4>{data.title3}</h4>
        <span>{data.desc3}</span>
        <h4>{data.title4}</h4>
        <span>{data.desc4}</span>
    </div>
    </>
  )
}

export default Content