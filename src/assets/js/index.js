const loadModules = async () => {
  try {
    // 全ページ共通
    const { setScrollbarWidth } = await import('./common/_setScrollbarWidth');
    setScrollbarWidth();
    const { hoge } = await import('./common/_hoge');
    hoge();

    // ページ毎のモジュール読み込み
    if (document.getElementById('home')) {
      const { home } = await import('./page/_home');
      home();
    }

    if (document.getElementById('about')) {
      const { about } = await import('./page/_about');
      about();
    }

    if (document.getElementById('javascript')) {
      const { javascript } = await import('./page/_javascript');
      javascript();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load modules', error);
  }
};

loadModules();
