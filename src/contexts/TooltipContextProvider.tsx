import { createContext, useContext, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
}

export type Position = {
  x: number;
  y: number;
}

type TooltipContextType = {
  showTooltip: boolean;
  setShowTooltip: (b: boolean) => void;
  position: Position;
  setPosition: (p: Position) => void;
  content: string;
  setContent: (s: string) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: () => void;
}

export const TooltipContext = createContext<TooltipContextType | null>(null);

export function useTooltipContext() {
  const value = useContext(TooltipContext);
  if (value == null) throw Error("Cannot use outside of Tooltip Provider");

  return value;
}

export default function TooltipContextProvider({ children } : Props) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({x: 0, y: 0}); // horizontal viewport position of tooltip
  const [content, setContent] = useState<string>("");
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    clearTimeout(timeout.current!);
    setShowTooltip(false);

    timeout.current = setTimeout(() => {
      const x = e.clientX + 10;
      const y = e.clientY + 20;
      setPosition({x, y});
      setShowTooltip(true);
    }, 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeout.current!);
  }

  return (
    <TooltipContext.Provider value={{showTooltip, setShowTooltip, position, setPosition, content, setContent, handleMouseMove, handleMouseLeave}}>
      {children}
    </TooltipContext.Provider>
  )
}