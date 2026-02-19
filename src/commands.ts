export interface CommandOutput {
  text: string;
  class?: string;
}

export interface CommandContext {
  setTheme: (theme: string) => void;
  clearTerminal: () => void;
  getHistory: () => string[];
}

export interface Command {
  description: string;
  usage?: string;
  execute: (args: string[], ctx: CommandContext) => CommandOutput[];
}

const THEMES = ['dark', 'green', 'light', 'dracula', 'high-contrast'];

const BANNER = `
 __        __   _      _____                   _             _
 \\ \\      / /__| |__  |_   _|__ _ __ _ __ ___ (_)_ __   __ _| |
  \\ \\ /\\ / / _ \\ '_ \\   | |/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
   \\ V  V /  __/ |_) |  | |  __/ |  | | | | | | | | | | (_| | |
    \\_/\\_/ \\___|_.__/   |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
`;

export function getBanner(): CommandOutput[] {
  return [
    { text: BANNER, class: 'ascii-art' },
    { text: '' },
    { text: '  Welcome to WebTerminal v1.0.0', class: 'accent' },
    { text: '  Type "help" to see available commands.', class: 'muted' },
    { text: '' },
  ];
}

export const commands: Record<string, Command> = {
  help: {
    description: 'Show available commands',
    execute: (_args, _ctx) => {
      const lines: CommandOutput[] = [
        { text: '' },
        { text: '  Available Commands:', class: 'accent' },
        { text: '  ==================', class: 'muted' },
        { text: '' },
      ];

      for (const [name, cmd] of Object.entries(commands)) {
        const padded = `  ${name}`.padEnd(20);
        lines.push({
          text: `${padded}${cmd.description}`,
          class: undefined,
        });
      }

      lines.push({ text: '' });
      lines.push({ text: '  Tip: Use arrow keys to navigate command history.', class: 'muted' });
      lines.push({ text: '' });

      return lines;
    },
  },

  about: {
    description: 'About this terminal',
    execute: () => [
      { text: '' },
      { text: '  WebTerminal v1.0.0', class: 'prompt-color' },
      { text: '  A browser-based interactive terminal experience.', class: 'muted' },
      { text: '' },
      { text: '  Built with TypeScript + Vite', class: 'muted' },
      { text: '  No frameworks. No dependencies. Pure web.', class: 'muted' },
      { text: '' },
    ],
  },

  echo: {
    description: 'Print text to the terminal',
    usage: 'echo <text>',
    execute: (args) => {
      const text = args.join(' ');
      return [{ text: text || '' }];
    },
  },

  clear: {
    description: 'Clear the terminal screen',
    execute: (_args, ctx) => {
      ctx.clearTerminal();
      return [];
    },
  },

  date: {
    description: 'Show current date and time',
    execute: () => {
      const now = new Date();
      return [
        { text: `  ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` },
        { text: `  ${now.toLocaleTimeString('en-US')}`, class: 'muted' },
      ];
    },
  },

  whoami: {
    description: 'Display current user',
    execute: () => [
      { text: '  guest@web-terminal', class: 'accent' },
    ],
  },

  hostname: {
    description: 'Display hostname',
    execute: () => [
      { text: `  ${window.location.hostname || 'localhost'}`, class: 'accent' },
    ],
  },

  uname: {
    description: 'Display system information',
    execute: () => [
      { text: `  WebTerminal 1.0.0 ${navigator.platform} ${navigator.userAgent.split(' ').pop()}` },
    ],
  },

  theme: {
    description: 'Change color theme (dark, green, light, dracula, high-contrast)',
    usage: 'theme <name>',
    execute: (args, ctx) => {
      const themeName = args[0]?.toLowerCase();

      if (!themeName) {
        return [
          { text: '' },
          { text: '  Available themes:', class: 'accent' },
          ...THEMES.map(t => ({
            text: `    - ${t}`,
            class: document.documentElement.getAttribute('data-theme') === t ||
                   (!document.documentElement.getAttribute('data-theme') && t === 'high-contrast')
              ? 'accent' as const
              : 'muted' as const,
          })),
          { text: '' },
          { text: '  Usage: theme <name>', class: 'muted' },
          { text: '' },
        ];
      }

      if (!THEMES.includes(themeName)) {
        return [
          { text: `  Unknown theme: "${themeName}"`, class: 'error' },
          { text: `  Available: ${THEMES.join(', ')}`, class: 'muted' },
        ];
      }

      ctx.setTheme(themeName);
      return [
        { text: `  Theme changed to "${themeName}"`, class: 'accent' },
      ];
    },
  },

  history: {
    description: 'Show command history',
    execute: (_args, ctx) => {
      const hist = ctx.getHistory();
      if (hist.length === 0) {
        return [{ text: '  No commands in history.', class: 'muted' }];
      }
      return hist.map((cmd, i) => ({
        text: `  ${String(i + 1).padStart(4)}  ${cmd}`,
        class: 'muted' as const,
      }));
    },
  },

  weather: {
    description: 'Show a fake weather report',
    execute: () => {
      const conditions = ['Sunny', 'Partly Cloudy', 'Overcast', 'Light Rain', 'Thunderstorm', 'Snowing', 'Foggy'];
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      const temp = Math.floor(Math.random() * 35) + 5;
      const humidity = Math.floor(Math.random() * 60) + 30;

      return [
        { text: '' },
        { text: '  Weather Report (simulated)', class: 'prompt-color' },
        { text: `  Condition:   ${condition}` },
        { text: `  Temperature: ${temp}°C / ${Math.round(temp * 9/5 + 32)}°F` },
        { text: `  Humidity:    ${humidity}%` },
        { text: '' },
      ];
    },
  },

  joke: {
    description: 'Tell a random programming joke',
    execute: () => {
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs.',
        'A SQL query walks into a bar, walks up to two tables and asks... "Can I join you?"',
        'How many programmers does it take to change a light bulb? None. That\'s a hardware problem.',
        'Why do Java developers wear glasses? Because they don\'t C#.',
        '!false - It\'s funny because it\'s true.',
        'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn\'t.',
        'To understand recursion, you must first understand recursion.',
        'There are only 10 types of people in the world: those who understand binary and those who don\'t.',
      ];
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      return [
        { text: '' },
        { text: `  ${joke}`, class: 'warning' },
        { text: '' },
      ];
    },
  },

  calc: {
    description: 'Simple calculator (e.g. calc 2 + 3)',
    usage: 'calc <expression>',
    execute: (args) => {
      const expr = args.join(' ');
      if (!expr) {
        return [
          { text: '  Usage: calc <expression>', class: 'muted' },
          { text: '  Example: calc 2 + 3 * 4', class: 'muted' },
        ];
      }

      // Only allow safe math characters
      if (!/^[\d\s+\-*/().%]+$/.test(expr)) {
        return [{ text: '  Invalid expression. Only numbers and +, -, *, /, (, ), % allowed.', class: 'error' }];
      }

      try {
        // Using Function constructor for math eval (safe since we validated input)
        const result = new Function(`return (${expr})`)();
        if (typeof result !== 'number' || !isFinite(result)) {
          return [{ text: '  Error: Invalid result.', class: 'error' }];
        }
        return [{ text: `  = ${result}`, class: 'accent' }];
      } catch {
        return [{ text: '  Error: Could not evaluate expression.', class: 'error' }];
      }
    },
  },

  uptime: {
    description: 'Show session uptime',
    execute: () => {
      const now = Date.now();
      const start = (window as unknown as Record<string, number>).__terminalStart || now;
      const diff = Math.floor((now - start) / 1000);
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      return [
        { text: `  Session uptime: ${hours}h ${minutes}m ${seconds}s`, class: 'accent' },
      ];
    },
  },

  pwd: {
    description: 'Print working directory',
    execute: () => [
      { text: '  /home/guest', class: 'accent' },
    ],
  },

  ls: {
    description: 'List directory contents',
    execute: () => [
      { text: '  .bashrc    .profile    documents/    downloads/' },
      { text: '  .config/   readme.txt  projects/     gallery/' },
    ],
  },

  cat: {
    description: 'Display file contents',
    usage: 'cat <filename>',
    execute: (args) => {
      const file = args[0];
      const files: Record<string, string[]> = {
        'readme.txt': [
          '',
          '  =============================================',
          '  Welcome to WebTerminal!',
          '  =============================================',
          '',
          '  This is a browser-based terminal emulator.',
          '  Type "help" to explore available commands.',
          '',
          '  Have fun exploring!',
          '',
        ],
        '.profile': [
          '  # User profile',
          '  export USER=guest',
          '  export SHELL=/bin/web-terminal',
          '  export TERM=xterm-256color',
        ],
        '.bashrc': [
          '  # WebTerminal config',
          '  alias ll="ls -la"',
          '  alias cls="clear"',
          '  PS1="guest@web-terminal:~$ "',
        ],
      };

      if (!file) {
        return [{ text: '  Usage: cat <filename>', class: 'muted' }];
      }

      if (files[file]) {
        return files[file].map(line => ({ text: line }));
      }

      return [{ text: `  cat: ${file}: No such file or directory`, class: 'error' }];
    },
  },

  neofetch: {
    description: 'Display system info with ASCII art',
    execute: () => {
      const art = [
        '       _,met$$$$$gg.',
        '    ,g$$$$$$$$$$$$$$$P.',
        '  ,g$$P"        """Y$$.".',
        ' ,$$P\'              `$$$.',
        '\',$$P       ,ggs.    `$$b:',
        '`d$$\'     ,$P"\'  .    $$$',
        ' $$P      d$\'     ,   $$P',
        ' $$:      $$.   -     ,d$$\'',
        ' $$;      Y$b._    _,d$P\'',
        ' Y$$.    `.`"Y$$$$P"\'',
        ' `$$b      "-.__',
        '  `Y$$',
        '   `Y$$.',
        '     `$$b.',
        '       `Y$$b.',
        '          `"Y$b._',
        '              `"""',
      ];

      const info = [
        { text: 'guest@web-terminal', class: 'prompt-color' },
        { text: '─────────────────', class: 'muted' },
        { text: `OS: WebTerminal 1.0.0`, class: undefined },
        { text: `Host: ${window.location.hostname || 'localhost'}`, class: undefined },
        { text: `Kernel: ${navigator.platform}`, class: undefined },
        { text: `Uptime: just now`, class: undefined },
        { text: `Shell: web-terminal`, class: undefined },
        { text: `Resolution: ${window.innerWidth}x${window.innerHeight}`, class: undefined },
        { text: `Theme: ${document.documentElement.getAttribute('data-theme') || 'high-contrast'}`, class: undefined },
        { text: `Terminal: WebTerminal`, class: undefined },
        { text: `Browser: ${navigator.userAgent.split(' ').slice(-1)[0]?.split('/')[0] || 'Unknown'}`, class: undefined },
      ];

      const lines: CommandOutput[] = [{ text: '' }];

      const maxArtLines = Math.max(art.length, info.length);
      for (let i = 0; i < maxArtLines; i++) {
        const artLine = (art[i] || '').padEnd(30);
        const infoLine = info[i];
        if (infoLine) {
          lines.push({
            text: `  ${artLine}  ${infoLine.text}`,
            class: infoLine.class,
          });
        } else {
          lines.push({ text: `  ${artLine}`, class: 'prompt-color' });
        }
      }

      lines.push({ text: '' });
      return lines;
    },
  },

  gallery: {
    description: 'Browse the photo gallery',
    usage: 'gallery [number|all]',
    execute: (args) => {
      const photos: { title: string; caption: string; art: string[] }[] = [
        {
          title: 'Sunset Over the Mountains',
          caption: 'Golden hour at 12,000 ft',
          art: [
            '         .     *    .   *',
            '    *       .        .     *',
            '       .  *    .  *     .',
            '   \\       .      .    /',
            '    \\  . *    ()    . /',
            '     \\     .-"""-.   /',
            '  ----\\.-"   .   "-/----',
            '   __./"  .    .   "\\.__',
            '  "---/  .   .   .  \\---"',
            '     / .    .    .   \\',
            '  --/    .    .    .  \\--',
            '   /  .    .    .   .  \\',
          ],
        },
        {
          title: 'City Skyline at Night',
          caption: 'Downtown from the rooftop',
          art: [
            '    *  .  *   .  *  . *  .',
            ' .    *    .    *    .   *',
            '             [ ]          ',
            '     [ ]     |"|   [ ]    ',
            '     |"|  _  |_|   |"|    ',
            '     |_| |"| |||   |_|    ',
            '  _  ||| |_| |||___||| _  ',
            ' |"| ||| ||| |||||||| |"| ',
            ' |_|_|||_|||_||||||||_|_| ',
            ' ||||||||||||||||||||||||| ',
            ' ||||||||||||||||||||||||| ',
            '_||||||||||||||||||||||||/_',
          ],
        },
        {
          title: 'Peaceful Lake',
          caption: 'Morning mist, no filter',
          art: [
            '                           ',
            '    .  *  .   *  .  *  .   ',
            '       /\\      /\\          ',
            '      /  \\  /\\/  \\   /\\   ',
            '  /\\_/    \\/      \\_/  \\  ',
            ' /                      \\ ',
            '~~~~~~~~~~~~~v~~~~~~~~~~~~',
            ' \\_    /\\          /\\  _/ ',
            '   \\  /  \\  /\\/\\ /  \\/   ',
            '    \\/    \\/    \\/        ',
            '~~~~~~~~~~~~~~~~~~~~~~~~~~',
            '                           ',
          ],
        },
        {
          title: 'The Cat',
          caption: 'Chief debugging officer',
          art: [
            '        /\\_/\\             ',
            '       ( o.o )            ',
            '        > ^ <             ',
            '       /|   |\\           ',
            '      (_|   |_)          ',
            '        |   |            ',
            '        |___|            ',
            '       /     \\           ',
            '      /       \\          ',
            '     (_________)         ',
            '       ||   ||           ',
            '       ""   ""           ',
          ],
        },
        {
          title: 'Rocket Launch',
          caption: 'To the moon and beyond',
          art: [
            '          /\\              ',
            '         /  \\             ',
            '        | /\\ |            ',
            '        | \\/ |            ',
            '        | /\\ |            ',
            '        |/  \\|            ',
            '       /|    |\\           ',
            '      / |    | \\          ',
            '     /__|    |__\\         ',
            '         |  |             ',
            '        /|##|\\            ',
            '       / *  * \\           ',
          ],
        },
      ];

      const renderPhoto = (photo: typeof photos[0], index: number): CommandOutput[] => {
        const frame = '+-' + '-'.repeat(28) + '-+';
        const lines: CommandOutput[] = [
          { text: '' },
          { text: `  [${index + 1}/${photos.length}] ${photo.title}`, class: 'accent' },
          { text: `  ${frame}` },
          ...photo.art.map(line => ({
            text: `  | ${line.padEnd(28)} |`,
            class: 'prompt-color' as const,
          })),
          { text: `  ${frame}` },
          { text: `  ${photo.caption}`, class: 'muted' },
        ];
        return lines;
      };

      const arg = args[0]?.toLowerCase();

      if (!arg) {
        return [
          { text: '' },
          { text: '  Photo Gallery', class: 'accent' },
          { text: '  =============', class: 'muted' },
          { text: '' },
          ...photos.map((p, i) => ({
            text: `    ${i + 1}. ${p.title}`,
            class: 'muted' as const,
          })),
          { text: '' },
          { text: '  Usage: gallery <number> or gallery all', class: 'muted' },
          { text: '' },
        ];
      }

      if (arg === 'all') {
        const lines: CommandOutput[] = [
          { text: '' },
          { text: '  Photo Gallery — Showing all', class: 'accent' },
          { text: '  ===========================', class: 'muted' },
        ];
        for (let i = 0; i < photos.length; i++) {
          lines.push(...renderPhoto(photos[i], i));
        }
        lines.push({ text: '' });
        return lines;
      }

      const num = parseInt(arg, 10);
      if (isNaN(num) || num < 1 || num > photos.length) {
        return [
          { text: `  Invalid selection: "${args[0]}"`, class: 'error' },
          { text: `  Choose 1-${photos.length}, or "all"`, class: 'muted' },
        ];
      }

      return [...renderPhoto(photos[num - 1], num - 1), { text: '' }];
    },
  },
};
