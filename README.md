# blockchain_with_typescript

# typescript 설치

- yarn global add typescript
- tsconfig.json 설정
- terminer => tsc 입력
  tsc는 ts파일에 있는 코드를 컴파일해서 index.js랑 index.js.map을 만들어줌

  -package.json에서 script설정
  yarn start 를 입력하면 prestart가 먼저 실행되고 그다음 start가 실행됨
  tsc명령어를 prestart에 넣어주고 node index.js를 start에 넣어줌

  typescript파일을 js파일로 컴파일 해주는 명령어가 tsc명령어임
  따라서 컴파일후 생성된 index.js파일을 node로 실행해줌
