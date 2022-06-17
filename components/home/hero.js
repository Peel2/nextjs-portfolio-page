import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 PEEL2STUDIO 입니다.
          <br className='hidden lg:inline-block' />
          Ready to Roll?
        </h1>
        <p className='mb-8 leading-relaxed'>
          용기가 위하여 이상의 교향악이다. 발휘하기 바로 영락과 봄바람이다. 뭇
          것이 우리 인생에 이상의 이상의 황금시대의 것이다. 가는 풀밭에 쓸쓸한
          싹이 불어 얼마나 새가 뭇 아니다. 오직 풍부하게 영락과 새가 가장
          말이다. 청춘의 싹이 소담스러운 아니다. 목숨을 곳으로 것이 원질이 맺어,
          인생에 피부가 봄바람이다. 열락의 같으며, 곳으로 인간에 두손을 인간의
          것이 교향악이다. 천자만홍이 새 우리 너의 듣는다. 있는 못하다 없으면
          같이, 별과 돋고, 것이다. 풍부하게 넣는 우는 위하여서.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <a className='btn-project'>프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
    </>
  );
}
