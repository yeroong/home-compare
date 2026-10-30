/* 집어봐 브랜드 에셋 — 로고 마크·가로형 로고·마스코트를 SVG 문자열로 제공.
   브라우저에서는 window.BRAND, node 에서는 module.exports 로 쓴다. 색은 brand.colors 에서 한 번에 바꾼다. */
(function(root){
  const C={deep:'#117A72',mint:'#42C7B6',mintLight:'#DDF5F1',coral:'#FF745E',coralLight:'#FFE9E4',skin:'#F7CDB0',skinDark:'#EDB08E',ink:'#26343B',paper:'#FFFFFF',cream:'#FFF8F3',blush:'#FFB7AA',shadow:'rgba(38,52,59,.12)'};

  /* 로고 마크: 엄지·검지로 작은 집을 집어 올리는 손 (viewBox 0 0 120 120) */
  function mark(opt){opt=opt||{};const size=opt.size||40;const dark=!!opt.dark;const cuff=dark?C.mint:C.deep;const spark=dark?C.mint:C.deep;
    return `<svg class="logo-mark" width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="58" cy="104" rx="26" ry="5" fill="${C.shadow}"/>
  <!-- 집 -->
  <rect x="38" y="62" width="42" height="36" rx="9" fill="${C.cream}" stroke="#F1D9CC" stroke-width="1.5"/>
  <path d="M34 68 L59 42 L84 68" fill="${C.coral}" stroke="${C.coral}" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M34 68 L59 42 L84 68 Z" fill="${C.coral}"/>
  <rect x="52" y="74" width="14" height="14" rx="3.5" fill="${C.mint}"/>
  <path d="M59 74 v14 M52 81 h14" stroke="${C.cream}" stroke-width="2"/>
  <!-- 손: 소매 + 손바닥 + 두 손가락 -->
  <g transform="rotate(-28 92 30)">
    <rect x="96" y="4" width="26" height="34" rx="9" fill="${cuff}"/>
    <ellipse cx="88" cy="32" rx="22" ry="19" fill="${C.skin}"/>
  </g>
  <path d="M84 20 Q70 28 62 38" stroke="${C.skin}" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M96 44 Q82 44 66 46" stroke="${C.skin}" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M84 20 Q70 28 62 38" stroke="${C.skinDark}" stroke-width="2" stroke-linecap="round" fill="none" opacity=".35" transform="translate(0 6)"/>
  <!-- 반짝 -->
  <path d="M28 40 L20 34 M31 32 L27 23 M24 48 L15 47" stroke="${spark}" stroke-width="3.5" stroke-linecap="round"/>
</svg>`;}

  /* 가로형 로고: 마크 + 워드마크 (HTML 조각) */
  function logo(opt){opt=opt||{};const h=opt.height||28;const dark=!!opt.dark;const g=dark?C.mint:C.deep;
    return `<span class="logo" style="display:inline-flex;align-items:center;gap:6px;line-height:1">${mark({size:Math.round(h*1.25),dark})}<span class="wordmark" style="font-weight:900;font-size:${h}px;letter-spacing:-.04em;display:inline-flex"><span style="color:${g}">집</span><span style="color:${C.coral}">어</span><span style="color:${g}">봐</span></span></span>`;}

  /* 가로형 로고 SVG 파일용 */
  function logoSvg(opt){opt=opt||{};const dark=!!opt.dark;const g=dark?C.mint:C.deep;const bg=dark?C.ink:'none';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 300 100">
  <rect width="300" height="100" fill="${bg}"/>
  <g transform="translate(6 2) scale(0.8)">${mark({size:120,dark}).replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
  <text x="112" y="68" font-family="Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-weight="900" font-size="54" letter-spacing="-2"><tspan fill="${g}">집</tspan><tspan fill="${C.coral}">어</tspan><tspan fill="${g}">봐</tspan></text>
  <text x="114" y="90" font-family="Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-weight="600" font-size="14" fill="${dark?'#CFE8E3':'#75838A'}" letter-spacing="3">좋은 집, 콕 집어봐!</text>
</svg>`;}

  /* 마스코트: 민트 모자(집 심벌)를 쓴 둥근 캐릭터 (viewBox 0 0 200 200)
     kind: basic(집 들고) · search(돋보기) · love(하트) · think(물음표) · point(가리키기) · wink */
  function mascot(kind,size){kind=kind||'basic';size=size||140;
    const eyes=(kind==='love'||kind==='wink')
      ?`<path d="M70 118 q9 -10 18 0" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>${kind==='wink'?`<ellipse cx="124" cy="118" rx="7" ry="9" fill="${C.ink}"/><circle cx="127" cy="114" r="2.5" fill="#fff"/>`:`<path d="M112 118 q9 -10 18 0" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>`}`
      :`<ellipse cx="78" cy="118" rx="7" ry="9" fill="${C.ink}"/><ellipse cx="124" cy="118" rx="7" ry="9" fill="${C.ink}"/><circle cx="81" cy="114" r="2.5" fill="#fff"/><circle cx="127" cy="114" r="2.5" fill="#fff"/>`;
    const mouth=kind==='think'?`<path d="M94 142 q8 -4 16 0" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
      :kind==='love'?`<path d="M90 138 q11 12 22 0" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`
      :`<path d="M92 139 q9 8 18 0" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`;
    const house=`<g transform="translate(138 128) scale(.42)"><rect x="18" y="40" width="54" height="42" rx="8" fill="${C.cream}" stroke="#F1D9CC" stroke-width="3"/><path d="M12 46 L45 14 L78 46 Z" fill="${C.coral}" stroke="${C.coral}" stroke-width="10" stroke-linejoin="round"/><rect x="36" y="54" width="18" height="18" rx="4" fill="${C.mint}"/></g>`;
    const extra={
      basic:house+`<ellipse cx="150" cy="152" rx="14" ry="10" fill="${C.paper}" stroke="#E9EEF0" stroke-width="2"/>`,
      search:`<g transform="translate(140 120) rotate(20)"><circle cx="0" cy="0" r="16" fill="#E8F7F4" stroke="${C.deep}" stroke-width="6"/><path d="M12 12 L30 30" stroke="${C.deep}" stroke-width="8" stroke-linecap="round"/></g>`,
      love:`<path d="M156 88 c-6 -10 -20 -4 -14 8 c3 6 14 14 14 14 s11 -8 14 -14 c6 -12 -8 -18 -14 -8z" fill="${C.coral}"/><path d="M176 62 c-3 -6 -11 -2 -8 5 c2 3 8 8 8 8 s6 -5 8 -8 c3 -7 -5 -11 -8 -5z" fill="${C.coral}" opacity=".7"/>`+house,
      think:`<text x="156" y="86" font-family="Pretendard,sans-serif" font-weight="900" font-size="40" fill="${C.deep}">?</text><ellipse cx="54" cy="150" rx="14" ry="10" fill="${C.paper}" stroke="#E9EEF0" stroke-width="2"/>`,
      point:`<ellipse cx="156" cy="112" rx="16" ry="12" fill="${C.paper}" stroke="#E9EEF0" stroke-width="2" transform="rotate(-40 156 112)"/><path d="M26 92 L18 84 M30 84 L26 74" stroke="${C.deep}" stroke-width="4" stroke-linecap="round"/>`,
      wink:house,
    }[kind]||house;
    return `<svg class="mascot" width="${size}" height="${size}" viewBox="0 0 200 200" aria-hidden="true">
  <ellipse cx="100" cy="186" rx="52" ry="7" fill="${C.shadow}"/>
  <!-- 몸 -->
  <path d="M40 128 C40 80 160 80 160 128 C160 162 136 182 100 182 C64 182 40 162 40 128 Z" fill="${C.paper}" stroke="#E9EEF0" stroke-width="2.5"/>
  <ellipse cx="46" cy="150" rx="14" ry="10" fill="${C.paper}" stroke="#E9EEF0" stroke-width="2"/>
  <!-- 모자 -->
  <path d="M38 96 C38 44 162 44 162 96 Z" fill="${C.mint}"/>
  <path d="M30 98 C30 90 170 90 170 98 C170 106 30 106 30 98 Z" fill="#2FB3A2"/>
  <g transform="translate(100 70)"><path d="M-14 4 L0 -11 L14 4 Z" fill="#fff"/><rect x="-9" y="2" width="18" height="12" rx="2.5" fill="#fff"/><rect x="-3" y="7" width="6" height="7" rx="1.5" fill="${C.mint}"/></g>
  ${eyes}
  <circle cx="62" cy="134" r="7" fill="${C.blush}" opacity=".85"/><circle cx="138" cy="134" r="7" fill="${C.blush}" opacity=".85"/>
  ${mouth}
  ${extra}
</svg>`;}

  const BRAND={colors:C,mark,logo,logoSvg,mascot,name:'집어봐',slogan:'좋은 집, 콕 집어봐!'};
  if(typeof module!=='undefined'&&module.exports)module.exports=BRAND;else root.BRAND=BRAND;
})(typeof window!=='undefined'?window:globalThis);
