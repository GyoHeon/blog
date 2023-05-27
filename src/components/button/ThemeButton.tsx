export function ThemeButton() {
  return (
    <label className="theme-label">
      <div className="theme-toggle">
        <input className="theme-state" type="checkbox" name="check" value="check" />
        <div className="theme-indicator"></div>
      </div>
    </label>
  );
}
