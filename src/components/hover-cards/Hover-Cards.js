import '../../assets/css/Hover-Cards.css';

const Cards = (props) => {
    const {
        ruteImg,
        altImg,
        titleImg,
        descImg
    } = props;
    return (
        <div className="container-hover-img">
            <figure>
                <img src={ruteImg} alt={altImg} />
                <div className="layer">
                    <h3>{titleImg}</h3>
                    <p>{descImg}</p>
                </div>
            </figure>
        </div>);
}

export default Cards;