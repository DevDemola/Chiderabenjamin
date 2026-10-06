import {
  FiAlertTriangle,
  FiCompass,
  FiEdit3,
  FiGrid,
  FiLayers,
  FiLayout,
  FiMap,
  FiMessageCircle,
  FiPenTool,
  FiPlayCircle,
  FiSearch,
  FiSend,
  FiUsers,
} from "react-icons/fi";

/* Maps the icon names used in data/site.js to icon components. */
const icons = {
  alert: FiAlertTriangle,
  compass: FiCompass,
  edit: FiEdit3,
  grid: FiGrid,
  layers: FiLayers,
  layout: FiLayout,
  map: FiMap,
  message: FiMessageCircle,
  pen: FiPenTool,
  play: FiPlayCircle,
  search: FiSearch,
  send: FiSend,
  users: FiUsers,
};

const Icon = ({ name, ...props }) => {
  const Component = icons[name];
  return Component ? <Component aria-hidden="true" {...props} /> : null;
};

export default Icon;
