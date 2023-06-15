---
date: "2022-04-28 16:20"
title: '마크다운 markdown 사용법 총정리 - 기본편'
tags: ['markdown', 'github']
summary: 'Git 사용자라면 필수로 이용하게 되는 마크다운. 테크 블로그에서도, 기타 문서 작성에도 자주 이용되는 마크다운 문법에 대해 정리해보자.'
thumbnail: '../assets/markdown.png'
update: true
---

깃헙 이용자라면 Repository에 관한 정보를 기록하는 README.md 파일로 또는 대중적인 기록관리 소프트웨어 Notion, 개발자들을 위한 블로그 서비스 Velog 등을 통해 마크다운을 접해본 사용자들이 많을 것이다. 이렇게 자주 접하게 되는 마크다운이지만 기본적인 문법 외에 자세하게 알고있지는 못했다.
테크 블로그를 개설한 기념으로 마크다운에 대해 알아보고 사용법에 대해 총정리 해보려한다.

# 1. 마크다운에 관하여

## 1.1. 마크다운이란?

[**Markdown**](https://www.markdownguide.org/getting-started/)은 텍스트 기반의 마크업 언어로 문법이 쉽고 간단한 것이 특징이며 HTML과 리치 텍스트 등의 서식문서로 쉽게 변환이 가능하다. 특수기호와 문자 등을 이용한 문법으로 웹에서도 보다 빠르고 간단하게 컨텐츠를 작성할 수 있고 가독성이 좋다는 장점이 부각되면서 많은 곳에서 마크다운을 사용하고 있다.

## 1.2. 마크다운의 장-단점

### 1.2.1. 장점

 1. 간단하고 쉬운 문법.
 2. 확장성이 좋다. (다양한 형태로 변환이 가능하고 대부분의 환경에서 이동, 복사, 편집 등의 관리가 용이)
 3. 텍스트로 저장되기 때문에 용량이 적다.
 4. 텍스트로 저장되기 때문에 검색이 쉽다.
 5. 지원하는 프로그램과 플랫폼이 다양하다. (Github, Notion, Velog, Slack 등)

### 1.2.2. 단점

 1. 표준이 없고 도구에 따라서 변환방식이나 생성물이 다르다.
 2. 뷰어의 속도가 늘리다. (실시간 작업하며 확인하기에는 딜레이가 조금 있다.)
 3. 모든 HTML 마크업을 대신하지 못한다.

****

# 2. 마크다운 사용법(syntax)
>
> 마크다운만으로 표현이 부족한 부분은 HTML 태그를 활용 가능하다.

## 2.1. 제목(Header)

`<h1>` 부터 `<h6>` 까지 `#`을 이용하여 제목을 나타낼 수 있다.

### 2.1.1 제목 사용법

```txt
# h1 제목 1
## h2 제목 2
### h3 제목 3
#### h4 제목 4
##### h5 제목 5
###### h6 제목 6
```

<h1 style="margin-top: 12px;margin-bottom:0">h1 제목 1</h1>
<h2 style="margin:0">h2 제목 2</h2>
<h3 style="margin:0">h3 제목 3</h3>
<h4>h4 제목 4</h4>
<h5>h5 제목 5</h5>
<h6>h6 제목 6</h6>

<br/>

### 2.1.2 큰제목, 부제목

제목 1과 제목 2를 다음과 같이 사용할 수도 있다.
<br/>
<br/>

### ❏ 큰제목: 문서 제목

  ```txt
  H1: 문서 제목
  =============
  ```

  <h1 style="margin-top: 12px;">H1: 문서 제목</h1>

<br/>

### ❏ 작은제목: 문서 부제목
  
  ```txt
  H2: 문서 부제목
  -------------
  ```

  <h2 style="margin-top:0">H2: 문서 부제목</h2>

<br/>

## 2.2. 인용문(BlockQuote)

```>``` 블럭인용 문자를 사용한다.

### 2.2.1 Single BlockQuote

```txt
> This is a single blockqute.
```

> This is a single blockqute.

### 2.2.1 Nested BlockQuote

```txt
> This is nested blockqute.
> > This is nested blockqute.
> > > This is nested blockqute.
```

> This is nested blockqute.
> > This is nested blockqute.
> > > This is nested blockqute.

이 안에서는 다른 마크다운 요소를 포함할 수 있다.

> ### This is a H3
>
> - List
>
> ```
> code
> ```

<br/>

## 2.3. 목록(List)

`<ol>`, `<ul>` 태그를 나타낸다.

### 2.3.1 순서있는 목록(ol)

순서있는 목록은 숫자와 점을 사용한다.

```txt
1. 첫번째
2. 두번째
3. 세번째
```

1. 첫번째
2. 두번째
3. 세번째

### 2.3.2  순서없는 목록(ul)

글머리 기호: `*`, `+`, `-` 를 지원한다.

```txt
* 별표
  + 더하기
    - 빼기
```

- 별표
  - 더하기
    - 빼기

### 2.3.3 ol, ul 섞어쓰기

`ol` 안에 sub list를 사용하기 위해선 탭을 두번 눌러야한다.  
`ul` 안에 sub list는 탭 한번으로 가능해보인다.

```txt
1. ordered list
    - unordered list
2. ordered list
    1. sub ordered list
    2. sub ordered list
- 순서가 필요하지 않은 목록에 사용 가능한 기호
  1. 숫자
  * 별표
    + 더하기
      - 대쉬
```

1. ordered list
    - unordered list
2. ordered list
    1. sub ordered list
    2. sub ordered list

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  1. 숫자
  - 별표
    - 더하기
      - 대쉬

## 2.4. 강조(Emphasis)

```txt
*Italic: single asterisks*
_Italic: single underscores_
**Bold: double asterisks**
__Bold: double underscores__
**Bold and _Italic_** and normal
<u>Underline: use `u`</u>
~~LineThrough: double wavy~~
```

- *Italic: single asterisks*
- *Italic: single underscores*
- **Bold: double asterisks**
- **Bold: double underscores**
- **Bold and *Italic*** and normal
- <u>Underline: use `<u></u>`</u>
- ~~LineThrough: double wavy~~

## 2.5. 링크(Link)

`<a>` 태그를 나타낸다.

### 2.5.1 링크 기본 문법

`[링크 설명](url)` 방식으로 표현하여 url을 `[Keyword]`로 표현 할 수 있다.

```txt
1. [GOOGLE](https://google.com)

2. [NAVER](https://naver.com "여기에 쓰는 링크 설명은 사용자에게 보이지 않아요")

3. [로컬 링크](../)

4. [GitHub][1]

[1]: https://github.com
```

1. [GOOGLE](https://google.com)

2. [NAVER](https://naver.com "여기에 쓰는 링크 설명은 사용자에게 보이지 않아요")

3. [로컬 링크](../)

4. [GitHub][1]

[1]: https://github.com

### 2.5.2 참조 링크

```txt
문서 안에 [참조 링크]를 사용할 수 있다.

[참조 링크]: https://github.co
```

문서 안에 [참조 링크]를 사용할 수 있다.

[참조 링크]: https://github.co

### 2.5.3 자동 연결

일반 URL 이나 이메일 주소, 또는 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 생성한다.

```txt
* 구글 홈페이지: https://google.com
* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>
```

- 구글 홈페이지: <https://google.com>
- 외부링크: <http://example.com/>
- 이메일링크: <address@example.com>

## 2.6. 줄바꿈(Line-break)

마크다운에서는 엔터키 대신 띄어쓰기 두번을 사용해야한다.

```txt
글을 쓰다가 줄바꿈을 하고싶을 경우 
엔터키로는 줄바꿈이 되지 않는다.

줄바꿈 하고 싶은 문단의 마지막에  
띄어쓰기 두번을 사용하고 엔터키를 누른다.

뛰어쓰기로 사용되는 &nbsp;&nbsp;
는 진짜 띄어쓰기만 된다.

또는 쉽게 <br> 태그를 활용할 수 있다.
```

글을 쓰다가 줄바꿈을 하고싶을 경우
엔터키(\n)로는 줄바꿈이 되지 않는다.

줄바꿈 하고 싶은 문단의 마지막에  
띄어쓰기 두번을 사용하고 엔터키를 누른다.

뛰어쓰기로 사용되는 &nbsp;&nbsp;
는 진짜 띄어쓰기만 된다.

또는 쉽게 <br> 태그를 활용할 수 있다.

## 2.7. 수평선 (Horizontal Rule)

마크다운 문서 작성 시 페이지 나누기 용도로 많이 사용한다.
`<hr/>` 태그를 아래와 같이 표현 할 수 있다.

```txt
(underscores x3) 
___

(dash x3) 
---

(asterisks x3) 
***

<hr/>
```

예시) ↓↓↓

---

# 3. 정리

다음편에 계속...

---

## 참고문서

[HEROPY Tech : MarkDown 사용법 총정리](https://heropy.blog/2017/09/30/markdown/)  
[ihoneymon : [공통] 마크다운 markdown 작성법](https://gist.github.com/ihoneymon/652be052a0727ad59601)
