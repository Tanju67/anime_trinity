function ToggleButton({ hamburger, setHamburger }) {
  return (
    <button
      id="menu-btn"
      className={
        "hamburger z-50 block focus:outline-none md:hidden lg:hidden" +
        (hamburger ? " open" : "")
      }
      onClick={() => {
        setHamburger(!hamburger);
      }}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}

export default ToggleButton;
