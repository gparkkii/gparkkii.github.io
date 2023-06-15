---
date: "2023-04-29 17:10"
title: '마크다운 markdown 사용법 총정리 - 응용편'
tags: ['markdown', 'github']
summary: 'Git 사용자라면 필수로 이용하게 되는 마크다운. 기본편에 이어 마크다운 문법 응용편에 대해 알아보자.'
thumbnail: '../assets/practical-markdown.png'
update: true
---

# 마크다운 사용법 +
기본편에 이어 쓰는 응용편!


## 2.8. 콜랩스 (Collapsible Sections)
섹션을 확장하거나 축소하는 기능을 추가하여 긴 문서의 가독성을 향상시킨다.

```html
<details>
  <summary>클릭하여 섹션을 펼치거나 접기</summary>

  내용이 여기에 들어갑니다.

</details>
```

<details>
  <summary>클릭하여 섹션을 펼치거나 접기</summary>

  내용이 여기에 들어갑니다.

</details>

## 2.9. 이스케이프 문자 (Escape Characters)
Markdown에서 이스케이프 문자를 사용하여 Markdown 문법의 특수 기호를 텍스트로 표시할 수 있다.

```txt
\* 이 기호는 리스트로 표시되지 않고 그대로 출력됩니다.
\+ 이 기호는 리스트로 표시되지 않고 그대로 출력됩니다.
```

\* 이 기호는 리스트로 표시되지 않고 그대로 출력됩니다.  
\+ 이 기호는 리스트로 표시되지 않고 그대로 출력됩니다.

## 2.10. 체크리스트 (Checklists)
체크리스트를 사용하여 할 일 목록이나 작업 계획을 작성할 수 있다.  
체크리스트는 체크 표시가 없는 항목 `- [ ]`  또는 체크 표시가 있는 항목 `- [x]` 형식으로 작성할 수 있다.

```txt
- [ ] 할 일
- [X] 한 일
```

- [ ] 할 일
- [X] 한 일


## 2.10. 테이블(Table)

<table> 태그로 변환되며 테이블 마크업 작성을 위해 아래와 같은 규칙을 따라야한다.  

- `|` vertical bar로 테이블 열(Col)을 구분한다.  
- 헤더 행을 구분하기 위해서는 `|` 사이 세개 이상의 dash`---`를 작성한다.
- 헤더를 구분하면서 `-`와 함께 `:` 기호를 사용하여 열 안의 정렬을 정의할 수 있다. (아래 예시 참조)
- 양 끝에 있는 `|` 기호는 생략 가능하다.

```txt
| 카테고리 | 마크업 | HTML |
|:---|:---:|---:|
| 우측정렬 | `:---` | text-align: right |
| 가운데 정렬 | `:---:` | text-align: center |
| 왼쪽 정렬 | `---:` | text-align: left |
```

| 카테고리 | 마크업 | HTML |
|:---|:---:|---:|
| 우측정렬 | `:---` | text-align: right |
| 가운데 정렬 | `:---:` | text-align: center |
| 왼쪽 정렬 | `---:` | text-align: left |

## 2.11. 이미지(Image)

이미지는 링크 마크업과 비슷하게 사용된다.

```txt
![Keyword](/path/to/img.jpg)
![Keyword](/path/to/img.jpg "Optional title")
```

<img src="https://avatars.githubusercontent.com/u/71811780?v=4" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="Gparkkii's Zepeto"></img>

사이즈 조절 기능이 없기 때문에 사이즈 조절을 원한다면 ```<img width="" height=""></img>```를 이용한다.

```txt
<img src="/path/to/img.jpg" width="200px" height="200px" title="px(픽셀) 크기 설정" alt="Gparkkii's Zepeto"></img><br/>
<img src="/path/to/img.jpg" width="30%" height="30%" title="px(픽셀) 크기 설정" alt="Gparkkii's Zepeto"></img>
```

<img src="https://avatars.githubusercontent.com/u/71811780?v=4" width="200px" height="200px" title="px(픽셀) 크기 설정" alt="Gparkkii's Zepeto"></img>
<br/>
<img src="https://avatars.githubusercontent.com/u/71811780?v=4" width="20%" height="20%" title="px(픽셀) 크기 설정" alt="Gparkkii's Zepeto"></img>

## 2.12. 코드(Code)

`<pre>`, `<code>`로 변환된다.
``` ` ```(Grave)를 사용하여 쉽게 코드블럭을 생성할 수 있다.

### 2.12.1 인라인 코드 생성

```txt
`inline-code`는 grave를 사용해서 강조할 수 있어요. 
grave를 강조하려면 ``` ` ``` 이렇게 사용해보세요.
```

`inline-code`는 grave 1개를 사용해서 강조할 수 있어요.  
grave를 강조하려면 ``` ` ``` 이렇게 사용해보세요.

### 2.12.2 코드 블럭 생성

탭 들여쓰기를 두번 사용하거나 ``` ` ```를 세번 이상 입력하고 코드 종류도 적어줍니다.

`````txt
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
h3 {
  font-size: 25px;
  color: #757575;
}
```

<!-- 또는  -->
    2개의 탭 들여쓰기 사용

`````

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>

gparkkii === happy coder
```

```css
h3 {
  font-size: 25px;
  color: #757575;
}
```

    2개의 탭 들여쓰기 사용

## 2.13. 코드 하이라이팅

일반적으로는 색상 강조를 위해 코드 블록에 해당하는 언어를 지정해야 한다. 여러 가지 언어를 지원하며, 대표적으로 JavaScript, Python, Java, C++ 등이 있다.

````txt

```python <- 코드 블럭 언어 지정 시 여기에 언어를 작성하면 된다.
def greet(name):
print("Hello, " + name + "!")

greet("World")
```

````

```python
# 코드 하이라이팅 적용 ver
def greet(name):
print("Hello, " + name + "!")

greet("World")
```

# 3. 정리

이미 알고있던 문법들이 대부분이었지만 각 잡고 정리하려다보니 꽤 쓸게 많았다. 마크다운이야 쓰다보면 금방 익숙해지고 손쉽게 사용 가능한 언어이니 한번쯤 이렇게 정리해두는 것도 좋은 선택이었던 것 같다. 다양한 플랫폼에서 지원하고 있기도하고 테크 블로그를 다시 제대로 해보려고 마음먹은 만큼 유용하게 써먹어야겠다.

# P.S

## HTML (Direct HTML Insertion)

마크다운 문서를 조금 더 다채롭게 꾸미고 싶다면 HTML 문법을 그대로 사용할 수 있다.

```
예를 들어 갑자기 <span style="color: hotpink">폰트 색상</>을 바꾸고 싶다던지..
```

예를 들어 갑자기 <span style="color: hotpink">폰트 색상</span>을 바꾸고 싶다던지..  
하지만 간단하게 쓰는게 매력인만큼 html 문법을 자주 사용하지는 않을 것 같다.


## 각주 (Footnotes)

각주를 쓰고 싶을 땐 아래와 같은 방법을 이용한다.

```
이것은 각주를 사용한 문장입니다.[^각주]

[^각주]: 각주 내용입니다. 여기에 추가적인 설명이나 참고 자료를 작성할 수 있습니다.
```

이것은 각주를 사용한 문장입니다.[^각주]

[^각주]: 각주 내용입니다. 여기에 추가적인 설명이나 참고 자료를 작성할 수 있습니다.