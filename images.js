/* Chibi Color Joy — Detailed SVG Library v2 */
/* Inspired by cute chibi coloring pages for kids */

function svgWrap(inner, vb = '0 0 200 200') {
    return `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

const S = '#333'; // stroke color
const W = 'white'; // default fill

const IMAGE_LIBRARY = {
    animals: {
        name: '🐾 Động vật', images: [
            {
                id: 'kitten', name: 'Mèo con dễ thương', svg: svgWrap(`
                <circle cx="60" cy="42" r="15" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-l"/>
                <circle cx="140" cy="42" r="15" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-r"/>
                <circle cx="60" cy="42" r="7" fill="${W}" stroke="${S}" stroke-width="1" data-region="ear-in-l"/>
                <circle cx="140" cy="42" r="7" fill="${W}" stroke="${S}" stroke-width="1" data-region="ear-in-r"/>
                <circle cx="100" cy="80" r="42" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <circle cx="82" cy="72" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="118" cy="72" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="82" cy="72" r="3" fill="${S}"/>
                <circle cx="118" cy="72" r="3" fill="${S}"/>
                <ellipse cx="100" cy="88" rx="5" ry="3.5" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="nose"/>
                <path d="M95 92 Q100 98 105 92" fill="none" stroke="${S}" stroke-width="1.5"/>
                <path d="M60 80 L35 72 M60 84 L33 84 M60 88 L35 96" stroke="${S}" stroke-width="1" fill="none"/>
                <path d="M140 80 L165 72 M140 84 L167 84 M140 88 L165 96" stroke="${S}" stroke-width="1" fill="none"/>
                <ellipse cx="100" cy="148" rx="35" ry="28" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <path d="M70 130 Q50 135 55 155 Q58 148 70 145" fill="${W}" stroke="${S}" stroke-width="2" data-region="paw-l"/>
                <path d="M130 130 Q150 135 145 155 Q142 148 130 145" fill="${W}" stroke="${S}" stroke-width="2" data-region="paw-r"/>
                <ellipse cx="80" cy="172" rx="14" ry="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-l"/>
                <ellipse cx="120" cy="172" rx="14" ry="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-r"/>
                <path d="M135 148 Q155 130 165 145 Q168 155 155 162 Q145 158 138 155" fill="${W}" stroke="${S}" stroke-width="2" data-region="tail"/>
                <path d="M85 100 Q90 105 95 100" fill="none" stroke="${S}" stroke-width="1"/>
                <ellipse cx="100" cy="140" rx="8" ry="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="belly"/>
            `)
            },
            {
                id: 'puppy', name: 'Cún cưng', svg: svgWrap(`
                <ellipse cx="58" cy="50" rx="22" ry="32" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-l" transform="rotate(-15 58 50)"/>
                <ellipse cx="142" cy="50" rx="22" ry="32" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-r" transform="rotate(15 142 50)"/>
                <circle cx="100" cy="82" r="42" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <circle cx="84" cy="75" r="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="116" cy="75" r="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="84" cy="75" r="3" fill="${S}"/>
                <circle cx="116" cy="75" r="3" fill="${S}"/>
                <ellipse cx="100" cy="90" rx="12" ry="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="muzzle"/>
                <ellipse cx="100" cy="87" rx="5" ry="3" fill="${S}"/>
                <path d="M96 96 Q100 102 104 96" fill="none" stroke="${S}" stroke-width="1.5"/>
                <circle cx="76" cy="88" r="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="cheek-l"/>
                <circle cx="124" cy="88" r="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="cheek-r"/>
                <ellipse cx="100" cy="150" rx="36" ry="30" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <ellipse cx="72" cy="160" rx="12" ry="16" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-l"/>
                <ellipse cx="128" cy="160" rx="12" ry="16" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-r"/>
                <path d="M136 140 Q160 125 155 148 Q152 156 140 152" fill="${W}" stroke="${S}" stroke-width="2" data-region="tail"/>
                <ellipse cx="100" cy="145" rx="10" ry="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="collar"/>
                <circle cx="100" cy="152" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="tag"/>
            `)
            },
            {
                id: 'bunny2', name: 'Thỏ trong vườn', svg: svgWrap(`
                <ellipse cx="82" cy="28" rx="10" ry="32" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-l"/>
                <ellipse cx="118" cy="28" rx="10" ry="32" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-r"/>
                <ellipse cx="82" cy="25" rx="5" ry="22" fill="${W}" stroke="${S}" stroke-width="1" data-region="ear-in-l"/>
                <ellipse cx="118" cy="25" rx="5" ry="22" fill="${W}" stroke="${S}" stroke-width="1" data-region="ear-in-r"/>
                <circle cx="100" cy="88" r="35" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <circle cx="86" cy="82" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="114" cy="82" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="86" cy="82" r="2.5" fill="${S}"/>
                <circle cx="114" cy="82" r="2.5" fill="${S}"/>
                <circle cx="100" cy="94" r="3" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="nose"/>
                <circle cx="80" cy="96" r="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="cheek-l"/>
                <circle cx="120" cy="96" r="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="cheek-r"/>
                <ellipse cx="100" cy="148" rx="30" ry="25" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <circle cx="100" cy="172" r="10" fill="${W}" stroke="${S}" stroke-width="2" data-region="tail-puff"/>
                <ellipse cx="78" cy="170" rx="14" ry="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-l"/>
                <ellipse cx="122" cy="170" rx="14" ry="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-r"/>
                <path d="M30 185 Q35 170 45 175 Q50 178 48 185" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="flower1"/>
                <path d="M160 182 Q165 168 172 172 Q178 175 175 185" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="flower2"/>
                <path d="M20 190 L180 190" stroke="#8B8" stroke-width="2" fill="none"/>
                <path d="M15 190 Q20 180 25 190 Q30 180 35 190" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass1"/>
                <path d="M155 190 Q160 178 165 190 Q170 178 175 190" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass2"/>
            `)
            },
            {
                id: 'panda2', name: 'Gấu trúc ăn tre', svg: svgWrap(`
                <circle cx="62" cy="38" r="16" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-l"/>
                <circle cx="138" cy="38" r="16" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-r"/>
                <circle cx="100" cy="78" r="40" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <ellipse cx="80" cy="72" rx="14" ry="10" fill="${W}" stroke="${S}" stroke-width="2" data-region="patch-l"/>
                <ellipse cx="120" cy="72" rx="14" ry="10" fill="${W}" stroke="${S}" stroke-width="2" data-region="patch-r"/>
                <circle cx="80" cy="72" r="4" fill="${S}"/>
                <circle cx="120" cy="72" r="4" fill="${S}"/>
                <circle cx="78" cy="70" r="1.5" fill="${W}"/>
                <circle cx="118" cy="70" r="1.5" fill="${W}"/>
                <ellipse cx="100" cy="88" rx="6" ry="4" fill="${S}"/>
                <path d="M94 94 Q100 100 106 94" fill="none" stroke="${S}" stroke-width="1.5"/>
                <ellipse cx="100" cy="148" rx="38" ry="30" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <ellipse cx="100" cy="145" rx="22" ry="15" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="belly"/>
                <ellipse cx="64" cy="145" rx="12" ry="18" fill="${W}" stroke="${S}" stroke-width="2" data-region="arm-l"/>
                <ellipse cx="136" cy="145" rx="12" ry="18" fill="${W}" stroke="${S}" stroke-width="2" data-region="arm-r"/>
                <ellipse cx="82" cy="175" rx="14" ry="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-l"/>
                <ellipse cx="118" cy="175" rx="14" ry="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-r"/>
                <rect x="142" y="100" width="6" height="80" rx="3" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bamboo1"/>
                <rect x="155" y="90" width="5" height="90" rx="2" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bamboo2"/>
                <path d="M145 110 L155 105 M145 130 L155 125 M145 150 L155 145" stroke="#8B8" stroke-width="1" fill="none"/>
            `)
            },
            {
                id: 'elephant', name: 'Voi con', svg: svgWrap(`
                <path d="M45 70 Q30 50 35 30 Q40 15 55 25 Q60 30 60 50 L60 70Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-l"/>
                <path d="M155 70 Q170 50 165 30 Q160 15 145 25 Q140 30 140 50 L140 70Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="ear-r"/>
                <circle cx="100" cy="75" r="42" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <circle cx="82" cy="65" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="118" cy="65" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="82" cy="65" r="2.5" fill="${S}"/>
                <circle cx="118" cy="65" r="2.5" fill="${S}"/>
                <path d="M100 85 Q95 100 92 120 Q90 130 95 135 Q100 130 105 135 Q110 130 108 120 Q105 100 100 85Z" fill="${W}" stroke="${S}" stroke-width="2" data-region="trunk"/>
                <ellipse cx="100" cy="155" rx="40" ry="28" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <rect x="72" y="170" width="16" height="22" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-fl"/>
                <rect x="112" y="170" width="16" height="22" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-fr"/>
                <path d="M135 155 Q155 150 158 165 Q160 175 150 178" fill="${W}" stroke="${S}" stroke-width="2" data-region="tail"/>
            `)
            },
        ]
    },
    princess: {
        name: '👸 Công chúa', images: [
            {
                id: 'princess2', name: 'Công chúa hoa', svg: svgWrap(`
                <path d="M78 25 L88 5 L100 20 L112 5 L122 25" fill="${W}" stroke="${S}" stroke-width="2" data-region="crown-top"/>
                <rect x="75" y="25" width="50" height="12" rx="3" fill="${W}" stroke="${S}" stroke-width="2" data-region="crown-band"/>
                <circle cx="88" cy="31" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="gem1"/>
                <circle cx="100" cy="31" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="gem2"/>
                <circle cx="112" cy="31" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="gem3"/>
                <path d="M68 50 Q55 35 65 42 Q60 55 68 60" fill="${W}" stroke="${S}" stroke-width="2" data-region="hair-l"/>
                <path d="M132 50 Q145 35 135 42 Q140 55 132 60" fill="${W}" stroke="${S}" stroke-width="2" data-region="hair-r"/>
                <path d="M65 55 Q58 70 62 90" fill="${W}" stroke="${S}" stroke-width="2" data-region="hair-long-l"/>
                <path d="M135 55 Q142 70 138 90" fill="${W}" stroke="${S}" stroke-width="2" data-region="hair-long-r"/>
                <circle cx="100" cy="65" r="28" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="face"/>
                <circle cx="90" cy="60" r="5" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="110" cy="60" r="5" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="90" cy="60" r="2" fill="${S}"/>
                <circle cx="110" cy="60" r="2" fill="${S}"/>
                <path d="M96 72 Q100 76 104 72" fill="none" stroke="${S}" stroke-width="1.5"/>
                <circle cx="80" cy="68" r="4" fill="${W}" stroke="${S}" stroke-width="0.5" data-region="blush-l"/>
                <circle cx="120" cy="68" r="4" fill="${W}" stroke="${S}" stroke-width="0.5" data-region="blush-r"/>
                <path d="M78 92 Q72 100 60 120 L55 190 Q100 200 145 190 L140 120 Q128 100 122 92Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="dress"/>
                <path d="M78 92 Q65 100 55 115" fill="none" stroke="${S}" stroke-width="2" data-region="sleeve-l"/>
                <path d="M122 92 Q135 100 145 115" fill="none" stroke="${S}" stroke-width="2" data-region="sleeve-r"/>
                <path d="M55 190 L145 190" fill="none" stroke="${S}" stroke-width="2"/>
                <circle cx="100" cy="105" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="bow-center"/>
                <path d="M92 105 Q85 98 90 92 Q95 98 92 105Z" fill="${W}" stroke="${S}" stroke-width="1" data-region="bow-l"/>
                <path d="M108 105 Q115 98 110 92 Q105 98 108 105Z" fill="${W}" stroke="${S}" stroke-width="1" data-region="bow-r"/>
                <circle cx="90" cy="140" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star1"/>
                <circle cx="110" cy="155" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star2"/>
                <circle cx="95" cy="170" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star3"/>
            `)
            },
            {
                id: 'unicorn', name: 'Kỳ lân đáng yêu', svg: svgWrap(`
                <path d="M100 5 L95 35 L105 35Z" fill="${W}" stroke="${S}" stroke-width="2" data-region="horn"/>
                <ellipse cx="70" cy="45" rx="14" ry="20" fill="${W}" stroke="${S}" stroke-width="2" data-region="ear-l" transform="rotate(-15 70 45)"/>
                <ellipse cx="130" cy="45" rx="14" ry="20" fill="${W}" stroke="${S}" stroke-width="2" data-region="ear-r" transform="rotate(15 130 45)"/>
                <circle cx="100" cy="72" r="35" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <path d="M68 55 Q55 60 50 72 Q48 80 55 82 Q62 78 68 72" fill="${W}" stroke="${S}" stroke-width="2" data-region="mane1"/>
                <path d="M132 55 Q145 60 150 72 Q152 80 145 82 Q138 78 132 72" fill="${W}" stroke="${S}" stroke-width="2" data-region="mane2"/>
                <circle cx="86" cy="66" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <circle cx="114" cy="66" r="6" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="86" cy="66" r="2.5" fill="${S}"/>
                <circle cx="114" cy="66" r="2.5" fill="${S}"/>
                <ellipse cx="100" cy="82" rx="4" ry="3" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="nose"/>
                <path d="M94 88 Q100 94 106 88" fill="none" stroke="${S}" stroke-width="1.5"/>
                <circle cx="78" cy="78" r="4" fill="${W}" stroke="${S}" stroke-width="0.5" data-region="blush-l"/>
                <circle cx="122" cy="78" r="4" fill="${W}" stroke="${S}" stroke-width="0.5" data-region="blush-r"/>
                <ellipse cx="100" cy="140" rx="42" ry="32" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <rect x="72" y="162" width="16" height="25" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-fl"/>
                <rect x="112" y="162" width="16" height="25" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-fr"/>
                <path d="M140 135 Q160 120 165 140 Q168 155 160 165 Q152 160 145 148" fill="${W}" stroke="${S}" stroke-width="2" data-region="tail"/>
                <circle cx="30" cy="40" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="star-a"/>
                <circle cx="170" cy="30" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star-b"/>
                <circle cx="25" cy="100" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star-c"/>
            `)
            },
        ]
    },
    food: {
        name: '🍕 Đồ ăn', images: [
            {
                id: 'cupcake2', name: 'Cupcake ngọt ngào', svg: svgWrap(`
                <path d="M55 90 Q35 75 55 58 Q65 42 80 48 Q90 30 105 42 Q120 28 132 45 Q150 38 158 58 Q175 75 155 90Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="cream"/>
                <circle cx="95" cy="55" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprinkle1"/>
                <circle cx="115" cy="50" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprinkle2"/>
                <circle cx="78" cy="62" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprinkle3"/>
                <circle cx="130" cy="65" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprinkle4"/>
                <circle cx="105" cy="32" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="cherry"/>
                <line x1="105" y1="25" x2="108" y2="18" stroke="${S}" stroke-width="1.5"/>
                <path d="M60 90 L50 180 L160 180 L150 90Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="cup"/>
                <path d="M62 110 L148 110" stroke="${S}" stroke-width="1" stroke-dasharray="4"/>
                <path d="M65 130 L145 130" stroke="${S}" stroke-width="1" stroke-dasharray="4"/>
                <path d="M68 150 L142 150" stroke="${S}" stroke-width="1" stroke-dasharray="4"/>
                <path d="M71 170 L139 170" stroke="${S}" stroke-width="1" stroke-dasharray="4"/>
                <circle cx="80" cy="82" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="dot1"/>
                <circle cx="130" cy="78" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="dot2"/>
            `)
            },
            {
                id: 'donut', name: 'Donut vui vẻ', svg: svgWrap(`
                <ellipse cx="100" cy="100" rx="55" ry="50" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="base"/>
                <ellipse cx="100" cy="100" rx="20" ry="18" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="hole"/>
                <path d="M48 85 Q55 65 75 58 Q90 52 105 55 Q120 52 135 60 Q150 68 155 85 Q148 90 140 88 Q130 82 120 80 Q110 78 100 80 Q90 78 80 82 Q68 88 55 90Z" fill="${W}" stroke="${S}" stroke-width="2" data-region="icing"/>
                <circle cx="70" cy="75" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk1"/>
                <circle cx="90" cy="68" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk2"/>
                <circle cx="110" cy="66" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk3"/>
                <circle cx="130" cy="72" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk4"/>
                <circle cx="80" cy="60" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk5"/>
                <circle cx="120" cy="62" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="sprk6"/>
                <circle cx="88" cy="90" r="5" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="eye-l"/>
                <circle cx="112" cy="90" r="5" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="eye-r"/>
                <circle cx="88" cy="90" r="2" fill="${S}"/>
                <circle cx="112" cy="90" r="2" fill="${S}"/>
                <path d="M94 102 Q100 108 106 102" fill="none" stroke="${S}" stroke-width="1.5"/>
            `)
            },
        ]
    },
    nature: {
        name: '🌸 Thiên nhiên', images: [
            {
                id: 'sunflower', name: 'Hoa hướng dương', svg: svgWrap(`
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p1" transform="rotate(0 100 75)"/>
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p2" transform="rotate(30 100 75)"/>
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p3" transform="rotate(60 100 75)"/>
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p4" transform="rotate(90 100 75)"/>
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p5" transform="rotate(120 100 75)"/>
                <ellipse cx="100" cy="52" rx="22" ry="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="p6" transform="rotate(150 100 75)"/>
                <circle cx="100" cy="75" r="16" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="center"/>
                <circle cx="94" cy="72" r="3" fill="${S}"/>
                <circle cx="106" cy="72" r="3" fill="${S}"/>
                <path d="M96 80 Q100 84 104 80" fill="none" stroke="${S}" stroke-width="1.5"/>
                <rect x="96" y="92" width="8" height="65" fill="${W}" stroke="${S}" stroke-width="2" data-region="stem"/>
                <ellipse cx="78" cy="125" rx="20" ry="10" fill="${W}" stroke="${S}" stroke-width="2" data-region="leaf-l" transform="rotate(-30 78 125)"/>
                <ellipse cx="122" cy="140" rx="20" ry="10" fill="${W}" stroke="${S}" stroke-width="2" data-region="leaf-r" transform="rotate(30 122 140)"/>
                <path d="M20 190 L180 190" stroke="#8B8" stroke-width="2"/>
                <path d="M10 190 Q18 178 26 190 Q34 178 42 190" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass-l"/>
                <path d="M150 190 Q158 178 166 190 Q174 178 182 190" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass-r"/>
                <circle cx="40" cy="25" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="bug"/>
                <path d="M160 15 L165 18 M165 15 L160 18" stroke="${S}" stroke-width="1"/>
            `)
            },
            {
                id: 'butterfly', name: 'Bướm xinh', svg: svgWrap(`
                <path d="M100 55 Q65 15 30 45 Q15 65 40 85 Q60 95 85 80 Q95 72 100 65Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wing-tl"/>
                <path d="M100 55 Q135 15 170 45 Q185 65 160 85 Q140 95 115 80 Q105 72 100 65Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wing-tr"/>
                <path d="M100 85 Q70 80 45 100 Q30 120 50 130 Q70 135 90 115 Q97 100 100 90Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wing-bl"/>
                <path d="M100 85 Q130 80 155 100 Q170 120 150 130 Q130 135 110 115 Q103 100 100 90Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wing-br"/>
                <circle cx="55" cy="50" r="8" fill="${W}" stroke="${S}" stroke-width="1" data-region="spot1"/>
                <circle cx="145" cy="50" r="8" fill="${W}" stroke="${S}" stroke-width="1" data-region="spot2"/>
                <circle cx="60" cy="108" r="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="spot3"/>
                <circle cx="140" cy="108" r="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="spot4"/>
                <ellipse cx="100" cy="90" rx="6" ry="22" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <circle cx="100" cy="62" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="head"/>
                <circle cx="96" cy="60" r="2" fill="${S}"/>
                <circle cx="104" cy="60" r="2" fill="${S}"/>
                <path d="M96 50 Q85 30 80 25" stroke="${S}" stroke-width="1.5" fill="none"/>
                <path d="M104 50 Q115 30 120 25" stroke="${S}" stroke-width="1.5" fill="none"/>
                <circle cx="80" cy="25" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="antenna-l"/>
                <circle cx="120" cy="25" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="antenna-r"/>
                <path d="M30 160 Q50 150 55 165 Q60 155 80 158" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="flower-bg1"/>
                <path d="M130 165 Q145 155 155 168 Q162 158 175 162" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="flower-bg2"/>
            `)
            },
        ]
    },
    vehicle: {
        name: '🚗 Xe cộ', images: [
            {
                id: 'car2', name: 'Xe đua', svg: svgWrap(`
                <path d="M30 85 L55 50 L145 50 L170 85Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="roof"/>
                <rect x="20" y="85" width="160" height="38" rx="8" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <rect x="62" y="55" width="32" height="28" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="window-l"/>
                <rect x="100" y="55" width="38" height="28" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="window-r"/>
                <circle cx="60" cy="126" r="18" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wheel-l"/>
                <circle cx="140" cy="126" r="18" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wheel-r"/>
                <circle cx="60" cy="126" r="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="hub-l"/>
                <circle cx="140" cy="126" r="7" fill="${W}" stroke="${S}" stroke-width="2" data-region="hub-r"/>
                <rect x="12" y="92" width="18" height="10" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="light-l"/>
                <rect x="170" y="92" width="18" height="10" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="light-r"/>
                <rect x="85" y="95" width="30" height="4" rx="2" fill="${W}" stroke="${S}" stroke-width="1" data-region="stripe"/>
                <line x1="5" y1="148" x2="195" y2="148" stroke="${S}" stroke-width="2"/>
            `, '0 0 200 155')
            },
        ]
    },
    space: {
        name: '🚀 Vũ trụ', images: [
            {
                id: 'rocket2', name: 'Tên lửa bay', svg: svgWrap(`
                <path d="M100 8 Q118 35 120 75 L80 75 Q82 35 100 8Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="nose"/>
                <rect x="80" y="75" width="40" height="65" rx="4" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <circle cx="100" cy="98" r="14" fill="${W}" stroke="${S}" stroke-width="2" data-region="window"/>
                <circle cx="100" cy="98" r="6" fill="${W}" stroke="${S}" stroke-width="1" data-region="window-inner"/>
                <rect x="85" y="118" width="30" height="8" rx="3" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="band"/>
                <path d="M80 110 L52 148 L80 140Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="fin-l"/>
                <path d="M120 110 L148 148 L120 140Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="fin-r"/>
                <path d="M85 140 Q90 168 100 180 Q110 168 115 140Z" fill="${W}" stroke="${S}" stroke-width="2" data-region="flame1"/>
                <path d="M90 142 Q95 172 100 188 Q105 172 110 142Z" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="flame2"/>
                <circle cx="35" cy="30" r="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="star1"/>
                <circle cx="165" cy="45" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="star2"/>
                <circle cx="30" cy="120" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star3"/>
                <circle cx="170" cy="100" r="4" fill="${W}" stroke="${S}" stroke-width="1" data-region="star4"/>
                <circle cx="160" cy="160" r="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="star5"/>
                <circle cx="45" cy="170" r="3" fill="${W}" stroke="${S}" stroke-width="1" data-region="star6"/>
            `)
            },
        ]
    },
    house: {
        name: '🏠 Phong cảnh', images: [
            {
                id: 'house2', name: 'Ngôi nhà dễ thương', svg: svgWrap(`
                <circle cx="155" cy="28" r="18" fill="${W}" stroke="${S}" stroke-width="2" data-region="sun"/>
                <path d="M15 100 L100 35 L185 100Z" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="roof"/>
                <rect x="35" y="100" width="130" height="75" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="wall"/>
                <rect x="80" y="135" width="30" height="40" rx="3" fill="${W}" stroke="${S}" stroke-width="2" data-region="door"/>
                <circle cx="104" cy="158" r="3" fill="${S}"/>
                <rect x="48" y="110" width="24" height="22" rx="2" fill="${W}" stroke="${S}" stroke-width="2" data-region="window-l"/>
                <rect x="128" y="110" width="24" height="22" rx="2" fill="${W}" stroke="${S}" stroke-width="2" data-region="window-r"/>
                <line x1="60" y1="110" x2="60" y2="132" stroke="${S}" stroke-width="1"/>
                <line x1="48" y1="121" x2="72" y2="121" stroke="${S}" stroke-width="1"/>
                <line x1="140" y1="110" x2="140" y2="132" stroke="${S}" stroke-width="1"/>
                <line x1="128" y1="121" x2="152" y2="121" stroke="${S}" stroke-width="1"/>
                <rect x="85" y="55" width="14" height="30" fill="${W}" stroke="${S}" stroke-width="2" data-region="chimney"/>
                <path d="M82 55 Q92 42 102 55" fill="${W}" stroke="${S}" stroke-width="1" data-region="smoke"/>
                <line x1="10" y1="175" x2="190" y2="175" stroke="${S}" stroke-width="2"/>
                <path d="M15 100 Q22 90 28 100" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bush-l"/>
                <path d="M25 100 Q32 88 38 100" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bush-l2"/>
                <path d="M158 100 Q165 88 172 100" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bush-r"/>
                <path d="M168 100 Q175 90 182 100" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="bush-r2"/>
                <path d="M20 175 Q25 162 30 175 Q35 166 42 175" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass1"/>
                <path d="M150 175 Q155 164 160 175 Q166 164 172 175" fill="${W}" stroke="#8B8" stroke-width="1.5" data-region="grass2"/>
            `)
            },
        ]
    },
    hero: {
        name: '🦸 Nhân vật', images: [
            {
                id: 'robot2', name: 'Robot đáng yêu', svg: svgWrap(`
                <line x1="100" y1="8" x2="100" y2="25" stroke="${S}" stroke-width="3"/>
                <circle cx="100" cy="8" r="5" fill="${W}" stroke="${S}" stroke-width="2" data-region="antenna"/>
                <rect x="68" y="25" width="64" height="48" rx="10" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="head"/>
                <rect x="78" y="38" width="15" height="12" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-l"/>
                <rect x="107" y="38" width="15" height="12" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="eye-r"/>
                <circle cx="85" cy="44" r="3" fill="${S}"/>
                <circle cx="115" cy="44" r="3" fill="${S}"/>
                <rect x="88" y="58" width="24" height="6" rx="3" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="mouth"/>
                <rect x="72" y="78" width="56" height="62" rx="8" fill="${W}" stroke="${S}" stroke-width="2.5" data-region="body"/>
                <circle cx="100" cy="100" r="12" fill="${W}" stroke="${S}" stroke-width="2" data-region="chest-light"/>
                <circle cx="100" cy="100" r="5" fill="${W}" stroke="${S}" stroke-width="1" data-region="chest-inner"/>
                <rect x="85" y="120" width="30" height="8" rx="3" fill="${W}" stroke="${S}" stroke-width="1.5" data-region="belt"/>
                <rect x="50" y="82" width="18" height="42" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="arm-l"/>
                <rect x="132" y="82" width="18" height="42" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="arm-r"/>
                <circle cx="59" cy="128" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="hand-l"/>
                <circle cx="141" cy="128" r="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="hand-r"/>
                <rect x="78" y="140" width="18" height="38" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-l"/>
                <rect x="104" y="140" width="18" height="38" rx="8" fill="${W}" stroke="${S}" stroke-width="2" data-region="leg-r"/>
                <rect x="72" y="176" width="26" height="10" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-l"/>
                <rect x="102" y="176" width="26" height="10" rx="4" fill="${W}" stroke="${S}" stroke-width="2" data-region="foot-r"/>
                <circle cx="88" cy="92" r="2" fill="${W}" stroke="${S}" stroke-width="1" data-region="button1"/>
                <circle cx="112" cy="92" r="2" fill="${W}" stroke="${S}" stroke-width="1" data-region="button2"/>
            `)
            },
        ]
    },
};

function getTotalImages() {
    return Object.values(IMAGE_LIBRARY).reduce((sum, cat) => sum + cat.images.length, 0);
}
