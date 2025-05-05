function HeroCard({ name, universe, alterego, occupation, friends, superpowers, url }) {
    return (
      <div className="hero-card">
        <h2>{name}</h2>
        <p><strong>Вселенная: </strong>{universe}</p>
        <p><strong>Альтер эго: </strong>{alterego}</p>
        <p><strong>Род деятельности: </strong>{occupation}</p>
        <p><strong>Друзья: </strong>{friends}</p>
        <p><strong>Суперсилы: </strong>{superpowers}</p>
        <img src={url} alt={name} />
      </div>
    );
  }
  
  export default HeroCard;