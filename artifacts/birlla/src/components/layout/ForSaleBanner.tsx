export function ForSaleBanner() {
  const handleContact = () => {
    window.location.href =
      'mailto:mosho400@gmail.com?subject=Interested in buying birlla.com&body=Hello, I am interested in purchasing the domain birlla.com. Please let me know the details and the price.';
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex flex-col sm:flex-row items-center justify-center gap-3 text-center px-4 py-2.5"
      style={{ background: '#1a1a1a' }}
    >
      <p className="text-sm tracking-wide" style={{ color: '#f5e6d8' }}>
        <span
          className="font-semibold tracking-widest uppercase text-xs"
          style={{ color: '#d4a574' }}
        >
          birlla.com
        </span>
        <span className="mx-2 hidden sm:inline" style={{ color: '#d4a574' }}>·</span>
        <span className="sm:inline"> This premium beauty domain is available for sale.</span>
      </p>
      <button
        onClick={handleContact}
        className="shrink-0 px-5 py-1 text-xs uppercase tracking-widest font-medium border transition-all duration-300 hover:opacity-80"
        style={{ borderColor: '#d4a574', color: '#d4a574', background: 'transparent' }}
      >
        Contact to Buy
      </button>
    </div>
  );
}
