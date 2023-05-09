![header](https://capsule-render.vercel.app/api?type=rounded&color=auto&section=header&text=NearBuy&fontSize=70)

'NearBuy' 프로젝트의 프론트엔드 서버에 사용되는 레포지토리입니다.
## 👉 연계 Backend Repo
> https://github.com/Dcom-KHU/nearbuy-backend

---

## 프로젝트 소개
'NearBuy'는 1인 가구, 자취생들을 위한 동네 거래 플랫폼입니다. 공동구매 기능을 중심으로 기존의 중고 거래 플랫폼에서 제공하는 다양한 형태의 거래를 제공합니다.

## 개발 동기 및 개발 목적
현재 1인 가구의 비율은 전체 가구의 약 33%로, 2000년 약 15%에 비해 2배 이상 늘었습니다.

1인 가구 증가에 따라 가족과 단절되고 사회적 고립감이 심해지고 있고, 이에 따른 여러 가지 부작용이 발생하고 있습니다.

또한 1인 가구를 위한 많은 1인용 상품들이 출시되고있지만, 소포장되는 경우가 대부분이라 기존 품들보다 같은 양 대비 비싼 경우가 많습니다. 

'NearBuy'는 1인 가구, 자취생들을 위한 혼자 먹고 쓰기에는 많은 양의 상품들의 공동구매 기능을 중심으로, 판매, 교환, 나눔, 경매 기능을 통해 1인 가구, 자취생들끼리 서로 필요한 물품을 구매하고 판매할 수 있게끔 제공합니다. 또한 거래를 위한 사람간의 대면을 통해 1인 가구의 사회적 고립감을 해결할 수 있게끔 하였습니다.

## 개발 환경 및 사용 기술
- FrontEnd : React, Next.js, TypeScript, Redux, Styled-Component, Tailwind CSS, Formik
- BackEnd : Spring Boot, MySQL, MongoDB, Docker, EC2, Route53, CertBot
- 공통 : Git, Postman
- 협업툴 : Notion, GitHub, Figma

## 페이지별 기능
### 로그인 페이지
<img src="https://user-images.githubusercontent.com/82189072/236872584-0b5f636c-9768-4c3b-9a55-d977906d3300.png" width="800" height="480"/>

아이디와 비밀번호를 입력받는 일반 로그인과 소셜 로그인을 지원합니다.

### 회원가입 페이지
<img src="https://user-images.githubusercontent.com/82189072/236872916-7c6909d8-b01d-498c-8f5e-4a5d24905703.png" width="800" height="480"/>

아이디(이메일), 이름(닉네임), 비밀번호를 입력 받아 회원가입을 진행합니다.

### 유저 페이지
<img src="https://user-images.githubusercontent.com/82189072/236881009-b6cc7c5a-0cc7-4060-9b69-cb423da98dcf.png" width="800" height="480"/>

사용자의 정보와 게시한 글, 참여중인 글, 찜한 글, 거래 후기를 조회할 수 있습니다.

<img src="https://user-images.githubusercontent.com/82189072/236881656-839dd0e1-4952-4d74-b671-5c483722f7cc.png" width="800" height="480"/>
<img src="https://user-images.githubusercontent.com/82189072/236881667-a8a4db28-e841-4b00-a07c-cfc6384a66f5.png" width="800" height="480"/>

유저 프로필을 수정할 수 있으며, 일반 로그인 사용자에 한해 비밀번호 변경이 가능합니다.

### 게시판 페이지
<img src="https://user-images.githubusercontent.com/82189072/236873172-5801f4ab-9401-4bf8-a0e4-ba5d003e1047.png" width="800" height="240"/>

해당 종류의 게시글을 조회하며, 최신순, 높은 가격순, 낮은 가격순으로 정렬할 수 있습니다. 

또한 우측 상단 돋보기 버튼을 클릭해 검색어를 입력하면 제목, 내용, 태그에 검색어가 포함된 게시글을 조회합니다.

우측의 연필 버튼을 클릭하면 게시글을 작성할 수 있는데, 판매/교환/나눔, 경매, 공구 게시글 작성화면이 나뉘어져 있습니다.

### 판매/교환/나눔 게시글 페이지
<img src="https://user-images.githubusercontent.com/82189072/236874541-84f79b29-9d17-4921-bb9c-8b8f75eaa184.png" width="800" height="480"/>
<img src="https://user-images.githubusercontent.com/82189072/236875454-fb56331a-7926-401d-b94d-64c7d9a156d4.png" width="800" height="480"/>

제목, 내용, 태그, 주소, 사진을 등록할 수 있으며, 판매 게시글은 가격, 교환 게시글은 희망 교환 물품을 추가로 등록할 수 있습니다.

주소는 지도에서 지역을 입력하고 해당하는 마크를 클릭하여 등록합니다.

<img src="https://user-images.githubusercontent.com/82189072/236876092-6ee76742-f511-4e03-9bfc-d261ef83dd6a.png" width="800" height="480"/>

게시글 작성자의 경우 게시글 수정과 삭제 아이콘이 활성화되며, 작성자가 아닌 경우 게시글 찜과 신고 아이콘이 활성화됩니다.

채팅하기 버튼을 누르면 게시글 작성자와 1대1 채팅방이 개설됩니다.

### 경매 게시글 페이지
<img src="https://user-images.githubusercontent.com/82189072/236876953-03727f7c-35c9-4faf-ac16-6016209058c3.png" width="800" height="480"/>

제목, 내용, 태그, 주소, 사진을 등록할 수 있으며, 추가로 경매 시작 가격과 경매 가격 단위, 경매 만료일을 지정할 수 있습니다.

<img src="https://user-images.githubusercontent.com/82189072/236877472-06fe7995-1131-456b-a8c2-c824a7e9f10e.png" width="800" height="480"/>

참여하기 버튼을 누르면 경매에 참여할 수 있고, 희망하는 가격으로 경매를 참여할 수 있습니다.

<img src="https://user-images.githubusercontent.com/82189072/236877844-626586a6-67b5-4835-8fae-c25161935613.png" width="800" height="480"/>

게시글 작성자는 경매 참여자를 조회할 수 있으며, 망치 버튼을 눌러 경매 낙찰을 진행할 수 있습니다.

경매 낙찰이 진행되면 더 이상 경매 참여가 불가하며, 게시글 작성자와 경매 낙찰자의 1대1 채팅방이 자동으로 개설됩니다.

### 공구(공동구매) 게시글 페이지
<img src="https://user-images.githubusercontent.com/82189072/236878355-17e741cd-09ee-47f0-8453-387f9654599c.png" width="800" height="480"/>

제목, 내용, 태그, 주소, 사진을 등록할 수 있으며, 추가로 물품 가격, 공구 인원, 공구 일자, 공구 방법을 지정할 수 있습니다.

<img src="https://user-images.githubusercontent.com/82189072/236878746-b8945178-06aa-4e4a-b287-a7c3d7138ad4.png" width="800" height="480"/>

참여하기 버튼을 누르면 공구에 참여할 수 있습니다.

<img src="https://user-images.githubusercontent.com/82189072/236878756-feb7c241-dd9c-417d-8ee6-74b3628a56ef.png" width="800" height="480"/>

게시글 작성자는 공구 참여자를 조회할 수 있으며, 단체 채팅 버튼을 누르면 현재 공구 참여자들과 단체 채팅방을 개설합니다.

### 채팅방 목록 페이지
<img src="https://user-images.githubusercontent.com/82189072/236879576-f1a1a7f6-6494-4094-928e-571c503f5ea5.png" width="800" height="480"/>

개설된 채팅방 목록과 채팅방별 채팅 목록을 확인할 수 있으며, 채팅을 할 수 있습니다. 

## 기대 효과
- 1인용 상품을 사는 것보다 저렴하게 상품을 구할 수 있어 효율적인 소비가 가능할 것으로 기대됩니다.
- 거래를 위한 사람간의 대면을 통해 1인 가구가 가지는 사회적 고립감을 해소할 수 있을 것으로 기대됩니다.
- 1인 가구, 자취생 간 중고 거래를 통해 재활용이 증가함에 따라 환경보호 효과를 가져올 것으로 기대됩니다.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
