import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiJavascript, SiGit, SiGithub,
} from 'react-icons/si'
import { FLOATING_TECH } from '../../constants'

const ICON_MAP = {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiJavascript, SiGit, SiGithub,
}

export default function OrbitIcons() {
  return (
    <div className="orbit-ring" aria-hidden="true">
      {FLOATING_TECH.slice(0, 8).map((tech, i) => {
        const Icon = ICON_MAP[tech.icon]
        const angle = (i / 8) * 360
        return (
          <div
            key={tech.name}
            className="orbit-icon"
            style={{
              '--orbit-angle': `${angle}deg`,
              '--orbit-delay': `${i * -1.2}s`,
            }}
          >
            <span className="orbit-icon-inner" style={{ color: tech.color }}>
              {Icon && <Icon />}
            </span>
          </div>
        )
      })}
    </div>
  )
}
