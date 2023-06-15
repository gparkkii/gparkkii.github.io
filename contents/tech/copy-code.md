---
date: "2023-05-22 15:17"
title: 'Gatsby 블로그 코드블록 꾸미기'
tags: ['gatsby', 'tech-blog']
summary: '테크블로그의 핵심 코드블록에 복사 기능을 추가하고 코드 타이틀을 표시하여 기능을 개선해봅시다.'
thumbnail: '../assets/code-block.png'
update: true
---

Tech blog를 돌아다니다보면 다양한 코드블록들을 볼 수 있다. 천편일률적이긴 하지만 다들 개성있는 코드블록으로 아이덴티티를 드러내고있다. 그 중에서도 탐났던게 vscode를 그대로 가져다놓은듯한 코드블록. `::after`, `::before`를 써가며 CSS로 구현해놨지만 코드 복사 기능이 없는게 너무 아쉬웠다. 이참에 코드 복사 기능과 코드블록의 타이틀 표시 기능을 추가해보고자 한다.

# 코드 블록 개선
markdown 관련 gatsby plugin이 잘 나와있어서 시간대비 라이브러리를 사용하는것이 여러모로 효율적일것 같았다.
사용한 라이브러리는 `gatsby-remark-code-buttons` 와 `gatsby-remark-code-titles` 두가지다. 


## 코드 복사 기능 추가

### 1. **Gatsby 플러그인 설치**

- `gatsby-remark-code-buttons` 플러그인을 설치한다.

     ```bash
     npm install gatsby-remark-code-buttons 
     # 또는 
     yarn add gatsby-remark-code-buttons
     ```

### 2. **Gatsby config 파일 수정**

- Gatsby 프로젝트의 `gatsby-config.js` 파일을 열고, `gatsby-transformer-remark` 플러그인 구성에 `gatsby-remark-code-buttons` 플러그인을 추가한다.

     ```javascript
     module.exports = {
       // ...
       plugins: [
         // ...
         {
           resolve: 'gatsby-transformer-remark',
           options: {
             plugins: [
               // ...
               'gatsby-remark-code-buttons'
             ]
           }
         }
       ]
     }
     ```

이렇게하면 따로 설정할 것 없이 Gatsby 블로그에 코드 블록 Copy 버튼이 손쉽게 추가된다. 라이브러리를 이용하니 굉장히 간편하게 복사기능이 완성됐다.

<figure align="center">
<img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/de6a1ba2-aef3-41e5-b22f-97c382a2cf0b" alt="gatsby-remark-code-buttons"></img>
<figcaption>못생긴 copy 버튼</figcaption>
</figure>

하지만 코드블록 copy icon 모양이 너무 못생겨서 맘에 들지않아서 바로 개발자도구 켜서 코드 구조부터 확인해보았다. 스타일이 맘에 들지 않을 경우 관련 엘리먼트 클래스 이름을 통해 직접 **css customizing** 할 수 있다. `gatsby-config` 파일에서 **plugin option**을 통한 설정도 가능하다.

<details>
  <summary> <strong>플러그인 옵션 설정</strong> </summary>

  [플러그인 페이지 참고](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/)

  <figure align="center">
  <img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/fcf3af56-fea8-4f28-9b4b-1a007ad863af" alt="gatsby-remark-code-buttons-options"></img>
  <figcaption>gatsby-remark-code-buttons options</figcaption>
  </figure>

</details>

## 코드 타이틀 표시

코드 타이틀 또한 gatsby 라이브러리를 통해 쉽게 구현 할 수 있다.

### 1. **Gatsby 플러그인 설치**

- `gatsby-remark-code-titles` 플러그인을 설치한다.

     ```bash
     npm install gatsby-remark-code-titles 
     # 또는 
     yarn add gatsby-remark-code-titles
     ```

### 2. **Gatsby config 파일 수정**

- Gatsby 프로젝트의 `gatsby-config.js` 파일을 열고, `gatsby-transformer-remark` 플러그인 구성에 `gatsby-remark-code-titles` 플러그인을 추가한다.

     ```javascript
     module.exports = {
       // ...
       plugins: [
          {
              resolve: 'gatsby-transformer-remark',
              options: {
                plugins: [
                    {
                    resolve: 'gatsby-remark-code-titles',
                    options: {
                        className: 'your-custom-class-name',
                    },
                    }, // IMPORTANT: this must be ahead of other plugins that use code blocks
                ],
              },
          },
        ]
     }
     ```

### 3. **CSS Customization**

config 파일에 지정한 classname을 이용해 css를 커스터마이징 해주면 끝. [라이브러리 문서](https://www.gatsbyjs.com/plugins/gatsby-remark-code-buttons/)를 보면 기본 스타일링이 나와있다.

<details>
  <summary> <strong>CSS Styling</strong> </summary>

  <figure align="center">
  <img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/3703950d-dafe-4756-9549-0cb85534a4e6" alt="gatsby-remark-code-titles-options"></img>
  <figcaption>gatsby-remark-code-titles css</figcaption>
  </figure>

</details>

### 4. **마크다운에 타이틀 적용**

````txt
```javascript:title=파일명.js
alert('파일명을 추가했습니다.');
```js
````

```javascript:title=파일명.js
alert('파일명을 추가했습니다.');
```

# 마무리

<figure align="center">
  <img class="responsive-image" src="https://github.com/gparkkii/gparkkii.github.io/assets/71811780/c435cb65-3d75-40b6-81ca-0be3611f38f2" alt="code-block-before-after"></img>
  <figcaption>코드 블록 Before & After</figcaption>
</figure>

이제야 사용성이 좋아진 코드블록.