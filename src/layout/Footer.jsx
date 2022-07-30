const Footer = () => {
  return (
    <div className="Footer text-white">
      <h6 className="text-center">
        <span className="Footer-content">Website completed on 7.30.2022</span>{" "}
        <span className="Footer-content ms-sm-5">
          {new Date().getMonth() + 1}.{new Date().getDate()}.
          {new Date().getFullYear()}
        </span>
      </h6>
    </div>
  );
};

export default Footer;
