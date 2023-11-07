import { MouseEventHandler, useEffect, useRef, useState } from "react";
import IconButton from "../../components/IconButton";
import { Position, useTooltipContext } from "../../contexts/TooltipContextProvider";
import { IconType } from "./Icons";

export default function Create() {
  const { setContent, handleMouseMove, handleMouseLeave } = useTooltipContext();

  useEffect(() => {
    setContent('Create');
  }, [])

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <IconButton icon={IconType.CreateIcon} />
    </div>
  )
}