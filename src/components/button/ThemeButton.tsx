export function ThemeButton() {
  return (
    <div className="relative">
      <input type="checkbox" className="peer hidden" id="dn" />
      <label
        htmlFor="dn"
        className="absolute z-20 inline-block w-[4.5rem] h-[2.5rem] rounded-[4rem] cursor-pointer"
      ></label>
      <div className="relative top-0 left-0 inline-block w-[4.5rem] h-[2.5rem] rounded-[4rem] bg-[#83d8ff] peer-checked:bg-[#749dd6] transition-colors" />
      <span className="absolute inline-block z-10 top-[0.15rem] left-[0.15rem] w-[2.2rem] h-[2.2rem] bg-[#ffcf96] rounded-full shadow-[0_2px_6px_rgba(0,0,0,.3)] transition-all transform-[rotate(-45deg)] peer-checked:bg-[#ffe5b5] peer-checked:translate-x-8 peer-checked:rotate-0 peer-checked:[&>*]:opacity-100">
        <span className="crater top-[0.9rem] left-[0.5rem] w-[0.2rem] h-[0.2rem]"></span>
        <span className="crater top-[1.4rem] left-[1.1rem] w-[0.3rem] h-[0.3rem]"></span>
        <span className="crater top-[0.5rem] left-[1.25rem] w-[0.4rem] h-[0.4rem]"></span>
      </span>
      <span className="star top-[0.5rem] left-[1.75rem] z-0 w-[1.5rem] h-[0.15rem] peer-checked:w-[0.1rem] peer-checked:h-[0.1rem]" />
      <span className="star top-[0.9rem] left-[1.4rem] z-10 w-[1.5rem] h-[0.15rem] peer-checked:w-[0.2rem] peer-checked:h-[0.2rem] peer-checked:-translate-x-2.5" />
      <span className="star top-[1.35rem] left-[2rem] z-0 w-[1.5rem] h-[0.15rem] peer-checked:w-[0.1rem] peer-checked:h-[0.1rem] peer-checked:-translate-x-3.5" />
      <span className="star opacity-0 transition-all top-[0.8rem] left-[0.55rem] z-0 w-[0.1rem] h-[0.1rem] translate-x-0.5 peer-checked:opacity-100 peer-checked:translate-x-0" />
      <span className="star opacity-0 transition-all top-[1.6rem] left-[0.85rem] z-0 w-[0.15rem] h-[0.15rem] translate-x-0.5 peer-checked:opacity-100 peer-checked:translate-x-0" />
      <span className="star opacity-0 transition-all top-[1.8rem] left-[1.4rem] z-0 w-[0.1rem] h-[0.1rem] translate-x-0.5 peer-checked:opacity-100 peer-checked:translate-x-0" />
    </div>
  );
}
