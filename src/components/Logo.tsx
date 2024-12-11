import { PropsOf, component$ } from '@builder.io/qwik';
// import { cn } from '@qwik-ui/utils';
// import { useTheme } from '~/lib/provider';


export const Logo = component$<PropsOf<'svg'>>(({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      width="122px"
      height="48px"
      viewBox="0 0 1920 761"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <g>
        <path
          class="fill-black dark:fill-gray-300"
          d="M 259.5,103.5 C 304.496,104.24 349.496,104.907 394.5,105.5C 414.687,105.35 434.854,104.683 455,103.5C 471.513,103.211 487.679,105.378 503.5,110C 509.997,113.414 516.33,117.081 522.5,121C 527.333,125.833 532.167,130.667 537,135.5C 564.938,183.713 592.605,232.046 620,280.5C 626.942,293.385 633.609,306.385 640,319.5C 649.541,347.178 647.208,373.845 633,399.5C 615.386,429.922 598.553,460.422 582.5,491C 580.321,492.848 578.487,495.015 577,497.5C 563.482,521.706 550.149,546.04 537,570.5C 534.222,575.277 531.056,579.777 527.5,584C 531.043,588.916 534.21,594.083 537,599.5C 547.581,623.162 559.081,646.328 571.5,669C 570.366,670.016 570.699,670.683 572.5,671C 572.167,671.333 571.833,671.667 571.5,672C 575.394,679.121 579.061,686.455 582.5,694C 580.458,698.219 577.125,699.552 572.5,698C 567.033,695.4 561.366,693.4 555.5,692C 549.319,688.743 542.985,685.743 536.5,683C 517.72,676.581 499.053,669.914 480.5,663C 446.183,648.892 411.516,635.559 376.5,623C 372.325,621.384 368.325,619.384 364.5,617C 327.297,617.778 289.963,618.111 252.5,618C 235.568,616.199 220.901,609.532 208.5,598C 205.174,593.707 201.674,589.541 198,585.5C 164.132,527.459 129.799,469.126 95,410.5C 93.629,406.927 92.129,403.427 90.5,400C 90.8333,399.667 91.1667,399.333 91.5,399C 89.9148,394.687 89.0815,390.187 89,385.5C 87.7574,372.291 88.7574,359.291 92,346.5C 95.0224,339.793 98.0224,333.126 101,326.5C 118.625,295.586 134.958,263.919 150,231.5C 166.368,202.765 181.702,173.432 196,143.5C 206.036,129.131 218.87,117.964 234.5,110C 242.826,107.336 251.16,105.17 259.5,103.5 Z M 273.5,130.5 C 298.068,158.906 323.568,186.573 350,213.5C 395.776,263.948 441.61,314.448 487.5,365C 475.333,377.833 463.167,390.667 451,403.5C 450.833,405.167 450.667,406.833 450.5,408.5C 456.437,465.311 462.104,522.145 467.5,579C 467.019,581.374 466.852,583.874 467,586.5C 393.546,513.377 320.046,439.544 246.5,365C 265.193,347.306 283.86,329.639 302.5,312C 292.514,251.569 282.848,191.069 273.5,130.5 Z"
        />
      </g>
      <g>
        <path
          class="fill-gray-500 dark:fill-white"
          d="M 1325.5,109.5 C 1350.17,107.747 1372.5,113.913 1392.5,128C 1410.27,144.31 1417.1,164.476 1413,188.5C 1407.03,215.475 1390.86,233.309 1364.5,242C 1339.72,248.685 1315.39,247.351 1291.5,238C 1257.24,219.296 1245.74,191.13 1257,153.5C 1266.74,132.369 1282.91,118.869 1305.5,113C 1312.26,111.502 1318.92,110.335 1325.5,109.5 Z"
        />
      </g>
      <g>
        <path
          class="fill-black dark:fill-gray-300"
          d="M 1459.5,156.5 C 1504.17,156.5 1548.83,156.5 1593.5,156.5C 1593.33,225.501 1593.5,294.501 1594,363.5C 1624.14,332.361 1654.64,301.528 1685.5,271C 1738.17,270.167 1790.84,270.333 1843.5,271.5C 1799.35,318.151 1755.02,364.651 1710.5,411C 1758.5,471.667 1806.5,532.333 1854.5,593C 1800.16,593.833 1745.83,593.667 1691.5,592.5C 1665.82,560.461 1640.16,528.461 1614.5,496.5C 1607.22,503.072 1600.38,510.072 1594,517.5C 1593.5,542.831 1593.33,568.164 1593.5,593.5C 1548.83,593.5 1504.17,593.5 1459.5,593.5C 1459.5,447.833 1459.5,302.167 1459.5,156.5 Z"
        />
      </g>
      <g>
        <path
          class="fill-black dark:fill-gray-300"
          d="M 694.5,269.5 C 731.167,269.5 767.833,269.5 804.5,269.5C 804.333,332.834 804.5,396.168 805,459.5C 808.723,500.898 830.889,517.398 871.5,509C 876.59,507.042 881.09,504.208 885,500.5C 893.158,534 910.325,561.834 936.5,584C 901.655,599.065 865.321,604.399 827.5,600C 748.404,591.237 704.237,547.403 695,468.5C 694.5,402.168 694.333,335.834 694.5,269.5 Z"
        />
      </g>
      <g>
        <path
          class="fill-gray-500 dark:fill-white"
          d="M 897.5,269.5 C 934.5,269.5 971.5,269.5 1008.5,269.5C 1008.02,336.194 1008.52,402.861 1010,469.5C 1016.9,503.369 1037.4,516.869 1071.5,510C 1082.51,506.747 1091.01,500.247 1097,490.5C 1100.13,483.773 1102.46,476.773 1104,469.5C 1105.48,402.861 1105.98,336.194 1105.5,269.5C 1141.83,269.5 1178.17,269.5 1214.5,269.5C 1214.67,332.834 1214.5,396.168 1214,459.5C 1213.31,501.683 1197.81,537.183 1167.5,566C 1148.12,581.688 1126.12,592.021 1101.5,597C 1063.33,604.166 1025.66,602.166 988.5,591C 943.097,574.265 914.597,542.432 903,495.5C 900.103,482.658 898.436,469.658 898,456.5C 897.5,394.168 897.333,331.834 897.5,269.5 Z"
        />
      </g>
      <g>
        <path
          class="fill-gray-500 dark:fill-white"
          d="M 1266.5,270.5 C 1311.17,270.5 1355.83,270.5 1400.5,270.5C 1400.5,378.167 1400.5,485.833 1400.5,593.5C 1355.83,593.5 1311.17,593.5 1266.5,593.5C 1266.5,485.833 1266.5,378.167 1266.5,270.5 Z"
        />
      </g>
    </svg>
  );
});

