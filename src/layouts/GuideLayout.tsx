import { useState } from "react";
import { GuideTypes } from "../assets/static/types"
import MiniGuide from "./MiniGuide";
import PageGuide from "./PageGuide";

type Props = {
  layout: GuideTypes | null;
}

export default function GuideLayout({ layout }: Props) {

  return (
    layout === GuideTypes.Mini? <MiniGuide /> : 
    layout === GuideTypes.Regular? <PageGuide /> : null
  )
}