const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/profile.php?id=100084298338831", icon: "fa-facebook" },
    { id: 2, liveLink: "https://twitter.com/housepointegypt", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/housepointegypt/", icon: "fa-instagram" },
    { id: 4, liveLink: "https://www.youtube.com/channel/UC5029dOLeVYEtDSl20_CKeQ", icon: "fa-youtube" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
