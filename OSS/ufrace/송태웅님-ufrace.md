# 송태웅님의 ufrace강의
> 2018.4.1 - OSS, Hands on Lab

## 코스랩( KOSSLAB )의 '송태웅'님의 소개
> 코스랩이란?
>> 오픈소스의 모임(https://osseu17.sched.com/ )
>> 송태웅님의 깃헙 https://github.com/namhyung/uftrace/blob/master/CONTRIBUTING.md

## printf()를 왜 쓸까...?
> CPU에서 RAM으로 보낸 명령을 인간은 보지 못한다. (어셈블리, 디셈블리 제와)
> printf를 쓰면 실행의 내부과정에 대해 확인해 보고, 조사할 수 있다.

## uftrace
> uftrace의 깃헙 : https://github.com/namhyung/uftrace
>> C나 C++ 등에 대해서 function을 tracer한다.

## uftrace를 linux에서..

### ubuntu에서..
> sudo apt - get install libelf-dev
> sudo dnf install elfutils-libelf-devel

### 명령어 ( 다운 & 인스톨 )
>   git clone https://github.com/namhyung/uftrace.git
>	cd uftrace
>	./configure
>	make
>	sudo make install

## 추가할 내용 +
> ...