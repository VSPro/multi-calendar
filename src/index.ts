import ImportTest from './test'
import './styles/index.less'

interface SquareConfig {
  color?: string;
  width?: number;
  readonly height: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}
const mySquare = createSquare({color: "black", height: 123});

const body: HTMLElement = document.body;
const container: HTMLElement = document.createElement('div');
container.className = 'container';
body.appendChild(container);

ImportTest();
