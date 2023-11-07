import { useTooltipContext } from "../contexts/TooltipContextProvider";

type Props = {  
  content: string;
  children: React.ReactNode;
}

export default function TooltipWrapper({ content, children }: Props) {
  const { setContent, handleMouseMove, handleMouseLeave } = useTooltipContext();

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={() => setContent(content)}>
      {children}
    </div>
  )
}