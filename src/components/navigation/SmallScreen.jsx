import SmallScreenMenu from "./SmallScreenMenu";
import ToggleButton from "./ToggleButton";

function SmallScreen({ hamburger, setHamburger, activeSection }) {
  return (
    <>
      <ToggleButton hamburger={hamburger} setHamburger={setHamburger} />
      <SmallScreenMenu
        activeSection={activeSection}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
    </>
  );
}

export default SmallScreen;
