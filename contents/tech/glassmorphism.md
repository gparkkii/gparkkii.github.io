---
date: "2023-05-16 20:52"
title: 'CSS로 글래스모피즘, 뉴모피즘, 클레이모피즘 구현하기'
tags: ['css', 'ui/ux']
summary: 'UI/UX 트렌드 000피즘. CSS로 쉽게 구현해보자'
thumbnail: '../assets/glassmorphism.png'
update: true
---
글래스모피즘, 뉴모피즘, 클레이모피즘은 많은 웹,앱 서비스에서 사용되고있는 디자인 스타일이다. 트렌디한 스타일의 구현이 들어갈 경우 서비스는 당연히 시각적으로 돋보이고 사용자 경험 측면에서도 좋은 평가를 얻게된다.

개인 프로젝트를 하며 응용해보게 된 UI/UX 트렌드 글래스모피즘. 최신 트렌드라기엔 나온지 좀 된 스타일이기도 하고 Generator가 있기 때문에 3초면 끝나는 구현이지만 복붙으로 끝나면 남는게 없다. 구현 원리에 대해 알아보고 CSS를 통해 자유롭게 그래픽 효과를 조작하는 능력을 키워보자.

# 글래스모피즘 (Glassmorphism)
<a href="https://hype4.academy/tools/glassmorphism-generator" target='_blank'>
    <img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/1f7e5055-318e-4ec7-9f73-6a6cb35bcad8" title="glassmorphism" alt="glassmorphism"></img>
</a>

글래스모피즘은 이름 처럼 투명한 유리형태의 시각적 요소를 강조한다. 배경이 투명하고 blur처리가 들어가기 때문에 배경 뒤의 요소들이 흐릿하게 보이게 된다. 대표적으로 Apple이 글래스모피즘 디자인을 사용하게 되면서 유행이 시작된 것 같다. ios7에 처음 도입이 되었으니 2013년도 부터 계속되어온 디자인이었다..

글래스모피즘을 구현하기 위해서는 CSS로 네가지 그래픽 효과 처리를 해줘야한다. 

1. **투명 효과** : **rgba()** 함수를 사용하여 배경을 투명하게 해준다.
2. **블러 효과** : CSS의 **backdrop-filter** 속성을 사용하여 요소의 배경에 블러 효과를 적용한다. 요소의 배경이 흐릿하게 보이며 요소 뒤에 위치한 컴포넌트들 또한 흐릿하게 비치게 된다.
3. **그림자 효과** : CSS의 **box-shadow** 속성으로 요소에 그림자 효과를 준다. 
4. **경계선 강조** : CSS의 **border** 속성과 투명한 색상을 사용하여 요소의 경계선을 생성해준다. 요소의 경계를 뚜렷하게 해줘야 유리의 느낌이 살 수 있다.

```css
background: rgba( 255, 255, 255, 0.15 );
backdrop-filter: blur( 4.5px );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
border: 1px solid rgba( 255, 255, 255, 0.18 );
```

디자인이 생긴거에 비해 구현이 간단했다. CSS 속성에 대해 잘 알고만 있어도 UI/UX를 효과적으로 적용할 수 있는 것 같다.
[글래스모피즘 제너레이터](https://hype4.academy/tools/glassmorphism-generator) 를 이용하면 글래스모피즘 스타일을 육안으로 확인하고 CSS 코드까지 바로 얻을 수 있다.

# 뉴모피즘(Neumorphism) & 클레이모피즘(Claymorphism)
<a href="https://hype4.academy/tools/claymorphism-generator" target='_blank'>
    <img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/dc38d5a8-cbbf-4d32-a7a8-91af45fd57c3" title="neumorphism_claymorphism" alt="neumorphism_claymorphism"></img>
</a>
뉴모피즘은 유행이 지난 디자인 스타일인 것 같고.. 클레이모피즘은 제너레이터 사이트에서 처음봤는데 3D처럼 입체적인 느낌이 나는게 구름처럼 몽실몽실하기도하고 굉장히 귀여운 컴포넌트였다.

두 가지 디자인 스타일은 `box-shadow`를 잘 활용해야한다.

## 뉴모피즘 CSS
[뉴모피즘 제너레이터](https://hype4.academy/tools/neumorphism-generator)  
기본 박스를 구현하는 것까지는 똑같다. 그림자 효과를 대비되게 주면 끝. 
```css
border-radius: 50px;
background: #D1D8EC;
box-shadow: 12px 12px 29px #b2b8c9, -12px -12px 29px #f0f8ff;
```

## 클레이모피즘 CSS
[클레이모피즘 제너레이터](https://hype4.academy/tools/claymorphism-generator)  
클레이모피즘은 매트한 텍스처와 부드러운 곡선이 특징인 스타일로 점토같은 느낌을 연상시킨다하여 클레이모피즘이라고한다.
클레이모피즘은 box-shadow가 뉴모피즘보다 더 디테일하게 적용된다. 입체감이 있는 디자인이다보니 그림자를 내외부로 활용했다. 또 border-radius를 이용해서 동글동글한 느낌을 살려주는게 핵심이라고한다.

```css
background-color: rgba(255, 255, 255, 0.6);
border-radius: 26px;
backdrop-filter: blur(6px);
box-shadow: 0px 35px 68px 0px rgba(145, 192, 255, 0.5), inset 0px -8px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
```

# 정리
이렇게 세가지 디자인 스타일에 대해 그리고 구현 방법에 대해 간략히 알아보았다. 이마저도 완전 최신 디자인 스타일은 아니지만 여전히 많이 쓰이고 있고 효과적인 UI/UX를 제공하는데 도움 될 것 같다. 특히 클레이모피즘 같은 경우는 `box-shadow`를 조금만 활용해서 3d 느낌을 줄 수 있다보니 밋밋한 카드, 버튼 디자인에 활용하기도 좋아보인다.

요새는 레트로, 카툰 디자인이 유행이라고 하는데 아직 상용화된 서비스를 많이 못봐서 그런지 전혀 모르고있었다. 최신 트렌드 따라가기 참 힘들군.. 프론트엔드 개발자로서 미래를 대비하기 위해 디자인 트렌드를 지속적으로 관찰하고 적용해보도록 노력해야겠다. 화이팅