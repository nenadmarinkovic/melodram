import React from "react";
import Link from "next/link"
import Slider from "../components/Slider";
import SliderText from "../components/SliderText";
import {
  BannerRight,
  BannerWrap,
  BannerLeft,
  MainText,
  ReasonTitle,
  More,
} from "../styles/Reasons";

function Reasons() {
  return (
    <BannerWrap>
      <BannerLeft>
        <ReasonTitle>Мелодрам</ReasonTitle>
        <MainText>
          Дејана Банковић је музички педагог, наставница клавира и солфеђа,
          композитор, диригент, заљубљеница у музику која преко Мелодрама жели
          да приближи музику свима, а посебно најмлађима.
        </MainText>
        <More>
          <Link href="/dejana-bankovic">Више о Дејани Банковић</Link>
        </More>
        <Slider />
      </BannerLeft>
      <BannerRight>
        <ReasonTitle>Рекли су о музици</ReasonTitle>
        <SliderText />
      </BannerRight>
    </BannerWrap>
  );
}

export default Reasons;
