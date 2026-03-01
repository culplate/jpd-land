export { default as icons } from './sprite.svg';

// if you need to add a new icon, use https://svgsprit.es/ and copy output code to the sprite.svg file

// open sprite.svg with text editor and find the icon you need
// current icon ids:
//  icon-arrow_rounded,
//  icon-arrow_sharp,
//  icon-cart,
//  icon-checkbox_filled,
//  icon-minus,
//  icon-plus

// USAGE:
// import { icons } from "@/assets/icons";

// <svg className={s.iconName}> // s - styles, may be styled in scss
//    <use xlinkHref={`${icons.src}#icon-name`}></use>
// </svg>
