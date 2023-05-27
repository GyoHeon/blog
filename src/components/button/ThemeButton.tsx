export function ThemeButton() {
  return (
    <div className="relative">
      <input type="checkbox" className="absolute" id="dn" />
      <label
        htmlFor="dn"
        className="relative inline-block w-[90px] h-[50px] rounded-[84px] bg-[#83d8ff] checked:bg-[#749dd6] transition-colors"
      >
        <span className="relative inline-block z-10 top-[3px] left-[3px] w-[44px] h-[44px] bg-[#ffcf96] rounded-full shadow-[0_2px_6px_rgba(0,0,0,.3)] transition-all transform-[rotate(-45deg)]">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}
