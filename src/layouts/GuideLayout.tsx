import { useContext, useEffect, useState } from "react";
import { GuideTypes } from "../assets/static/types"
import MiniGuide from "./MiniGuide";
import PageGuide from "./PageGuide";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function GuideLayout() {
  return (
    <>
      <MiniGuide />
      <PageGuide />
    </>
  )
}