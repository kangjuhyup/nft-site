
## Use
Framwork : <br>
`Next.js 13` <br>
Library :<br>
    `wagmi` - blockChain 노드 및 지갑과 통신하기 위한 Hook 라이브러리<br>
    `zustand` - 상태관리 라이브러리

## 구조
MVVM 패턴을 지향한다.<br>

`View ( Page, Component )` : 화면. 뷰모델의 notification 으로 갱신 <br>
`View Controller` : 화면 로직처리. <br>
`ViewModal ( Hooks )` : 비즈니스 로직처리. 및 모델 변경<br>
`Model ( Store ) ` : 데이터 저장소.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
