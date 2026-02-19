import './style.css';
import { Terminal } from './terminal';

const container = document.getElementById('terminal');

if (container) {
  new Terminal(container);
}
