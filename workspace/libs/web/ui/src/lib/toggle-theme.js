
export function toggleTheme({to}) {
  if (typeof window !== 'undefined') {
    window.document.dispatchEvent(
      new CustomEvent('modeChange', {
        detail: { to:to },
      })
    );
  }
}

export default toggleTheme;
