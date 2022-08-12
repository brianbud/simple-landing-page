const SERVICE_BLOCK_DATA = [
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
    title: 'Web Design',
  },
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
    title: 'ecommerce',
  },
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
    title: 'automation',
  },
];

function ServicesSection() {
  return (
    <div class='services-section'>
      <h2>Our Services</h2>
      <div className='services-container'>
        {SERVICE_BLOCK_DATA.map((block) => {
          return (
            <div className='service-block'>
              <img src={block.imgURL}></img>
              <p>{block.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesSection;