// export const LogoWithBorders = component$<PropsOf<'svg'>>(({ ...props }) => {
//   const { themeSig } = useTheme();
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       shape-rendering="geometricPrecision"
//       text-rendering="geometricPrecision"
//       image-rendering="optimizeQuality"
//       width="122px"
//       height="48px"
//       viewBox="0 0 1920 761"
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//     >
//       <g
//         class={cn(themeSig.value?.includes('light') ? 'stroke-black' : 'stroke-white')}
//         stroke-width="8"
//         fill="none"
//       >
//         <g>
//           <path
//             class="fill-primary"
//             d="M 259.5,103.5 C 304.496,104.24 349.496,104.907 394.5,105.5C 414.687,105.35 434.854,104.683 455,103.5C 471.513,103.211 487.679,105.378 503.5,110C 509.997,113.414 516.33,117.081 522.5,121C 527.333,125.833 532.167,130.667 537,135.5C 564.938,183.713 592.605,232.046 620,280.5C 626.942,293.385 633.609,306.385 640,319.5C 649.541,347.178 647.208,373.845 633,399.5C 615.386,429.922 598.553,460.422 582.5,491C 580.321,492.848 578.487,495.015 577,497.5C 563.482,521.706 550.149,546.04 537,570.5C 534.222,575.277 531.056,579.777 527.5,584C 531.043,588.916 534.21,594.083 537,599.5C 547.581,623.162 559.081,646.328 571.5,669C 570.366,670.016 570.699,670.683 572.5,671C 572.167,671.333 571.833,671.667 571.5,672C 575.394,679.121 579.061,686.455 582.5,694C 580.458,698.219 577.125,699.552 572.5,698C 567.033,695.4 561.366,693.4 555.5,692C 549.319,688.743 542.985,685.743 536.5,683C 517.72,676.581 499.053,669.914 480.5,663C 446.183,648.892 411.516,635.559 376.5,623C 372.325,621.384 368.325,619.384 364.5,617C 327.297,617.778 289.963,618.111 252.5,618C 235.568,616.199 220.901,609.532 208.5,598C 205.174,593.707 201.674,589.541 198,585.5C 164.132,527.459 129.799,469.126 95,410.5C 93.629,406.927 92.129,403.427 90.5,400C 90.8333,399.667 91.1667,399.333 91.5,399C 89.9148,394.687 89.0815,390.187 89,385.5C 87.7574,372.291 88.7574,359.291 92,346.5C 95.0224,339.793 98.0224,333.126 101,326.5C 118.625,295.586 134.958,263.919 150,231.5C 166.368,202.765 181.702,173.432 196,143.5C 206.036,129.131 218.87,117.964 234.5,110C 242.826,107.336 251.16,105.17 259.5,103.5 Z M 273.5,130.5 C 298.068,158.906 323.568,186.573 350,213.5C 395.776,263.948 441.61,314.448 487.5,365C 475.333,377.833 463.167,390.667 451,403.5C 450.833,405.167 450.667,406.833 450.5,408.5C 456.437,465.311 462.104,522.145 467.5,579C 467.019,581.374 466.852,583.874 467,586.5C 393.546,513.377 320.046,439.544 246.5,365C 265.193,347.306 283.86,329.639 302.5,312C 292.514,251.569 282.848,191.069 273.5,130.5 Z"
//           />
//         </g>
//         <g>
//           <path
//             class="fill-secondary"
//             d="M 1325.5,109.5 C 1350.17,107.747 1372.5,113.913 1392.5,128C 1410.27,144.31 1417.1,164.476 1413,188.5C 1407.03,215.475 1390.86,233.309 1364.5,242C 1339.72,248.685 1315.39,247.351 1291.5,238C 1257.24,219.296 1245.74,191.13 1257,153.5C 1266.74,132.369 1282.91,118.869 1305.5,113C 1312.26,111.502 1318.92,110.335 1325.5,109.5 Z"
//           />
//         </g>
//         <g>
//           <path
//             class="fill-primary"
//             d="M 1459.5,156.5 C 1504.17,156.5 1548.83,156.5 1593.5,156.5C 1593.33,225.501 1593.5,294.501 1594,363.5C 1624.14,332.361 1654.64,301.528 1685.5,271C 1738.17,270.167 1790.84,270.333 1843.5,271.5C 1799.35,318.151 1755.02,364.651 1710.5,411C 1758.5,471.667 1806.5,532.333 1854.5,593C 1800.16,593.833 1745.83,593.667 1691.5,592.5C 1665.82,560.461 1640.16,528.461 1614.5,496.5C 1607.22,503.072 1600.38,510.072 1594,517.5C 1593.5,542.831 1593.33,568.164 1593.5,593.5C 1548.83,593.5 1504.17,593.5 1459.5,593.5C 1459.5,447.833 1459.5,302.167 1459.5,156.5 Z"
//           />
//         </g>
//         <g>
//           <path
//             class="fill-primary"
//             d="M 694.5,269.5 C 731.167,269.5 767.833,269.5 804.5,269.5C 804.333,332.834 804.5,396.168 805,459.5C 808.723,500.898 830.889,517.398 871.5,509C 876.59,507.042 881.09,504.208 885,500.5C 893.158,534 910.325,561.834 936.5,584C 901.655,599.065 865.321,604.399 827.5,600C 748.404,591.237 704.237,547.403 695,468.5C 694.5,402.168 694.333,335.834 694.5,269.5 Z"
//           />
//         </g>
//         <g>
//           <path
//             class="fill-secondary"
//             d="M 897.5,269.5 C 934.5,269.5 971.5,269.5 1008.5,269.5C 1008.02,336.194 1008.52,402.861 1010,469.5C 1016.9,503.369 1037.4,516.869 1071.5,510C 1082.51,506.747 1091.01,500.247 1097,490.5C 1100.13,483.773 1102.46,476.773 1104,469.5C 1105.48,402.861 1105.98,336.194 1105.5,269.5C 1141.83,269.5 1178.17,269.5 1214.5,269.5C 1214.67,332.834 1214.5,396.168 1214,459.5C 1213.31,501.683 1197.81,537.183 1167.5,566C 1148.12,581.688 1126.12,592.021 1101.5,597C 1063.33,604.166 1025.66,602.166 988.5,591C 943.097,574.265 914.597,542.432 903,495.5C 900.103,482.658 898.436,469.658 898,456.5C 897.5,394.168 897.333,331.834 897.5,269.5 Z"
//           />
//         </g>
//         <g>
//           <path
//             class="fill-secondary"
//             d="M 1266.5,270.5 C 1311.17,270.5 1355.83,270.5 1400.5,270.5C 1400.5,378.167 1400.5,485.833 1400.5,593.5C 1355.83,593.5 1311.17,593.5 1266.5,593.5C 1266.5,485.833 1266.5,378.167 1266.5,270.5 Z"
//           />
//         </g>
//       </g>
//     </svg>
//   );
// });

