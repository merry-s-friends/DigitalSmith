# Node.js 18.12.0 이미지를 기반으로 새 이미지 생성
FROM node:18.12.0

# 작업 디렉토리 생성 및 설정
WORKDIR /usr/src/app

# package.json과 package-lock.json 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# TypeScript를 전역으로 설치 (tsc 컴파일러 사용)
RUN npm install -g typescript

# 애플리케이션 소스 코드를 Docker 컨테이너에 복사
COPY . .

# TypeScript를 JavaScript로 컴파일
RUN tsc

# 컨테이너 실행 명령 (컴파일된 JS 파일 실행)
CMD [ "node", "build/app.js" ]
