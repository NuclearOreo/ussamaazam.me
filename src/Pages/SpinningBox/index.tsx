import { styles } from './styles'

export function SpinningBox() {
  return (
    <div className={styles}>
      <div id="cube" style={{ width: '4em', height: '8em' }}>
        <div style={{ transform: 'translate3d(0em, 0em, 2em)' }}>A</div>
        <div style={{ transform: 'translate3d(4em, 0em, 2em)' }}>A</div>
        <div style={{ transform: 'translate3d(0em, 4em, 2em)' }}>A</div>
        <div style={{ transform: 'translate3d(4em, 4em, 2em)' }}>A</div>
        <div style={{ transform: 'translate3d(0em, 0em, -2em)' }}>A</div>
        <div style={{ transform: 'translate3d(4em, 0em, -2em)' }}>A</div>
        <div style={{ transform: 'translate3d(0em, 4em, -2em)' }}>A</div>
        <div style={{ transform: 'translate3d(4em, 4em, -2em)' }}>A</div>
      </div>
    </div>
  )
}