// export const LogoIcon = component$<PropsOf<'svg'>>(({ ...props }) => {
//   const { themeSig } = useTheme();
//   return (
//     <svg
//       {...props}
//       width="48"
//       height="48"
//       viewBox="0 0 761 761"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g
//         class={cn(themeSig.value?.includes('light') ? 'stroke-black' : 'stroke-white')}
//         stroke-width="8"
//         fill="none"
//       >
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           class="fill-primary"
//           d="M 259.5,103.5 C 304.496,104.24 349.496,104.907 394.5,105.5C 414.687,105.35 434.854,104.683 455,103.5C 471.513,103.211 487.679,105.378 503.5,110C 509.997,113.414 516.33,117.081 522.5,121C 527.333,125.833 532.167,130.667 537,135.5C 564.938,183.713 592.605,232.046 620,280.5C 626.942,293.385 633.609,306.385 640,319.5C 649.541,347.178 647.208,373.845 633,399.5C 615.386,429.922 598.553,460.422 582.5,491C 580.321,492.848 578.487,495.015 577,497.5C 563.482,521.706 550.149,546.04 537,570.5C 534.222,575.277 531.056,579.777 527.5,584C 531.043,588.916 534.21,594.083 537,599.5C 547.581,623.162 559.081,646.328 571.5,669C 570.366,670.016 570.699,670.683 572.5,671C 572.167,671.333 571.833,671.667 571.5,672C 575.394,679.121 579.061,686.455 582.5,694C 580.458,698.219 577.125,699.552 572.5,698C 567.033,695.4 561.366,693.4 555.5,692C 549.319,688.743 542.985,685.743 536.5,683C 517.72,676.581 499.053,669.914 480.5,663C 446.183,648.892 411.516,635.559 376.5,623C 372.325,621.384 368.325,619.384 364.5,617C 327.297,617.778 289.963,618.111 252.5,618C 235.568,616.199 220.901,609.532 208.5,598C 205.174,593.707 201.674,589.541 198,585.5C 164.132,527.459 129.799,469.126 95,410.5C 93.629,406.927 92.129,403.427 90.5,400C 90.8333,399.667 91.1667,399.333 91.5,399C 89.9148,394.687 89.0815,390.187 89,385.5C 87.7574,372.291 88.7574,359.291 92,346.5C 95.0224,339.793 98.0224,333.126 101,326.5C 118.625,295.586 134.958,263.919 150,231.5C 166.368,202.765 181.702,173.432 196,143.5C 206.036,129.131 218.87,117.964 234.5,110C 242.826,107.336 251.16,105.17 259.5,103.5 Z M 273.5,130.5 C 298.068,158.906 323.568,186.573 350,213.5C 395.776,263.948 441.61,314.448 487.5,365C 475.333,377.833 463.167,390.667 451,403.5C 450.833,405.167 450.667,406.833 450.5,408.5C 456.437,465.311 462.104,522.145 467.5,579C 467.019,581.374 466.852,583.874 467,586.5C 393.546,513.377 320.046,439.544 246.5,365C 265.193,347.306 283.86,329.639 302.5,312C 292.514,251.569 282.848,191.069 273.5,130.5 Z"
//         />
//       </g>
//     </svg>
//   );
// });