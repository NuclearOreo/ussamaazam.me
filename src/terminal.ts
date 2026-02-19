import { commands, getBanner, type CommandContext, type CommandOutput } from './commands';

export class Terminal {
  private container: HTMLElement;
  private body!: HTMLElement;
  private inputEl!: HTMLInputElement;
  private inputRow!: HTMLElement;
  private history: string[] = [];
  private historyIndex = -1;
  private promptText = 'guest@web-terminal:~$';

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init(): void {
    // Record start time for uptime command
    (window as unknown as Record<string, number>).__terminalStart = Date.now();

    // Build terminal structure
    this.container.innerHTML = `
      <div class="terminal-header">
       <span class="terminal-title">guest@web-terminal:~</span>
      </div>
      <div class="terminal-body"></div>
    `;

    this.body = this.container.querySelector('.terminal-body')!;

    // Render welcome banner
    this.renderOutput(getBanner());

    // Create the active input row
    this.createInputRow();

    // Focus input on click anywhere
    this.container.addEventListener('click', () => {
      this.inputEl.focus();
    });

    // Set default theme
    this.setTheme('high-contrast');
  }

  private createInputRow(): void {
    this.inputRow = document.createElement('div');
    this.inputRow.className = 'input-row';

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = this.promptText;

    const wrapper = document.createElement('div');
    wrapper.className = 'input-wrapper';

    this.inputEl = document.createElement('input');
    this.inputEl.id = 'terminal-input';
    this.inputEl.type = 'text';
    this.inputEl.autocomplete = 'off';
    this.inputEl.spellcheck = false;
    this.inputEl.autofocus = true;

    this.inputEl.addEventListener('keydown', (e) => this.handleKeyDown(e));

    wrapper.appendChild(this.inputEl);
    this.inputRow.appendChild(prompt);
    this.inputRow.appendChild(wrapper);
    this.body.appendChild(this.inputRow);

    this.inputEl.focus();
    this.scrollToBottom();
  }

  private handleKeyDown(e: KeyboardEvent): void {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        this.executeCommand(this.inputEl.value);
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.navigateHistory('up');
        break;

      case 'ArrowDown':
        e.preventDefault();
        this.navigateHistory('down');
        break;

      case 'Tab':
        e.preventDefault();
        this.autocomplete();
        break;

      case 'l':
        if (e.ctrlKey) {
          e.preventDefault();
          this.clear();
        }
        break;

      case 'c':
        if (e.ctrlKey) {
          e.preventDefault();
          this.freezeCurrentInput(this.inputEl.value + '^C');
          this.createInputRow();
        }
        break;
    }
  }

  private executeCommand(raw: string): void {
    const input = raw.trim();

    // Freeze the current input line (make it static)
    this.freezeCurrentInput(input);

    if (input) {
      this.history.push(input);
    }
    this.historyIndex = -1;

    if (!input) {
      this.createInputRow();
      return;
    }

    const [cmdName, ...args] = this.parseInput(input);
    const command = commands[cmdName.toLowerCase()];

    if (command) {
      const ctx: CommandContext = {
        setTheme: (t) => this.setTheme(t),
        clearTerminal: () => this.clear(),
        getHistory: () => [...this.history],
      };

      const output = command.execute(args, ctx);
      this.renderOutput(output);
    } else {
      this.renderOutput([
        { text: `  Command not found: ${cmdName}`, class: 'error' },
        { text: '  Type "help" for available commands.', class: 'muted' },
      ]);
    }

    this.createInputRow();
  }

  private parseInput(input: string): string[] {
    const tokens: string[] = [];
    let current = '';
    let inQuote: string | null = null;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (inQuote) {
        if (char === inQuote) {
          inQuote = null;
        } else {
          current += char;
        }
      } else if (char === '"' || char === "'") {
        inQuote = char;
      } else if (char === ' ') {
        if (current) {
          tokens.push(current);
          current = '';
        }
      } else {
        current += char;
      }
    }

    if (current) {
      tokens.push(current);
    }

    return tokens;
  }

  private freezeCurrentInput(text: string): void {
    // Replace the active input row with a static version
    this.inputRow.innerHTML = '';

    const prompt = document.createElement('span');
    prompt.className = 'history-prompt';
    prompt.textContent = this.promptText;

    const inputText = document.createElement('span');
    inputText.className = 'history-input';
    inputText.textContent = text;

    this.inputRow.appendChild(prompt);
    this.inputRow.appendChild(inputText);
  }

  private renderOutput(lines: CommandOutput[]): void {
    for (const line of lines) {
      const div = document.createElement('div');
      div.className = 'output-line';
      if (line.class) {
        div.classList.add(line.class);
      }

      // Handle HTML content for ascii-art (preserve whitespace)
      if (line.class === 'ascii-art') {
        div.style.whiteSpace = 'pre';
        div.style.fontFamily = 'inherit';
      }

      div.textContent = line.text;
      this.body.appendChild(div);
    }

    this.scrollToBottom();
  }

  private navigateHistory(direction: 'up' | 'down'): void {
    if (this.history.length === 0) return;

    if (direction === 'up') {
      if (this.historyIndex === -1) {
        this.historyIndex = this.history.length - 1;
      } else if (this.historyIndex > 0) {
        this.historyIndex--;
      }
    } else {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
      } else {
        this.historyIndex = -1;
        this.inputEl.value = '';
        return;
      }
    }

    this.inputEl.value = this.history[this.historyIndex];
    // Move cursor to end
    setTimeout(() => {
      this.inputEl.selectionStart = this.inputEl.selectionEnd = this.inputEl.value.length;
    }, 0);
  }

  private autocomplete(): void {
    const input = this.inputEl.value.trim().toLowerCase();
    if (!input) return;

    const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));

    if (matches.length === 1) {
      this.inputEl.value = matches[0];
    } else if (matches.length > 1) {
      // Show possible completions
      this.freezeCurrentInput(this.inputEl.value);
      this.renderOutput([
        { text: `  ${matches.join('  ')}`, class: 'muted' },
      ]);
      this.createInputRow();
      this.inputEl.value = input;
    }
  }

  private clear(): void {
    this.body.innerHTML = '';
    this.createInputRow();
  }

  private setTheme(theme: string): void {
    if (theme === 'high-contrast') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => {
      this.body.scrollTop = this.body.scrollHeight;
    });
  }
}
