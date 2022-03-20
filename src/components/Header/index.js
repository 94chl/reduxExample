import PropTypes from "prop-types";

const Header = ({
  children,
  level = 1,
  strong,
  underline = false,
  color = "#000",
  ...props
}) => {
  let Tag = `h${level}`;

  if (level < 1 || level > 5) {
    console.warn("level value error");
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : "none",
    color,
  };

  return (
    <>
      <Tag style={{ ...props.style, ...fontStyle }} {...props}>
        {children}
      </Tag>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
};

export default Header;
