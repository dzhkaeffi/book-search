function Header() {
  return (
    <>
      <header className="w-screen bg-slate-500 h-8 flex justify-between">
        <span className="text-white text-xl px-4">Welcome {"{user}"} 👋</span>
        <menu>
          <button type="button" className="flex px-2 text-xl py-1">
            <i className="fas fa-cog"></i>
          </button>
        </menu>
      </header>
    </>
  );
}

export default Header;
