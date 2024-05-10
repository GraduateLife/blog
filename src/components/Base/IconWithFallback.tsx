import {
  iconExists,
  Icon,
  loadIcons,
  IconProps,
} from '@iconify/react/dist/iconify.js';

type Props = { icon: string; style?: React.CSSProperties };

export default function IconWithFallback({ icon, style }: Props) {
  if (iconExists(icon)) {
    loadIcons([icon]);
    return <Icon icon={icon} style={style} />;
  }

  return <span style={{ color: 'red' }}>{icon}</span>;
}
